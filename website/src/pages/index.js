import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'

const features = [
  [
    {
      title: <>Brownfield</>,
      imageUrl: 'img/undraw_brownfield.svg',
      description: (
        <>
          compatibility with any front-end framework means you don't have to
          change your stack
        </>
      ),
    },
    {
      title: <>FLOSS</>,
      imageUrl: 'img/undraw_open_source.svg',
      description: <>relicensing is possible with Tauri</>,
    },
    {
      title: <>Bundle</>,
      imageUrl: 'img/undraw_takeout_boxes.svg',
      description: <>size of a Tauri App can be less than 600KB</>,
    },
  ],
  [
    {
      title: <>Security</>,
      imageUrl: 'img/undraw_security.svg',
      description: (
        <>is the Tauri-Team's biggest priority and drives our innovation</>
      ),
      link: 'docs/about/security',
    },
    {
      title: <>Patterns</>,
      imageUrl: 'img/undraw_patterns.svg',
      description: (
        <>
          are here to help you choose important features with simple
          configuration
        </>
      ),
      link: 'docs/usage/patterns/about-patterns',
    },
    {
      title: <>Cross-platform</>,
      imageUrl: 'img/undraw_cross_platform.svg',
      description: (
        <>
          compilation allows to bundle binaries for major desktop platforms
          (mobile & WASM coming soon)
        </>
      ),
      link: 'docs/usage/ci-cd/cross-platform',
    },
  ],
]

function Feature({ imageUrl, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className="col col--4 feature">
      <div className="card">
        <div className="card__body">
          {imgUrl && (
            <div className="text--center">
              <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
          )}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {link && (
          <div className="card__footer">
            <Link to={useBaseUrl(link)}>
              <button className="button button--secondary button--block">
                See more
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

const Translate = (props) => <span>{props.children}</span>

const Roadmap = () => {
  const COLORS = {
    green: '#48f9c7',
    blue: '#0198f1',
    red: '#ff8e13',
  }
  const items = [
    {
      title: <Translate>CLI</Translate>,
      description: (
        <Translate>
          Generate, develop and build Tauri apps from the command line.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },

    {
      title: <Translate>API</Translate>,
      description: (
        <Translate>
          Finalize, audit, write documentation and create examples for the
          smoke-tests.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      title: <Translate>Testing & CI</Translate>,
      description: (
        <Translate>
          Implement CI with testing and bundle-pipeline validation.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      title: <Translate>Desktop Bundler</Translate>,
      description: (
        <Translate>
          Bundle for all major desktops from native systems.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      title: <Translate>Alpha Release</Translate>,
      description: (
        <Translate>
          Technical Release Candidate for desktop, edge cases and bugs
          acceptable.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q4 2019',
    },
    {
      title: <Translate>Sideloader</Translate>,
      description: (
        <Translate>Integrate and instrument other binaries.</Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      title: <Translate>Splashscreen</Translate>,
      description: (
        <Translate>
          Use a splashscreen while the main content is loading.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q1 2020',
    },
    {
      title: <Translate>App Storage</Translate>,
      description: (
        <Translate>Use a canonical location to store userdata.</Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
    },
    {
      title: <Translate>Native Notifications</Translate>,
      description: (
        <Translate>
          Cross-platform notifications using polyfilled WEB API.
        </Translate>
      ),
      icon: '',
      color: COLORS.green,
      targetQuarter: 'Q2 2020',
    },
    {
      title: <Translate>Multi Window</Translate>,
      description: (
        <Translate>Run multiple window instances in Tauri.</Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q3 2020',
    },
    {
      title: <Translate>Self Updater</Translate>,
      description: <Translate>Update Tauri Apps from within Tauri.</Translate>,
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q3 2020',
    },
    {
      title: <Translate>WASM Bundler</Translate>,
      description: (
        <Translate>Manufacture WASM bundler for use in websites.</Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q3 2020',
    },
    {
      title: <Translate>PureOS App Store</Translate>,
      description: <Translate>Verified builds for PureOS.</Translate>,
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q3 2020',
    },
    {
      title: <Translate>App Tray</Translate>,
      description: <Translate>Desktop Cross-platform Icon Tray.</Translate>,
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q3 2020',
    },
    {
      title: <Translate>Webview Bindings</Translate>,
      description: <Translate>Use official Webview bindings.</Translate>,
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q3 2020',
    },
    {
      title: <Translate>Beta Release</Translate>,
      description: (
        <Translate>Generally stable on Desktop, API locked down.</Translate>
      ),
      icon: '',
      color: COLORS.red,
      targetQuarter: 'Q4 2020',
    },
    {
      title: <Translate>Mobile Bundler</Translate>,
      description: (
        <Translate>
          Bundle to all major mobile device operating systems.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q3 2020',
    },
    {
      title: <Translate>DENO</Translate>,
      description: <Translate>Enable alternative DENO CLI.</Translate>,
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q4 2020',
    },
    {
      title: <Translate>Cross Compiler</Translate>,
      description: (
        <Translate>
          Generate bundled binaries from select operating system environments.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q4 2020',
    },
    {
      title: <Translate>Alternative Renderer</Translate>,
      description: (
        <Translate>
          Candidate presentation for Webview Alternatives, including GL
          windowing.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q4 2020',
    },
    {
      title: <Translate>Tauri-Frida</Translate>,
      description: (
        <Translate>
          A decompiler and threat analyzer for Tauri Apps, using Frida.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q4 2020',
    },
    {
      title: <Translate>Stable Release</Translate>,
      description: <Translate>Stable on On all Platforms.</Translate>,
      icon: '',
      color: COLORS.red,
      targetQuarter: 'Q1 2020',
    },
    {
      title: <Translate>Other Bindings</Translate>,
      description: (
        <Translate>
          Go, Nim, Python, C++ and other bindings are possible with the stable
          API.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: 'Q1 2021',
    },
    {
      title: <Translate>The Future</Translate>,
      description: (
        <Translate>
          Something missing? Got a great idea? We want you to help us make it
          happen.
        </Translate>
      ),
      icon: '',
      color: COLORS.blue,
      targetQuarter: '& BEYOND',
    },
  ].map((item) => {
    return (
      <li key={item.title.props.children}>
        <Fade bottom>
          <div className="icon" style={{ backgroundColor: item.color }}></div>
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
          <div>{item.targetQuarter}</div>
        </Fade>
      </li>
    )
  })

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', position: 'relative' }}>Roadmap</h2>
      <p style={{ textAlign: 'center', position: 'relative' }}>
        Notice: This roadmap is subject to change.
      </p>
      <ul className="roadmap">{items}</ul>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="Tauri is a toolchain for building highly secure native apps that have tiny binaries and are very fast. Whether coming from the front-end with Gatsby, Svelte, Vue, Angular or React - Tauri solves the hard problems of safe User Interfaces for all the desktop platforms."
    >
      <header className={classnames('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img src="img/tauri_with_wordmark.svg" style={{ maxWidth: 745 }} />
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <p className="hero__subtitle">
            Bundle your HTML, CSS and JavaScript
            <br />
            to make smaller, faster and more secure native applications
          </p>
          <div className={styles.buttons}>
            <div className="container">
              <div className="row">
                <div className="col col--4 col--offset-2">
                  <Link
                    className={classnames(
                      'button button--outline button--secondary button--lg',
                      styles.about
                    )}
                    to={useBaseUrl('docs/about/intro')}
                  >
                    <span>Learn more</span>
                  </Link>
                </div>
                <div className="col col--4">
                  <Link
                    className={classnames(
                      'button button--outline button--secondary button--lg',
                      styles.getStarted
                    )}
                    to={useBaseUrl('docs/getting-started/intro')}
                  >
                    <span>Get started</span>
                  </Link>
                </div>
                <div className="col col--2"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {features && features.length && (
          <section className={classnames('features', styles.features)}>
            <div className="container">
              {features.map((row, index) => {
                return (
                  <div className="row" key={index}>
                    {row.map((props, idx) => (
                      <Feature key={idx} {...props} />
                    ))}
                  </div>
                )
              })}
            </div>
          </section>
        )}
        <section className="roadmap-container">
          <Roadmap />
        </section>
      </main>
    </Layout>
  )
}

export default Home
