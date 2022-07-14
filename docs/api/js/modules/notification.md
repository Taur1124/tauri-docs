[@tauri-apps/api](../README.md) / notification

# Module: notification

Send toast notifications (brief auto-expiring OS window element) to your user.
Can also be used with the Notification Web API.

This package is also accessible with `window.__TAURI__.notification` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

The APIs must be added to [`tauri.allowlist.notification`](https://tauri.app/v1/api/config/#allowlistconfig.notification) in `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "notification": {
        "all": true // enable all notification APIs
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Interfaces

- [Options](../interfaces/notification.Options.md)

## Type Aliases

### Permission

 **Permission**: ``"granted"`` \| ``"denied"`` \| ``"default"``

Possible permission values.

#### Defined in

[notification.ts:42](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/notification.ts#L42)

## Functions

### isPermissionGranted

**isPermissionGranted**(): `Promise`<`boolean`\>

Checks if the permission to send notifications is granted.

**`Example`**

```typescript
import { isPermissionGranted } from '@tauri-apps/api/notification';
const permissionGranted = await isPermissionGranted();
```

#### Returns

`Promise`<`boolean`\>

___

### requestPermission

**requestPermission**(): `Promise`<[`Permission`](notification.md#permission)\>

Requests the permission to send notifications.

**`Example`**

```typescript
import { isPermissionGranted, requestPermission } from '@tauri-apps/api/notification';
let permissionGranted = await isPermissionGranted();
if (!permissionGranted) {
  const permission = await requestPermission();
  permissionGranted = permission === 'granted';
}
```

#### Returns

`Promise`<[`Permission`](notification.md#permission)\>

A promise resolving to whether the user granted the permission or not.

___

### sendNotification

**sendNotification**(`options`): `void`

Sends a notification to the user.

**`Example`**

```typescript
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
let permissionGranted = await isPermissionGranted();
if (!permissionGranted) {
  const permission = await requestPermission();
  permissionGranted = permission === 'granted';
}
if (permissionGranted) {
  sendNotification('Tauri is awesome!');
  sendNotification({ title: 'TAURI', body: 'Tauri is awesome!' });
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `string` \| [`Options`](../interfaces/notification.Options.md) | Notification options. |

#### Returns

`void`
