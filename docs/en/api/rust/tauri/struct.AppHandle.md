---
title: Struct tauri::AppHandle
sidebar_label: struct.AppHandle
custom_edit_url: null
---

# Struct tauri::AppHandle,\[−]\[src],\[−],−

```rs
pub struct AppHandle<P: Params = Args<String, String, String, String, EmbeddedAssets, Wry>> { /* fields omitted */ }
```

A handle to the currently running application.

This type implements [`Manager`](/docs/api/rust/tauri/../tauri/trait.Manager "Manager") which allows for manipulation of global application items.

## Implementations

### `Params`

```rs
impl<P: Params> AppHandle<P>
```

_Defined in: [app.rs:266](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L266)_

#### `create_window`

```rs
pub fn create_window<F>(
    &self, 
    label: P::Label, 
    url: WindowUrl, 
    setup: F
) -> Result<()> where
    F: FnOnce(<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes) -> (<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes), 
```

Creates a new webview window.

_Defined in: [app.rs:266](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L266)_

#### `path_resolver`

```rs
pub fn path_resolver(&self) -> PathResolver
```

The path resolver for the application.

_Defined in: [app.rs:266](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L266)_

#### `global_shortcut_manager`

```rs
pub fn global_shortcut_manager(
    &self
) -> <P::Runtime as Runtime>::GlobalShortcutManager
```

Gets a copy of the global shortcut manager instance.

_Defined in: [app.rs:266](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L266)_

#### `clipboard_manager`

```rs
pub fn clipboard_manager(&self) -> <P::Runtime as Runtime>::ClipboardManager
```

Gets a copy of the clipboard manager instance.

_Defined in: [app.rs:266](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L266)_

#### `config`

```rs
pub fn config(&self) -> Arc<Config>
```

Gets the app’s configuration, defined on the `tauri.conf.json` file.

_Defined in: [app.rs:266](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L266)_

#### `package_info`

```rs
pub fn package_info(&self) -> &PackageInfo
```

Gets the app’s package information.

_Defined in: [app.rs:266](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L266)_

## Trait Implementations

### `Params`

```rs
impl<P: Params> Clone for AppHandle<P>
```

_Defined in: [app.rs:124-135](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L124-135)_

#### `clone`

```rs
fn clone(&self) -> Self
```

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

_Defined in: [app.rs:125-134](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L125-134)_

#### `clone_from`

```rs
pub fn clone_from(&mut self, source: &Self)
```

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

_Defined in: [clone.rs:130](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/clone.rs#L130)_

### `Params`

```rs
impl<'de, P: Params> CommandArg<'de, P> for AppHandle<P>
```

_Defined in: [app.rs:137-142](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L137-142)_

#### `from_command`

```rs
fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>
```

Grabs the [`Window`](/docs/api/rust/tauri/../tauri/window/struct.Window "Window") from the [`CommandItem`](/docs/api/rust/tauri/../tauri/command/struct.CommandItem "CommandItem") and returns the associated [`AppHandle`](/docs/api/rust/tauri/../tauri/struct.AppHandle "AppHandle"). This will never fail.

_Defined in: [app.rs:139-141](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L139-141)_

### `Params`

```rs
impl<P: Params> Manager<P> for AppHandle<P>
```

_Defined in: [app.rs:153](https://github.com/https://blob/e663bdd/core/tauri/src/app.rs#L153)_

#### `config`

```rs
fn config(&self) -> Arc<Config>
```

The [`Config`](/docs/api/rust/tauri/../tauri/struct.Config "Config") the manager was created with.

_Defined in: [lib.rs:247-249](https://github.com/https://blob/e663bdd/core/tauri/src/lib.rs#L247-249)_

#### `emit_all`

```rs
fn emit_all<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>,
    S: Serialize + Clone, 
```

Emits a event to all windows.

_Defined in: [lib.rs:252-259](https://github.com/https://blob/e663bdd/core/tauri/src/lib.rs#L252-259)_

#### `emit_to`

```rs
fn emit_to<E: ?Sized, L: ?Sized, S: Serialize + Clone>(
    &self, 
    label: &L, 
    event: &E, 
    payload: S
) -> Result<()> where
    P::Label: Borrow<L>,
    P::Event: Borrow<E>,
    L: TagRef<P::Label>,
    E: TagRef<P::Event>, 
```

Emits an event to a window with the specified label.

_Defined in: [lib.rs:262-277](https://github.com/https://blob/e663bdd/core/tauri/src/lib.rs#L262-277)_

#### `listen_global`

```rs
fn listen_global<E: Into<P::Event>, F>(
    &self, 
    event: E, 
    handler: F
) -> EventHandler where
    F: Fn(Event) + Send + 'static, 
```

Listen to a global event.

_Defined in: [lib.rs:280-285](https://github.com/https://blob/e663bdd/core/tauri/src/lib.rs#L280-285)_

#### `once_global`

```rs
fn once_global<E: Into<P::Event>, F>(
    &self, 
    event: E, 
    handler: F
) -> EventHandler where
    F: Fn(Event) + Send + 'static, 
```

Listen to a global event only once.

_Defined in: [lib.rs:288-293](https://github.com/https://blob/e663bdd/core/tauri/src/lib.rs#L288-293)_

#### `trigger_global`

```rs
fn trigger_global<E: ?Sized>(&self, event: &E, data: Option<String>) where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>, 
```

Trigger a global event.

_Defined in: [lib.rs:296-302](https://github.com/https://blob/e663bdd/core/tauri/src/lib.rs#L296-302)_

#### `unlisten`

```rs
fn unlisten(&self, handler_id: EventHandler)
```

Remove an event listener.

_Defined in: [lib.rs:305-307](https://github.com/https://blob/e663bdd/core/tauri/src/lib.rs#L305-307)_

#### `get_window`

```rs
fn get_window<L: ?Sized>(&self, label: &L) -> Option<Window<P>> where
    P::Label: Borrow<L>,
    L: TagRef<P::Label>, 
```

Fetch a single window from the manager.

_Defined in: [lib.rs:310-316](https://github.com/https://blob/e663bdd/core/tauri/src/lib.rs#L310-316)_

#### `windows`

```rs
fn windows(&self) -> HashMap<P::Label, Window<P>>
```

Fetch all managed windows.

_Defined in: [lib.rs:319-321](https://github.com/https://blob/e663bdd/core/tauri/src/lib.rs#L319-321)_

#### `manage`

```rs
fn manage<T>(&self, state: T) where
    T: Send + Sync + 'static, 
```

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../tauri/struct.Builder#manage "crate::Builder") for instructions. [Read more](/docs/api/rust/tauri/../tauri/trait.Manager#method.manage)

_Defined in: [lib.rs:325-330](https://github.com/https://blob/e663bdd/core/tauri/src/lib.rs#L325-330)_

#### `state`

```rs
fn state<T>(&self) -> State<'_, T> where
    T: Send + Sync + 'static, 
```

Gets the managed state for the type `T`.

_Defined in: [lib.rs:333-338](https://github.com/https://blob/e663bdd/core/tauri/src/lib.rs#L333-338)_

## Auto Trait Implementations

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !RefUnwindSafe for AppHandle<P>`

### `impl<P> Send for AppHandle<P>`

### `impl<P> Sync for AppHandle<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Sync, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Sync, <<P as Params>::Runtime as Runtime>::Handle: Sync,`

### `impl<P> Unpin for AppHandle<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Unpin, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Unpin, <<P as Params>::Runtime as Runtime>::Handle: Unpin,`

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !UnwindSafe for AppHandle<P>`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)_

### `ToOwned`

```rs
impl<T> ToOwned for T where
    T: Clone, 
```

_Defined in: [borrow.rs:81-93](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L81-93)_

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `to_owned`

```rs
pub fn to_owned(&self) -> T
```

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

_Defined in: [borrow.rs:86](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L86)_

#### `clone_into`

```rs
pub fn clone_into(&self, target: &mut T)
```

_Defined in: [borrow.rs:90](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L90)_

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
