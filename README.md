# Kush Supply Co. Design System Documentation

The documentation for the Kush Supply Co. design system and component library. This is a statically generated PWA built using GatsbyJS.

# Development

## Getting Started

1. Install NodeJS
1. `cd /path/to/ksc-ui/docs/`
1. `npm i`
1. `npm run develop`

> These docs also rely on the distribution build of KSC UI. This project usually comes bundled with it, but if you've made any changes to the source code, make sure to run the Gulp build script in the KSC UI project folder to generate a new distribution build (located in `/ksc-ui/dist/`)

## Building the Docs

`npm run build`

This runs the Gatsby build process (`gatsby build` under the hood). Gatsby will create a `/docs/public/` folder if it already doesn't exist, and add everything you need for the docs PWA inside there. Since the `/public` folder contains an `index.html`, you can just upload the folder to any server or CDN to run the docs.

## Creating/Editing Pages

Gatsby builds pages by using the JS files in `/docs/src/pages/`. Each JS file is a React component that represents page content, which is wrapped in a `<Layout>` component (`/docs/src/components/layout.js`) that contains the header and sidebar.

You can create a new page by adding a new JS file in the pages directory. The name of the file will be the slug of the page (e.g. `/docs/src/pages/about.js` == `kushsupply.co/about`). Inside the file, Gatsby requires that you export a React component. This might seem intimidating, but any function can be a React component as long as you return HTML or JSX (basically React's way of writing components like `<Layout>`).

**Page Template**:

```js
import React from "react"

import Layout from "../components/layout"

export default function PageName() {
  return (
    <Layout>
      <div className="content"></div>
    </Layout>
  )
}
```

## Adding code snippets

We use MDX to allow more accessible authoring of documentation, which enables you to use Markdown to create code snippets.

For example, to display a code snippet and live editable example:

````md
## Button example

```html live=true
<button class="ui button">
  Follow
</button>
```
````

### Manually inside React components

We use `react-syntax-highlighter` to add proper styling and formatting to source code examples. This is basically a wrapper around highlightJS, so any themes that are applicable there work here. We currently use "obsidian", which compliments the KSC brand's dark backgrounds and green color. Depending on it's placement we either display the `<SyntaxHighlighter>` component directly, or wrap it in an inverted segment (`<div class="ui inverted segment">`).

In order to allow developers to quickly copy source code, when the user clicks the source code, we use `copy-to-clipboard` to add the code to the user's clipboard.

```js
import SyntaxHighlighter from "react-syntax-highlighter"
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs"
import copy from "copy-to-clipboard"

const codeExample = `<div>Legalize it</div>`

<div className="ui inverted segment">
  <h3>Code snippet:</h3>
  <SyntaxHighlighter
    language="html"
    style={obsidian}
    onClick={() => {
      copy(codeExample)
    }}
  >
    {codeExample}
  </SyntaxHighlighter>
</div>
```
