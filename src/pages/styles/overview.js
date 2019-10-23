import React from "react"
import { Link } from "gatsby"
import Layout from "@components/layout"

export default function StylesOverviewPage() {
  return (
    <Layout title="Styles Overview">
      <section className="ui segment vertical masthead">
        <h1 className="ui header">
          Styles
          <p className="sub header">The attributes of the brand</p>
        </h1>
      </section>

      <p>
        Styles are guidelines for core brand attributes, organized by category.
        These are descriptions of conventions that cut across component and
        suggest the rules that go into building/designing components and their
        treatment. Like the <Link to="/guidelines/overview">Guidelines</Link>,
        each of these pages is effectively a reference article on how to use and
        approach the specitic subject area.
      </p>

      <section className="ui two column stackable cards segment vertical">
        <Link to="/styles/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Design Principles</div>
            <div className="meta">The design system's guiding values</div>
          </div>
        </Link>

        <Link to="/styles/design-tokens" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Design tokens</div>
            <div className="meta">Design token information</div>
          </div>
        </Link>

        <Link to="/styles/color" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Color</div>
            <div className="meta">
              Color styles define how color is used in the design system.
            </div>
          </div>
        </Link>

        <Link to="/styles/typography" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Typography</div>
            <div className="meta">Typography style description</div>
          </div>
        </Link>

        <Link to="/styles/iconography" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Iconography</div>
            <div className="meta">
              How to style or construct icons for the design system
            </div>
          </div>
        </Link>

        <Link to="/styles/imagery" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Imagery</div>
            <div className="meta">
              Styles for treating pictures and graphics
            </div>
          </div>
        </Link>

        <Link to="/styles/motion" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Motion</div>
            <div className="meta">
              How the style guide uses motion to enhance the user experience.
            </div>
          </div>
        </Link>

        <Link to="/styles/voice-and-tone" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Voice and tone</div>
            <div className="meta">
              Capturing the personality and authority of the brand in words
            </div>
          </div>
        </Link>
      </section>
    </Layout>
  )
}
