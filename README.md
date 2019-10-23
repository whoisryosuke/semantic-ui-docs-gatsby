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

There are two ways to create pages with this Gatsby setup, with ReactJS files or MDX.

### ReactJS Pages

Gatsby builds pages by using the JS files in `/src/pages/`. Each JS file is a React component that represents page content, which should be wrapped in a `<Layout>` component (`/src/components/layout.js`) that contains the header and sidebar.

You can create a new page by adding a new JS file in the pages directory. The name of the file will be the slug of the page (e.g. `/src/pages/about.js` == `yourwebsite.com/about`). Inside the file, Gatsby requires that you export a React component. This might seem intimidating, but any function can be a React component as long as you return HTML or JSX (basically React's way of writing components like `<Layout>`).

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

### MDX

The easiest way to create content is using MDX. Gatsby for MDX files inside the `/content/` subdirectories. If you're looking to write component documentation, it should go in `/content/definitions/`. Otherwise any other type of page should go in the `/content/pages/` folder.

Gatsby uses Markdown "frontmatter" to create pages and is required for pages to work. Inside the frontmatter, you'll need a title (page title), path (the actual page slug), date (last date modified), and created (also a date) fields.

Since you're also using MDX, you have the ability to use any React components passed into the rendering scope (see: `/src/templates/posts.js`). This means you can use any Semantic UI React components, as well as special layout components created for the docs (e.g. `<Masthead title="Getting Started" subheader="Getting up and running with Semantic UI" />`).

**Page Template**:

````mdx
---
title: Getting Started
path: /introduction/getting-started
date: 2019-10-23
created: 2019-10-23
---

<Masthead
  title="Getting Started"
  subheader="Getting up and running with Semantic UI"
/>

## Preface

Semantic UI packaged Gulp build tools so your project can preserve its [own theme changes](https://semantic-ui.com/usage/theming.html).

```jsx live
<Button>Get Started</Button>
```
````

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
````
