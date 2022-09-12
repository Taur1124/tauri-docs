# cli

Parse arguments from your Command Line Interface.

This package is also accessible with `window.__TAURI__.cli` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Interfaces

### `ArgMatch`

#### Properties

##### `occurrences`

>  **occurrences**: `number`

Number of occurrences

**Defined in:** [cli.ts:24](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L24)

##### `value`

>  **value**: `null` \| `string` \| `boolean` \| `string`[]

string if takes value
boolean if flag
string[] or null if takes multiple values

**Defined in:** [cli.ts:20](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L20)

### `CliMatches`

#### Properties

##### `args`

>  **args**: { `[name: string]`: [`ArgMatch`](cli.md#argmatch);  }

**Defined in:** [cli.ts:33](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L33)

##### `subcommand`

>  **subcommand**: `null` \| [`SubcommandMatch`](cli.md#subcommandmatch)

**Defined in:** [cli.ts:34](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L34)

### `SubcommandMatch`

#### Properties

##### `matches`

>  **matches**: [`CliMatches`](cli.md#climatches)

**Defined in:** [cli.ts:29](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L29)

##### `name`

>  **name**: `string`

**Defined in:** [cli.ts:28](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L28)

## Functions

### `getMatches`

> **getMatches**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`CliMatches`](cli.md#climatches)\>

Parse the arguments provided to the current process and get the matches using the configuration defined [`tauri.cli`](https://tauri.app/v1/api/config/#tauriconfig.cli) in `tauri.conf.json`

**Example**

```typescript
import { getMatches } from '@tauri-apps/api/cli';
const matches = await getMatches();
if (matches.subcommand?.name === 'run') {
  // `./your-app run $ARGS` was executed
  const args = matches.subcommand?.matches.args
  if ('debug' in args) {
    // `./your-app run --debug` was executed
  }
} else {
  const args = matches.args
  // `./your-app $ARGS` was executed
}
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`CliMatches`](cli.md#climatches)\>

A promise resolving to the parsed arguments.
