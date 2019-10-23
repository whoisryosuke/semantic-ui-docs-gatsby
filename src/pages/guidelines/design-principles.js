import React from "react"
import Layout from "@components/layout"

export default function DesignPrinciplesGuidelines() {
  return (
    <Layout title="Design Principles">
      <section className="ui segment vertical masthead">
        <h1 className="ui header">
          Design Principles
          <p className="sub header">The guiding values of the design system</p>
        </h1>
      </section>

      <h2>Unified</h2>
      <p>
        Each piece is part of a greater whole and should contribute positively
        to the system at scale. There should be no isolated features or
        outliers.
      </p>

      <h2>Universal</h2>
      <p>
        Airbnb is used around the world by a wide global community. Our products
        and visual language should be welcoming and accessible.
      </p>

      <h2>Iconic</h2>
      <p>
        We’re focused when it comes to both design and functionality. Our work
        should speak boldly and clearly to this focus.
      </p>

      <h2>Conversational</h2>
      <p>
        Our use of motion breathes life into our products, and allows us to
        communicate with users in easily understood ways.
      </p>
    </Layout>
  )
}
