---
title: Setup for Windows
---

import Alert from '@theme/Alert'
import Icon from '@theme/Icon'
import { Intro } from '@theme/SetupDocs'

<Alert title="Note">

For those using the Windows Subsystem for Linux (WSL) please refer to our [Linux specific instructions](/docs/getting-started/setup-linux) instead.
</Alert>

<Intro />

## 1. System Dependencies&nbsp;<Icon title="alert" color="danger"/>

First you should <a href="https://aka.ms/buildtools" target="_blank">download</a> and install Visual Studio MSBuild Tools and C++ build tools.

<Alert title="Note">
This is a big download (over 1GB) and takes the most time, so go grab a :coffee:
</Alert>

<Alert type="warning">

Be sure you don't have the 2017 version of the build tools installed as well. There are reports of `tauri build` not working in such a configuration.
</Alert>

## 2. Node.js Runtime and Package Manager&nbsp;<Icon title="control-skip-forward" color="warning"/>

### Node.js (npm included)

We recommend using <a href="https://github.com/coreybutler/nvm-windows#installation--upgrades" target="_blank">nvm-windows</a> to manage your Node.js runtime. It allows you to easily switch versions and update Node.js.

Then run the following from an Administrative PowerShell and press Y when prompted:

```powershell
# BE SURE YOU ARE IN AN ADMINISTRATIVE PowerShell!
nvm install latest
nvm use {{latest}} # Replace with your latest downloaded version
```

This will install the most recent version of Node.js with npm.

### Optional Node.js Package Manager

You may want to use an alternative to npm:

- <a href="https://yarnpkg.com/getting-started" target="_blank">Yarn</a>, is preferred by Tauri's team
- <a href="https://pnpm.js.org/en/installation" target="_blank">pnpm</a>

## 3. Rustc and Cargo Package Manager&nbsp;<Icon title="control-skip-forward" color="warning"/>

Now you will need to install <a href="https://www.rust-lang.org/" target="_blank">Rust</a>. The easiest way to do this is to use <a href="https://rustup.rs/" target="_blank">rustup</a>, the official installer.

- <a href="https://win.rustup.rs/x86_64" target="_blank">64-bit download link</a>
- <a href="https://win.rustup.rs/i686" target="_blank">32-bit download link</a>

Download and install the proper variant for your computer's architecture.

## 4. Enable Loopback&nbsp;<Icon title="control-skip-forward" color="warning"/>

Microsoft disables the loopback interface - you need to allow it if you intend to use the dev-server:

Open an administrative console and enter:

```powershell
CheckNetIsolation.exe LoopbackExempt -a -n="Microsoft.Win32WebViewHost_cw5n1h2txyewy"
```

<Alert title="Note">
There are reports that you have to restart your computer after running this command, so if it isn't working for you, try that!
</Alert>

## 5. Tauri Bundler&nbsp;<Icon title="alert" color="danger"/>

If you already had rustup installed before following this guide, make sure that you update Rust:

```powershell
rustup update stable
```

After you have installed Rust and other required dependencies, it is wise to restart your terminal before continuing.

Install Tauri bundler through Cargo:

```sh
cargo install tauri-bundler --force
```

## 6. Devtools&nbsp;<Icon title="info-alt" color="info"/>

If you want to debug the front-end you will have to download <a href="https://www.microsoft.com/store/p/microsoft-edge-devtools-preview/9mzbfrmz0mnj" target="_blank">Microsoft Edge Devtools</a> from the Microsoft store. After installing Edge Devtools, open it from the start menu and look for the Tauri debug target. Click it, and the devtools should open.

This will allow you to attach to a running instance of your Tauri project!
If you need help take a look at the <a href="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide" target="_blank">devtools-guide</a>.

<Alert title="Note">
If you have installed <a href="https://developer.microsoft.com/en-us/microsoft-edge/webview2/" target="_blank">WebView2</a>, you do not need to install Edge Devtools. Instead, just right click inside the Tauri window and select "Inspect" to open devtools. If there is no right click menu, it is likely you are just using Devtools 1 and you should follow the instructions above.
</Alert>

## 7. Optional WebView2 (Chromium)

If you want to use front-end features that aren't supported by the Windows Edge Webview, you can download and use the newer Edge <a href="https://docs.microsoft.com/en-us/microsoft-edge/webview2/" target="_blank">WebView2</a>. Edge WebView2 uses the chromium rendering engine for web content. Certain animations like the one found in the Create-React-App example are better supported in WebView2. Compare Browser features <a href="https://caniuse.com/?compare=ie+10,ie+11,edge+80,firefox+74,chrome+80&compareCats=all" target="_blank">here</a>. Keep in mind that users of your app may still be using the old Edge WebView, so your app shouldn't rely on the new browser features in Webview2.

- <a href="https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section" target="_blank">Download</a>

## Continue

Now that you have set up the Windows-specific dependencies for Tauri, learn how to [add Tauri to your project](/docs/usage/development/integration).
