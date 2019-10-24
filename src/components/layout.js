import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Sidebar } from "semantic-ui-react"
import debounce from "@tools/debounce"

import DocSidebar from "./sidebar"
import "./layout.scss"

class Layout extends React.Component {
  state = { visible: true, mobile: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })
  toggleSidebar = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    window.addEventListener("resize", debounce(this.resize.bind(this), 250))
    this.resize()
  }

  resize() {
    let currentHideNav = window.innerWidth <= 1025
    // Are we mobile?
    this.setState({ mobile: currentHideNav })
    // Hide or show sidebar on resize
    if (!currentHideNav !== this.state.visible) {
      this.setState({ visible: !currentHideNav })
    }
  }

  render() {
    const { children, className, title, description } = this.props
    const { mobile, visible } = this.state
    const animation = mobile ? "overlay" : "push"
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                sidebar {
                  pages {
                    slug
                    title
                    pages {
                      slug
                      title
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={
                title
                  ? `${title} - ${data.site.siteMetadata.title}`
                  : data.site.siteMetadata.title
              }
              meta={[
                {
                  name: "description",
                  content: description
                    ? description
                    : "Documentation for Semantic UI Component Library",
                },
                {
                  name: "keywords",
                  content: "design system, style guide, documentation",
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Sidebar.Pushable as="section">
              <DocSidebar
                animation={animation}
                visible={visible}
                sidebarPages={data.site.siteMetadata.sidebar.pages}
                siteTitle={title ? title : data.site.siteMetadata.title}
              />
              <Sidebar.Pusher as="main" className={className}>
                {mobile && (
                  <>
                    <label class="SidebarToggle">
                      <input
                        type="checkbox"
                        onClick={() => this.toggleSidebar()}
                      />
                      <div>
                        <div>
                          <span></span>
                          <span></span>
                        </div>
                        <svg>
                          <use xlinkHref="#path" />
                        </svg>
                        <svg>
                          <use xlinkHref="#path" />
                        </svg>
                      </div>
                    </label>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: "none" }}
                    >
                      <symbol
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        id="path"
                      >
                        <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path>
                      </symbol>
                    </svg>
                  </>
                )}
                <div className="ui text container">{children}</div>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </>
        )}
      />
    )
  }
}

export default Layout
