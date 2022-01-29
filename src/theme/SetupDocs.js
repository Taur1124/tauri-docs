import React from 'react'

export const Intro = () => (
  <>
    <p>This setup is only needed for development. Consumers of Tauri apps will not have to do any of this.</p>

    <p>This page provides a <strong>complete guide</strong> to install Tauri along with its dependencies. Because Tauri is a polyglot toolchain and involves complex installation instructions, we want to make sure <i>anybody</i> will manage to set it up by reading this guide without having to open another documentation.</p>

    <p>Additionally, it contains nice tips and tools that will help you if you're beginning with Node.js or Rust and security.</p>

    <i class="bi bi-exclamation-diamond-fill" style={{color: 'var(--ifm-color-danger'}}/> This step is required
    <br/>

    <i class="bi bi-skip-end-fill" style={{color: 'var(--ifm-color-warning'}}/> This step is skippable if already satisfied (e.g. you already have Node.js/Rust installed)
    <br/>

    <i class="bi bi-info-circle-fill" style={{color: 'var(--ifm-color-info'}}/> This step is purely informational
    <br/>
  </>
)
