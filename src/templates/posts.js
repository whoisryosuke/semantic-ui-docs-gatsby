import React, { Component } from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as Semantic from "semantic-ui-react"

import CodeBlock from "@components/codeblock"
import Layout from "@components/layout"
import Masthead from "@components/masthead"

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
  Masthead,
  ...Semantic,
}

export default class MDXRuntimeTest extends Component {
  render() {
    const { children, data } = this.props
    return (
      <MDXProvider components={components}>
        <Layout title={data.mdx.frontmatter.title}>
          <div className="ui vertical segment">
            {children}
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </Layout>
      </MDXProvider>
    )
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
