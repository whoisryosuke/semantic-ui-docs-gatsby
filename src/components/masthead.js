import React from "react"

export default function masthead({ title, subheader }) {
  return (
    <section className="ui segment vertical masthead">
      <h1 className="ui header">
        {title}
        <p className="sub header">{subheader}</p>
      </h1>
    </section>
  )
}
