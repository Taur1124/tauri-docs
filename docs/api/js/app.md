# app

Get application metadata.

This package is also accessible with `window.__TAURI__.app` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Functions

### `getName`

> **getName**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Gets the application name.

**Example**

```typescript
import { getName } from '@tauri-apps/api/app';
const appName = await getName();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

A promise resolving to application name.

### `getTauriVersion`

> **getTauriVersion**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Gets the Tauri version.

**Example**

```typescript
import { getTauriVersion } from '@tauri-apps/api/app';
const tauriVersion = await getTauriVersion();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

A promise resolving to Tauri version.

### `getVersion`

> **getVersion**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Gets the application version.

**Example**

```typescript
import { getVersion } from '@tauri-apps/api/app';
const appVersion = await getVersion();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

A promise resolving to the application version.
