---
title: "Module: index"
sidebar_label: "index"
custom_edit_url: null
hide_title: true
---

# Module: index

The Tauri API allows you to interface with the backend layer.

This module exposes all other modules as an object where the key is the module name, and the value is the module exports.

**`example`**
```typescript
import { app, dialog, event, fs, globalShortcut } from '@tauri-apps/api'
```
