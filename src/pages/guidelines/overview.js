import React from "react"
import { Link } from "gatsby"
import Layout from "@components/layout"

export default function GuidelinesPage() {
  return (
    <Layout title="Guidelines Overview">
      <section className="ui segment vertical masthead">
        <h1 className="ui header">
          Guidelines
          <p className="sub header">
            This is the guidelines overview description. It will elaborate on
            the guidelines and principles that need to be followed to build
            applications.
          </p>
        </h1>
      </section>

      <p>
        Guidelines is where you’ll find UX guidance for specific aspects of
        app/site design (navigation models, data entry, form validation,
        accessibility, and so on). These will give high-level tours of the
        relevant components and styles, with links to the specific pages in the
        components and styles sections for more detailed guidelines on each
        element. Each guideline is effectively an article on good usage.
      </p>

      <section className="ui two column stackable cards segment vertical">
        <Link to="/guidelines/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Design Principles</div>
            <div className="meta">The design system's guiding values</div>
          </div>
        </Link>

        <Link to="/guidelines/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Code conventions</div>
            <div className="meta">
              Guidelines for the design system's code base.
            </div>
          </div>
        </Link>

        <Link to="/guidelines/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Accessibility</div>
            <div className="meta">
              Describe the design system's approach to accessibility
            </div>
          </div>
        </Link>

        <Link to="/guidelines/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Data display</div>
            <div className="meta">Presenting quick, actionable data</div>
          </div>
        </Link>

        <Link to="/guidelines/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Data entry</div>
            <div className="meta">High-level form guidelines</div>
          </div>
        </Link>

        <Link to="/guidelines/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Data validation</div>
            <div className="meta">Guidelines around validating data</div>
          </div>
        </Link>

        <Link to="/guidelines/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Input modes</div>
            <div className="meta">
              Guidelines around multiple types of input
            </div>
          </div>
        </Link>

        <Link to="/guidelines/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Navigation</div>
            <div className="meta">Guidelines for getting around a UI</div>
          </div>
        </Link>

        <Link to="/guidelines/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Notifications</div>
            <div className="meta">
              Guidelines around how and when to respectfully interrupt users
            </div>
          </div>
        </Link>

        <Link to="/guidelines/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Writing</div>
            <div className="meta">Guidelines for writing best practices</div>
          </div>
        </Link>

        <Link to="/guidelines/design-principles" className="column ui card">
          <div className="content">
            <i className="right floated big ui angle right icon"></i>
            <div className="header">Browser support</div>
            <div className="meta">
              Guidelines that explain which browsers the design system is
              optimized for
            </div>
          </div>
        </Link>
      </section>
    </Layout>
  )
}
