import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs"

import Layout from "../components/layout"

export default function GettingStarted() {
  return (
    <Layout title="Getting Started">
      <section className="ui segment vertical masthead">
        <h1 className="ui header">
          Getting Started
          <p className="sub header">
            The getting started page should provide information for how to get
            up and running with the design system.
          </p>
        </h1>
      </section>
      <h2 id="download">Download</h2>
      <p>
        Here you can download the design system for production and development.
      </p>

      <p>
        <a href="/dist/semantic.min.css" className="big ui icon button fluid">
          <i className="download icon"></i> Download Production CSS
        </a>
      </p>
      <p>
        <a href="/dist/semantic.min.js" className="big ui icon button fluid">
          <i className="download icon"></i> Download Production JS
        </a>
      </p>
      <p>
        <a
          href="/sketch/Kush Supply Co Design System.9.6.2019.sketch"
          className="big ui icon button fluid"
        >
          <i className="download icon"></i> Download Sketch Symbol library
        </a>
      </p>

      <h2 id="file-structure">File Structure</h2>
      <p>
        This project is a clone of the Semantic UI repository. The main project
        folder contains a <code>dist</code> directory, where the production CSS
        is built by Gulp. The <code>src</code> folder contains the LESS and JS
        source code of the UI framework. A <code>themes</code> folder inside
        contains a <code>kush-supply-co</code> theme - this is where you edit
        any design tokens (colors, fonts) in the form of LESS variables.
      </p>

      <p>
        The <code>docs</code> folder contains a separate app with it's own{" "}
        <code>package.json</code>. The documentation itself is built using
        GatsbyJS, a static PWA generator.
      </p>

      <blockquote class="ui message">
        <p>
          This makes the KSC UI project a "monorepo", or single repository with
          sub-projects. This is important to remember when you navigate between
          working on the UI framework source code and the actual documentation.
          Make sure to <code>cd</code> and run scripts from the correct folder.
        </p>
      </blockquote>

      <SyntaxHighlighter language="text" style={obsidian}>
        {`ksc-ui/
├── dist/
│   ├── [Distribution builds of CSS and JS]
│   ├── semantic.js
│   ├── semantic.min.js
│   ├── semantic.css
│   └── semantic.min.css
├── docs/
│   └── [Documentation - you are here!]
│      └── public/
│          └── [Docs build here]
├── src/
│   ├── definitions
│   │  ├── [LESS source files of components]
│   │  └── collections/
│   │      └── grid.less
│   ├── icons
│   │  ├── [SVG and PNG version of icons]
│   │  └── collections/
│   ├── themes
│   │  └── kush-supply-co/
│   │      ├── assets
│   │      │  └── fonts
│   │      │  │   └── [Web font of icons]
│   │      └── [LESS overrides here] 
│   └── semantic.less (Import if LESS is supported)
└── [additional files]`}
      </SyntaxHighlighter>

      <h2 id="creating-pages-and-using-components">
        Creating pages and using components
      </h2>
      <p>
        KSC UI can be used in a bundled form, or as separate distributed CSS
        files for each component. It's recommended to use the bundled version (
        <code>/dist/semantic.min.css</code>) unless building a small app, or
        looking to highly optimize an app's final bundle.
      </p>

      <h3 class="ui header">Bundled version</h3>

      <p>
        To use the bundled version of KSC UI, add{" "}
        <code>{`<link type="text/css" rel="stylesheet" href="https://url/to/semantic.min.css">`}</code>{" "}
        to the document's <code>{`<head>`}</code>. Then just use any KSC UI
        class on HTML elements.
      </p>

      <SyntaxHighlighter language="html" style={obsidian}>
        {`<html>
    <head>
      <link type="text/css" rel="stylesheet" href="https://url/to/semantic.min.css">
    </head>
    <body>
      <h1 class="ui header">Hello World</h1>
    </body>
  </html>`}
      </SyntaxHighlighter>

      <h3 id="ui header">React Components</h3>

      <p>
        If you are using ReactJS, it's recommended to use{" "}
        <a href="https://react.semantic-ui.com/">Semantic UI React</a>. SUI
        React offers React components for SUI components that use jQuery (like
        the Dropdown).
      </p>
      <p>
        Just install <code>semantic-ui-react</code> into your project and import
        the KSC UI production CSS.
      </p>
      <blockquote>
        If you're looking to make a more optimized app build, you can import
        specific component CSS (<code>/dist/components/button.min.css</code>).
        Just make sure to also include global CSS (<code>site.min.css</code> and{" "}
        <code>reset.min.css</code>)
      </blockquote>

      <h2 id="code-conventions">Code conventions</h2>
      <p>
        Semantic UI was based around the concept of OOCSS, or Object Orientated
        CSS. This allows a more "semantic" way of writing CSS by applying
        additional classes to alter elements (e.g.{" "}
        <code>{`<button class="ui huge button">`}</code> this creates a{" "}
        <em>huge</em> button).
      </p>

      <p>
        When creating new or extending existing classes, it's recommended to
        follow the Semantic UI principles, combined with{" "}
        <a href="https://github.com/airbnb/css" target="_blank">
          the Airbnb guidelines
        </a>
        for CSS. Airbnb follows the principle of OOCSS combined with BEM, or
        Block Element Modifier. The combination of both ensures that new
        components won't conflict with any other in the CSS global namespace.
      </p>

      <h2 id="support-and-community">Support and Community</h2>
      <p>
        If you need support with the system, please file a ticket. If you'd like
        to contribute to this project, clone the git repo.
      </p>
    </Layout>
  )
}
