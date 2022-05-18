const fs = require('fs')
const path = require('path')
const schemaPath = path.join(__dirname, '../../tauri/tooling/cli/schema.json')
const schemaString = fs
  .readFileSync(schemaPath)
  .toString()
  // Fixes any angle brackets that aren't escaped propertly
  .replaceAll('(?<!\\)<', '<')
  .replaceAll('(?!\\)>', '>')
const schema = JSON.parse(schemaString)
const targetPath = path.join(__dirname, '../docs/api/config.md')

const output = []

buildObject(null, schema, 1)

function buildObject(key, value, headerLevel) {
  var headerTitle
  if (value.title) {
    headerTitle = value.title
  } else {
    headerTitle = key
  }

  if (headerTitle === 'Config') {
    headerTitle = 'Configuration'
  }

  var header = `${'#'.repeat(headerLevel)} ${headerTitle}\n`

  if (headerLevel == 3) {
    header = '\n<br />\n\n' + header
  }

  output.push(header)
  output.push(`${descriptionConstructor(value.description, false)}\n`)
  output.push(longFormTypeConstructor(value))

  buildProperties(headerTitle, value)

  if (value.definitions) {
    Object.entries(value.definitions).forEach(([innerKey, innerValue]) => {
      buildObject(innerKey, innerValue, headerLevel + 2)
    })
  }
}

function buildProperties(parentName, object) {
  if (!object.properties) {
    return
  }

  var required = []

  if (object.required) {
    required = object.required
  }

  // Build table header
  output.push('| Name | Type | Default | Description |')
  output.push('| ---- | ---- | ------- | ----------- |')

  // Populate table
  Object.entries(object.properties).forEach(([key, value]) => {
    if (key == '$schema') {
      return
    }

    var propertyType = typeConstructor(value)

    if (required.includes(key)) {
      propertyType += '(required)'
    }
    const propertyDefault = defaultConstructor(value)

    const url = `${parentName.toLowerCase()}.${key.toLowerCase()}`
    const name = `<div className="anchor-with-padding" id="${url}">\`${key}\`<a class="hash-link" href="#${url}"></a></div>`
    output.push(
      `| ${name} | ${propertyType} | ${propertyDefault} | ${descriptionConstructor(
        value.description,
        true
      )} |`
    )
  })

  output.push('\n')
}

function descriptionConstructor(description, fixNewlines = false) {
  if (!description) {
    return description
  }

  // Fix bullet points not being on a newline
  description = description.replaceAll(' - ', '\n- ')

  // Parse any json code blocks
  if (description.includes('```json ')) {
    let newDescription = ''
    const s = description.split('```')

    for (const text of s) {
      if (text.startsWith('json')) {
        const description = text.match(/([^{]+)/)[0]
        const json = JSON.stringify(
          JSON.parse(text.replace(description, '')),
          null,
          2
        )
        newDescription += `${description}\n${json}\n`
      } else {
        newDescription += text + '```'
      }
    }
    description = newDescription
  }

  // Fix any embedded new lines
  if (fixNewlines) {
    description = description.replaceAll('\n', '<br />')
  }

  const markdownLinkRegex = /\[([^\[]+)\]\((.*)\)/gm
  const markdownLinkMatches = markdownLinkRegex.exec(description)

  if (markdownLinkMatches) {
    const url = markdownLinkMatches[2]
    if (!url.startsWith('http')) {
      description = description.replace(
        url,
        `#${url.toLowerCase().replaceAll('_', '')}`
      )
    }
  }
  return description
}

function typeConstructor(object) {
  if (object.$ref) {
    return refLinkConstructor(object.$ref)
  }

  if (object.anyOf) {
    // Removes any null values
    var canBeNull = false
    const items = object.anyOf.filter((item) => {
      if (item.type && item.type == 'null') {
        canBeNull = true
        return false
      } else {
        return true
      }
    })

    if (canBeNull && items.length == 1) {
      return `${items.map(typeConstructor)}?`
    }

    return items.map(typeConstructor).join(' \\| ')
  }

  if (object.allOf) {
    return refLinkConstructor(object.allOf[0].$ref)
  }

  if (object.oneOf) {
    return object.oneOf.map(typeConstructor).join(' | ')
  }

  if (object.type) {
    var typeString = ''

    // See what the type is
    switch (typeof object.type) {
      case 'string':
        // See if referencing a different type
        switch (object.type) {
          case 'string':
          case 'number':
          case 'boolean':
            typeString = `\`${object.type}\``
            break
          case 'object':
            typeString = `\`${object.type}\``
            break
          case 'array':
            if (object.items) {
              typeString = `[${typeConstructor(object.items)}]`
              break
            }
          default:
            break
        }
        break
      case 'undefined':
        typeString = '_null_'
        break
      case 'object':
        if (Array.isArray(object.type)) {
          // Check if it should just be an optional value
          if (object.type.length == 2 && object.type.includes('null')) {
            typeString = `\`${object.type.filter((item) => item != 'null')}\`?`
            break
          }
        }
      default:
        break
    }

    var additionalProperties = []

    if (object.format) {
      additionalProperties.push(`format: \`${object.format}\``)
    }

    if (object.multipleOf) {
      additionalProperties.push(`multiple of: \`${object.multipleOf}\``)
    }

    if (object.minimum) {
      additionalProperties.push(`minimum: \`${object.minimum}\``)
    }

    if (object.exclusiveMinimum) {
      additionalProperties.push(
        `exclusive minimum: \`${object.exclusiveMinimum}\``
      )
    }

    if (object.maximum) {
      additionalProperties.push(`maximum: \`${object.maximum}\``)
    }

    if (object.exclusiveMaximum) {
      additionalProperties.push(
        `exclusive maximum: \`${object.exclusiveMaximum}\``
      )
    }

    if (additionalProperties != '') {
      additionalProperties = `_(${additionalProperties.join(', ')})_`
    }

    if (typeString != '') {
      return `${typeString} ${additionalProperties}`
    }
  }

  console.log('A type was not able to be parsed:', object)
  return JSON.stringify(object)
}

function longFormTypeConstructor(object) {
  if (object.enum) {
    var buffer = []
    buffer.push(`Can be any of the following \`${object.type}\` values:`)
    object.enum.forEach((item) => {
      buffer.push(`- ${item}`)
    })
    return buffer.join('\n')
  }
  if (object.anyOf) {
    var buffer = []
    buffer.push('Can be any of the following types:\n')
    object.anyOf.forEach((item) => {
      var description = ':'
      if (item.description) {
        description = `: ${descriptionConstructor(item.description, false)}`
      }
      buffer.push(`- ${typeConstructor(item)}${description}`)
    })

    return buffer.join(`\n`)
  }

  if (object.oneOf) {
    var buffer = []
    buffer.push('Can be any **ONE** of the following types:\n')
    object.oneOf.forEach((item) => {
      var description = ':'
      if (item.description) {
        description = `: ${descriptionConstructor(item.description, false)}`
      }
      buffer.push(`- ${typeConstructor(item)}${description}`)
    })

    return buffer.join(`\n`)
  }

  return `Type: ${typeConstructor(object)}\n`
}

function defaultConstructor(object) {
  switch (typeof object.default) {
    case 'boolean':
    case 'number':
      return `\`${object.default}\``
    case 'object':
      // Check if empty array
      if (Array.isArray(object.default) && object.default.length == 0) {
        return '[]'
      }
    default:
  }

  if (object.$ref) {
    console.error('Found $ref default:', object.$ref)
  }

  if (object.anyOf) {
    const link = object.anyOf[0].$ref
      .replace('#/definitions/', '')
      .toLowerCase()
    return `[view](#${link})`
  }

  if (object.allOf) {
    const link = object.allOf[0].$ref
      .replace('#/definitions/', '')
      .toLowerCase()
    return `[view](#${link})`
  }

  if (object.oneOf) {
    console.error('Found oneOf default:', object.oneOf)
  }

  return '_null_'
}

function refLinkConstructor(string) {
  const name = string.replace('#/definitions/', '')
  return `[\`${name}\`](#${name.toLowerCase()})`
}

fs.writeFileSync(targetPath, output.join('\n'))
