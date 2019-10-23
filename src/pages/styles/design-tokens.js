import React from "react"
import Layout from "@components/layout"

export default function DesignTokensPage() {
  return (
    <Layout title="Design Tokens">
      <section className="ui segment vertical masthead">
        <h1 className="ui header">
          Design tokens
          <p className="sub header">
            Core design elements used across the entire system.
          </p>
        </h1>
      </section>

      <p>
        Design tokens are the visual design atoms of the design system —
        specifically, they are named entities that store visual design
        attributes. We use them in place of hard-coded values (such as hex
        values for color or pixel values for spacing) in order to maintain a
        scalable and consistent visual system for UI development. - [
        <a href="https://www.lightningdesignsystem.com/design-tokens/">
          Salesforce
        </a>
        ]
      </p>

      <h3 id="colors" class="ui header">
        Colors:
      </h3>
      <table className="DesignTokensTable ui table">
        <thead>
          <tr>
            <th>Tokens</th>
            <th>Example</th>
            <th>Released</th>
            <th>Themeable</th>
            <th>Support</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$red</td>
            <td>
              <span class="ui red label"> </span>
              #DB2828
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$orange</td>
            <td>
              <span class="ui orange label"> </span>
              #F2711C
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$yellow</td>
            <td>
              <span class="ui yellow label"> </span>
              #FBBD08
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$olive</td>
            <td>
              <span class="ui olive label"> </span>
              #B5CC18
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned ">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$green</td>
            <td>
              <span
                class="ui green label"
                style={{ backgroundColor: "rgb(60, 213, 46)", color: "#FFF" }}
              >
                {" "}
              </span>
              rgb(60, 213, 46)
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$teal</td>
            <td>
              <span class="ui teal label"> </span>
              #00B5AD
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$blue</td>
            <td>
              <span class="ui blue label"> </span>
              #2185D0
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$violet</td>
            <td>
              <span class="ui violet label"> </span>
              #6435C9
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$purple</td>
            <td>
              <span class="ui purple label"> </span>
              #A333C8
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$pink</td>
            <td>
              <span class="ui pink label"> </span>
              #E03997
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$brown</td>
            <td>
              <span class="ui brown label"> </span>
              #A5673F
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$grey</td>
            <td>
              <span class="ui grey label"> </span>
              #767676
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
          <tr>
            <td>$black</td>
            <td>
              <span class="ui black label"> </span>
              #1B1C1D
            </td>
            <td>1.0.0</td>
            <td>Yes</td>
            <td class="positive center aligned">
              <i class="check icon"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}
