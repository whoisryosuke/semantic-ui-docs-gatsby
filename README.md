# Semantic UI Documentation

The documentation for the Semantic UI design system and component library. This is a statically generated PWA built using GatsbyJS.

# Development

## Getting Started

1. Install NodeJS
1. `cd /path/to/semantic-ui-docs-gatsby/`
1. `npm i`
1. `npm run develop`

## Changing the SUI Theme

This project uses `semantic-ui-css` to quickly boostrap a default SUI theme. You can change this in `gatsby-browser.js` and import your own themed CSS.

> SASS and LESS is supported out of the box if you want to import source files vs production CSS.

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

You can use the same component that's used when rendering MDX, the `<CodeBlock>`. It accepts code as 'children' and the classname determines the language used for highlighting.

```js
import CodeBlock from "../components/CodeBlock/CodeBlock"

const codeExample = `<div>Legalize it</div>`

<div className="ui inverted segment">
  <h3>Code snippet:</h3>
  <CodeBlock className="language-js">{codeExample}</CodeBlock>
</div>
```
