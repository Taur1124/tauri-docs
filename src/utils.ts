import { astroI18n } from 'astro-i18n'
import { CollectionEntry, getCollection, getEntryBySlug } from 'astro:content'
import type { getCollection as CollectionType } from 'astro:content'
import fs from 'fs/promises'

export async function geti18nCollection<
  C extends Parameters<typeof CollectionType>[0]
>(collection: C, lang: LangCode, slugStartsWith?: string) {
  // Get entries from a collection for the default lang
  const defaultLangCollection = await getCollection(collection, ({ slug }) =>
    slug.startsWith(
      `${astroI18n.defaultLangCode}/${slugStartsWith ? slugStartsWith : ''}`
    )
  )

  // Iterate through each of the entries for the default lang
  const allEntries = await Promise.all(
    defaultLangCollection.map(async (entry) => {
      const baseSlug = entry.slug.slice(astroI18n.defaultLangCode.length + 1)

      // If we're getting for the default lang then return the entry
      if (lang === astroI18n.defaultLangCode) {
        if (!astroI18n.showDefaultLangCode) {
          return {
            ...entry,
            slug: baseSlug,
          }
        } else {
          return entry
        }
      }

      // Attempt to load the localized entry
      const localizedSlug = `${lang}/${baseSlug}`
      const localizedEntry = await getEntryBySlug(collection, localizedSlug)

      // Fall back to the default lang entry
      if (!localizedEntry) {
        return {
          ...entry,
          slug: baseSlug,
        }
      }

      return localizedEntry
    })
  ).then((result) => result.flat())

  return allEntries
}

export interface TreeNode {
  slug: string
  children?: TreeNode[]
}

export function convertCollectionToTree<
  C extends Parameters<typeof CollectionType>[0]
>(entries: CollectionEntry<C>[]): TreeNode[] {
  // This sort should read the data of an entry and first sort on meta_position if
  // it exists, else meta_title if it exists, else slug
  entries.sort((a, b) => {
    if (a.data && b.data) {
      if (a.data.meta_position && b.data.meta_position) {
        // Use meta position primarily
        return a.data.meta_position - b.data.meta_position
      } else if (a.data.meta_title && b.data.meta_title) {
        // Else use the title
        return a.data.meta_title.localeCompare(b.data.meta_title)
      }
    }
    return 0
  })

  // Transforms flattened array to EntryMap format,
  const entriesMap = entries.reduce(
    (obj, { slug, ...data }: { slug: string }) => {
      const slugArray = slug.split('/')

      // Creates all parent entries that don't exist
      const leaf = slugArray.reduce(
        (parent, slug) => ((parent.children ??= {})[slug] ??= {}),
        obj
      )

      Object.assign(leaf, data)

      return obj
    },
    {} as EntryMap[string]
  )

  return recurseTreeNodes(entriesMap.children)
}

type EntryMap = {
  [K: string]: {
    children?: EntryMap
  }
}

// Converts an `EntryMap` key-value tree to an array based `TreeNode` tree
function recurseTreeNodes(obj: EntryMap, parent = '') {
  return Object.entries(obj).map(
    ([slug, { children, ...data }]): TreeNode => ({
      // `slug` is the leaf slug, so it must be joined to the
      // rest of the parent path
      slug: `${parent}${slug}`,
      ...data,
      // children shouldn't be defined if there aren't any
      ...(children
        ? {
            children: recurseTreeNodes(children, `${parent}${slug}/`),
          }
        : {}),
    })
  )
}
