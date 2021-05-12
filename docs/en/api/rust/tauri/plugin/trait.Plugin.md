---
title: "trait.Plugin"
---

# Trait [tauri](/docs/api/rust/tauri/../index.html)::​[plugin](/docs/api/rust/tauri/index.html)::​[Plugin](/docs/api/rust/tauri/)

```rs
pub trait Plugin<P: Params>: Send {
    fn name(&self) -> &'static str;

    fn initialize(&mut self, app: &App<P>, config: JsonValue) -> Result<()> { ... }

    fn initialization_script(&self) -> Option<String> { ... }

    fn created(&mut self, window: Window<P>) { ... }

    fn on_page_load(&mut self, window: Window<P>, payload: PageLoadPayload) { ... }

    fn extend_api(&mut self, invoke: Invoke<P>) { ... }
}
```

The plugin interface.

## Required methods

### `fn name(&self) -> &'static str`

The plugin name. Used as key on the plugin config object.

Loading content...

## Provided methods

### `fn initialize(&mut self, app: &App<P>, config: JsonValue) -> Result<()>`

Initialize the plugin.

### `fn initialization_script(&self) -> Option<String>`

The JS script to evaluate on webview initialization. The script is wrapped into its own context with `(function () { /* your script here */ })();`, so global variables must be assigned to `window` instead of implicity declared.

It’s guaranteed that this script is executed before the page is loaded.

### `fn created(&mut self, window: Window<P>)`

Callback invoked when the webview is created.

### `fn on_page_load(&mut self, window: Window<P>, payload: PageLoadPayload)`

Callback invoked when the webview performs a navigation.

### `fn extend_api(&mut self, invoke: Invoke<P>)`

Add invoke_handler API extension commands.

Loading content...

## Implementors

Loading content...
