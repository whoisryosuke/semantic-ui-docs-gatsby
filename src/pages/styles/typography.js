import React from "react"
import Layout from "@components/layout"
import CodeBlock from "@components/codeblock"

export default function GuidelinesPage() {
  const headerExample1 = `
<div>
  <h1 className="ui header">
    H1
    <div className="sub header">Sub Header</div>
  </h1>
  <h2 className="ui header">
    H2
    <div className="sub header">Sub Header</div>
  </h2>
  <h3 className="ui header">
    H3
    <div className="sub header">Sub Header</div>
  </h3>
  <h4 className="ui header">
    H4
    <div className="sub header">Sub Header</div>
  </h4>
  <h5 className="ui header">
    H5
    <div className="sub header">Sub Header</div>
  </h5>
</div>
`

  return (
    <Layout title="Typography">
      <section className="ui segment vertical masthead">
        <h1 className="ui header">
          Typography
          <p className="sub header">
            Typography should present your design and content as clearly and
            efficiently as possible. <i className="icon age-alert-active"></i>
          </p>
        </h1>
      </section>

      <p>
        The Semantic UI system contains a range of styles that support the needs
        of the designer and content. And with a "semantic" way of writing
        classes and props, you can simply say "big" and see bigger elements, or
        "small" for smaller elements.
      </p>

      <p>
        Font sizes are measured in 'em'. The base font size is{" "}
        <strong>14px</strong>, so 1em = 14px. If a size is listed as a fraction,
        it's calculated on build.
      </p>

      <section className="ui segment vertical">
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Scale Category</th>
              <th>Typeface</th>
              <th>Weight</th>
              <th>Size</th>
              <th>Case</th>
              <th>Semantic Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h1 className="ui header">H1</h1>
              </td>
              <td>Roboto</td>
              <td>900</td>
              <td>28/14em</td>
              <td>Normal</td>
              <td>Huge</td>
            </tr>
            <tr>
              <td>
                <h2 className="ui header">H2</h2>
              </td>
              <td>Roboto</td>
              <td>900</td>
              <td>24/14em</td>
              <td>Normal</td>
              <td>Large</td>
            </tr>
            <tr>
              <td>
                <h3 className="ui header">H3</h3>
              </td>
              <td>Roboto</td>
              <td>900</td>
              <td>18/14em</td>
              <td>Normal</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>
                <h4 className="ui header">H4</h4>
              </td>
              <td>Roboto</td>
              <td>700</td>
              <td>15/14em</td>
              <td>Normal</td>
              <td>Small</td>
            </tr>
            <tr>
              <td>
                <h5 className="ui header">H5</h5>
              </td>
              <td>Roboto</td>
              <td>700</td>
              <td>14/14em</td>
              <td>Normal</td>
              <td>Tiny</td>
            </tr>
            <tr>
              <td>
                <p>p</p>
              </td>
              <td>Roboto</td>
              <td>300</td>
              <td>14px</td>
              <td>Normal</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>
                <p>
                  <small>small</small>
                </p>
              </td>
              <td>Roboto</td>
              <td>300</td>
              <td>11.2px</td>
              <td>Normal</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="ui segment vertical">
        <h2 id="sub-headers">Sub headers</h2>

        <CodeBlock live={true}>{headerExample1}</CodeBlock>

        <h2 id="states">States</h2>
        <div className="ui disabled header">Disabled Header</div>
      </section>
      <section className="ui segment vertical">
        <a
          href="https://semantic-ui.com/elements/header.html"
          target="_blank"
          className="ui big button"
        >
          See more variations and examples
        </a>
      </section>
    </Layout>
  )
}
