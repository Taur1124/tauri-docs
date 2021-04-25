---
title: "trait.Tag"
---

# Trait [tauri](/docs/api/rust/tauri/../../index.html)::​[runtime](/docs/api/rust/tauri/../index.html)::​[tag](/docs/api/rust/tauri/index.html)::​[Tag](/docs/api/rust/tauri/)

    pub trait Tag: Hash + Eq + FromStr + Display + Debug + Clone + Send + Sync + 'static { }

Represents a "string-able" type.

The type is required to be able to be represented as a string [`Display`](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html "Display"), along with knowing how to be parsed from the string representation [`FromStr`](https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html "FromStr"). To make sure things stay easy to debug, both the [`Tag`](/docs/api/rust/tauri/../../../tauri/runtime/tag/trait.Tag.html "Tag") and the [`FromStr::Err`](https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html#associatedtype.Err "FromStr::Err") must implement [`Debug`](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html "Debug").

[`Clone`](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html "Clone"), [`Hash`](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html "Hash"), and [`Eq`](https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html "Eq") are needed so that it can represent un-hashable types.

[`Send`](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "Send") and [`Sync`](https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html "Sync") and `'static` are current requirements due to how it is sometimes sent across thread boundaries, although some of those constraints may relax in the future.

The simplest type that fits all these requirements is a [`String`](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html).

# [Handling Errors](/docs/api/rust/tauri/about:blank#handling-errors)

Because we leave it up to the type to implement [`FromStr`](https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html "FromStr"), if an error is returned during parsing then Tauri will [`std::panic!`](https://doc.rust-lang.org/nightly/std/macro.panic.html "std::panic!") with the string it failed to parse.

To avoid Tauri panicking during the application runtime, have your type be able to handle unknown events and never return an error in [`FromStr`](https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html "FromStr"). Then it will be up to your own code to handle the unknown event.

# [Example](/docs/api/rust/tauri/about:blank#example)

    use std::fmt;
    use std::str::FromStr;

    #[derive(Debug, Clone, Hash, Eq, PartialEq)]
    enum Event {
      Foo,
      Bar,
      Unknown(String),
    }

    impl fmt::Display for Event {
      fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(match self {
          Self::Foo => "foo",
          Self::Bar => "bar",
          Self::Unknown(s) => &s
        })
      }
    }

    impl FromStr for Event {
      type Err = std::convert::Infallible;

      fn from_str(s: &str) -> Result<Self, Self::Err> {
        Ok(match s {
          "foo" => Self::Foo,
          "bar" => Self::Bar,
          other => Self::Unknown(other.to_string())
        })
      }
    }

    // safe to unwrap because we know it's infallible due to our FromStr implementation.
    let event: Event = "tauri://file-drop".parse().unwrap();

    // show that this event type can be represented as a Tag, a requirement for using it in Tauri.
    fn is_file_drop(tag: impl tauri::runtime::tag::Tag) {
      assert_eq!("tauri://file-drop", tag.to_string());
    }

    is_file_drop(event);

## Implementors

### `impl<T, E: Debug> Tag for T where T: Hash + Eq + FromStr<Err = E> + Display + Debug + Clone + Send + Sync + 'static,`

Automatically implement [`Tag`](/docs/api/rust/tauri/../../../tauri/runtime/tag/trait.Tag.html "Tag") for all types that fit the requirements.

Loading content...
