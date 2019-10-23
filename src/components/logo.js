import React from "react"
import SUILogo from "../images/logo.png"

export default function Logo({ siteTitle }) {
  return (
    <h1 class="ui inverted tiny header">
      <img src={SUILogo} alt="Semantic UI icon logo" />
      UI Docs
    </h1>
  )
}
