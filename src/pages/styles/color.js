import React from "react"
import Layout from "@components/layout"

import "./color.css"

export default function DesignTokensPage() {
  return (
    <Layout title="Design Tokens" className="DesignTokensPage">
      <section className="ui segment vertical masthead">
        <h1 className="ui header">
          Colors
          <p className="sub header">
            The spectrum of hue and saturation in which this system operates.
          </p>
        </h1>
      </section>

      <p>
        Color is key to defining the character of any product, and is tantamount
        to facilating the proper mood.
      </p>

      <h3 id="colors" className="ui header">
        Colors:
      </h3>
      <section className="ui two cards">
        <article className="ui card">
          <div class="image ui inverted red segment"></div>
          <div className="content">
            <h4 className="header">red </h4>
            <div className="description">#DB2828</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted orange segment"></figure>
          <div className="content">
            <h4 className="header">orange</h4>
            <div className="description">#F2711C</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted yellow segment"></figure>
          <div className="content">
            <h4 className="header">yellow</h4>
            <div className="description">#FBBD08</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted olive segment"></figure>
          <div className="content">
            <h4 className="header">olive </h4>
            <div className="description">#B5CC18</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted green segment"></figure>
          <div className="content">
            <h4 className="header">green </h4>
            <div className="description">rgb(60, 213, 46)</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted teal segment"></figure>
          <div className="content">
            <h4 className="header">teal </h4>
            <div className="description">#00B5AD</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted blue segment"></figure>
          <div className="content">
            <h4 className="header">blue </h4>
            <div className="description">#2185D0</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted violet segment"></figure>
          <div className="content">
            <h4 className="header">violet</h4>
            <div className="description">#6435C9</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted purple segment"></figure>
          <div className="content">
            <h4 className="header">purple</h4>
            <div className="description">#A333C8</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted pink segment"></figure>
          <div className="content">
            <h4 className="header">pink </h4>
            <div className="description">#E03997</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted brown segment"></figure>
          <div className="content">
            <h4 className="header">brown </h4>
            <div className="description">#A5673F</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted grey segment"></figure>
          <div className="content">
            <h4 className="header">grey </h4>
            <div className="description">#767676</div>
          </div>
        </article>

        <article className="ui card">
          <figure className="image ui inverted black segment"></figure>
          <div className="content">
            <h4 className="header">black </h4>
            <div className="description">#1B1C1D</div>
          </div>
        </article>
      </section>
    </Layout>
  )
}
