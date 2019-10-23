import React from "react"
import { Link } from "gatsby"
import { Dropdown, Menu, Sidebar } from "semantic-ui-react"

import capitalize from "@tools/capitalize"

import Logo from "./logo"

const DocSidebar = ({
  animation = "push",
  visible,
  onHide,
  siteTitle,
  sidebarPages,
}) => (
  <Sidebar
    as={Menu}
    onHide={onHide}
    visible={visible}
    inverted
    vertical
    animation={animation}
  >
    <div class="item">
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        <Logo siteTitle={siteTitle} />
      </Link>
    </div>
    {sidebarPages
      ? sidebarPages.map(sidebarPage => {
          const hasDropdown =
            "pages" in sidebarPage && Array.isArray(sidebarPage.pages) > 0
              ? true
              : false
          let dropdownItems = []
          if (hasDropdown) {
            dropdownItems = sidebarPage.pages.map(dropdownItem => (
              <Menu.Item
                as={Link}
                to={dropdownItem.slug}
                key={dropdownItem.slug}
                className="item"
              >
                {dropdownItem.title}
              </Menu.Item>
            ))
            return (
              <Menu.Item key={sidebarPage.slug} header>
                {sidebarPage.title}
                <Menu.Menu>{dropdownItems}</Menu.Menu>
              </Menu.Item>
            )
          }
          return (
            <Menu.Item
              to={sidebarPage.slug}
              key={sidebarPage.slug}
              as={Link}
              name={capitalize(sidebarPage.title)}
              header
            />
          )
        })
      : ""}
  </Sidebar>
)

export default DocSidebar
