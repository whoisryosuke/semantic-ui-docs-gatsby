import React from "react"
import Layout from "@components/layout"
import CodeBlock from "@components/codeblock"

import "./iconography.css"

const accessibilityIcons = `
<div class="ui doubling five column grid">
  <div class="column">
    <i class="american sign language interpreting icon"></i>american
    sign language interpreting
  </div>
  <div class="column">
    <i class="assistive listening systems icon"></i>assistive listening
    systems
  </div>
  <div class="column">
    <i class="audio description icon"></i>audio description
  </div>
  <div class="column">
    <i class="blind icon"></i>blind
  </div>
  <div class="column">
    <i class="braille icon"></i>braille
  </div>
  <div class="column">
    <i class="closed captioning icon"></i>closed captioning
  </div>
  <div class="column">
    <i class="closed captioning outline icon"></i>closed captioning
    outline
  </div>
  <div class="column">
    <i class="deaf icon"></i>deaf
  </div>
  <div class="column">
    <i class="low vision icon"></i>low vision
  </div>
  <div class="column">
    <i class="phone volume icon"></i>phone volume
  </div>
  <div class="column">
    <i class="question circle icon"></i>question circle
  </div>
  <div class="column">
    <i class="question circle outline icon"></i>question circle outline
  </div>
  <div class="column">
    <i class="sign language icon"></i>sign language
  </div>
  <div class="column">
    <i class="tty icon"></i>tty
  </div>
  <div class="column">
    <i class="universal access icon"></i>universal access
  </div>
  <div class="column">
    <i class="wheelchair icon"></i>wheelchair
  </div>
</div>
`

const arrowIcons = `
<div class="ui doubling five column grid">
  <div class="column"><i class="angle double down icon"></i>angle double down</div>
  <div class="column"><i class="angle double left icon"></i>angle double left</div>
  <div class="column"><i class="angle double right icon"></i>angle double right</div>
  <div class="column"><i class="angle double up icon"></i>angle double up</div>
  <div class="column"><i class="angle down icon"></i>angle down</div>
  <div class="column"><i class="angle left icon"></i>angle left</div>
  <div class="column"><i class="angle right icon"></i>angle right</div>
  <div class="column"><i class="angle up icon"></i>angle up</div>
  <div class="column"><i class="arrow alternate circle down icon"></i>arrow alternate circle down</div>
  <div class="column"><i class="arrow alternate circle down outline icon"></i>arrow alternate circle down outline</div>
  <div class="column"><i class="arrow alternate circle left icon"></i>arrow alternate circle left</div>
  <div class="column"><i class="arrow alternate circle left outline icon"></i>arrow alternate circle left outline</div>
  <div class="column"><i class="arrow alternate circle right icon"></i>arrow alternate circle right</div>
  <div class="column"><i class="arrow alternate circle right outline icon"></i>arrow alternate circle right outline</div>
  <div class="column"><i class="arrow alternate circle up icon"></i>arrow alternate circle up</div>
  <div class="column"><i class="arrow alternate circle up outline icon"></i>arrow alternate circle up outline</div>
  <div class="column"><i class="arrow circle down icon"></i>arrow circle down</div>
  <div class="column"><i class="arrow circle left icon"></i>arrow circle left</div>
  <div class="column"><i class="arrow circle right icon"></i>arrow circle right</div>
  <div class="column"><i class="arrow circle up icon"></i>arrow circle up</div>
  <div class="column"><i class="arrow down icon"></i>arrow down</div>
  <div class="column"><i class="arrow left icon"></i>arrow left</div>
  <div class="column"><i class="arrow right icon"></i>arrow right</div>
  <div class="column"><i class="arrow up icon"></i>arrow up</div>
  <div class="column"><i class="arrows alternate icon"></i>arrows alternate</div>
  <div class="column"><i class="arrows alternate horizontal icon"></i>arrows alternate horizontal</div>
  <div class="column"><i class="arrows alternate vertical icon"></i>arrows alternate vertical</div>
  <div class="column"><i class="caret down icon"></i>caret down</div>
  <div class="column"><i class="caret left icon"></i>caret left</div>
  <div class="column"><i class="caret right icon"></i>caret right</div>
  <div class="column"><i class="caret square down icon"></i>caret square down</div>
  <div class="column"><i class="caret square down outline icon"></i>caret square down outline</div>
  <div class="column"><i class="caret square left icon"></i>caret square left</div>
  <div class="column"><i class="caret square left outline icon"></i>caret square left outline</div>
  <div class="column"><i class="caret square right icon"></i>caret square right</div>
  <div class="column"><i class="caret square right outline icon"></i>caret square right outline</div>
  <div class="column"><i class="caret square up icon"></i>caret square up</div>
  <div class="column"><i class="caret square up outline icon"></i>caret square up outline</div>
  <div class="column"><i class="caret up icon"></i>caret up</div>
  <div class="column"><i class="cart arrow down icon"></i>cart arrow down</div>
  <div class="column"><i class="chart line icon"></i>chart line</div>
  <div class="column"><i class="chevron circle down icon"></i>chevron circle down</div>
  <div class="column"><i class="chevron circle left icon"></i>chevron circle left</div>
  <div class="column"><i class="chevron circle right icon"></i>chevron circle right</div>
  <div class="column"><i class="chevron circle up icon"></i>chevron circle up</div>
  <div class="column"><i class="chevron down icon"></i>chevron down</div>
  <div class="column"><i class="chevron left icon"></i>chevron left</div>
  <div class="column"><i class="chevron right icon"></i>chevron right</div>
  <div class="column"><i class="chevron up icon"></i>chevron up</div>
  <div class="column"><i class="cloud download icon"></i>cloud download</div>
  <div class="column"><i class="cloud upload icon"></i>cloud upload</div>
  <div class="column"><i class="download icon"></i>download</div>
  <div class="column"><i class="exchange icon"></i>exchange</div>
  <div class="column"><i class="expand arrows alternate icon"></i>expand arrows alternate</div>
  <div class="column"><i class="external alternate icon"></i>external alternate</div>
  <div class="column"><i class="external square alternate icon"></i>external square alternate</div>
  <div class="column"><i class="hand point down icon"></i>hand point down</div>
  <div class="column"><i class="hand point down outline icon"></i>hand point down outline</div>
  <div class="column"><i class="hand point left icon"></i>hand point left</div>
  <div class="column"><i class="hand point left outline icon"></i>hand point left outline</div>
  <div class="column"><i class="hand point right icon"></i>hand point right</div>
  <div class="column"><i class="hand point right outline icon"></i>hand point right outline</div>
  <div class="column"><i class="hand point up icon"></i>hand point up</div>
  <div class="column"><i class="hand point up outline icon"></i>hand point up outline</div>
  <div class="column"><i class="hand pointer icon"></i>hand pointer</div>
  <div class="column"><i class="hand pointer outline icon"></i>hand pointer outline</div>
  <div class="column"><i class="history icon"></i>history</div>
  <div class="column"><i class="level down alternate icon"></i>level down alternate</div>
  <div class="column"><i class="level up alternate icon"></i>level up alternate</div>
  <div class="column"><i class="location arrow icon"></i>location arrow</div>
  <div class="column"><i class="long arrow alternate down icon"></i>long arrow alternate down</div>
  <div class="column"><i class="long arrow alternate left icon"></i>long arrow alternate left</div>
  <div class="column"><i class="long arrow alternate right icon"></i>long arrow alternate right</div>
  <div class="column"><i class="long arrow alternate up icon"></i>long arrow alternate up</div>
  <div class="column"><i class="mouse pointer icon"></i>mouse pointer</div>
  <div class="column"><i class="play icon"></i>play</div>
  <div class="column"><i class="random icon"></i>random</div>
  <div class="column"><i class="recycle icon"></i>recycle</div>
  <div class="column"><i class="redo icon"></i>redo</div>
  <div class="column"><i class="redo alternate icon"></i>redo alternate</div>
  <div class="column"><i class="reply icon"></i>reply</div>
  <div class="column"><i class="reply all icon"></i>reply all</div>
  <div class="column"><i class="retweet icon"></i>retweet</div>
  <div class="column"><i class="share icon"></i>share</div>
  <div class="column"><i class="share square icon"></i>share square</div>
  <div class="column"><i class="share square outline icon"></i>share square outline</div>
  <div class="column"><i class="sign-in icon"></i>sign-in</div>
  <div class="column"><i class="sign-out icon"></i>sign-out</div>
  <div class="column"><i class="sign-in alternate icon"></i>sign-in alternate</div>
  <div class="column"><i class="sign-out alternate icon"></i>sign-out alternate</div>
  <div class="column"><i class="sort icon"></i>sort</div>
  <div class="column"><i class="sort alphabet down icon"></i>sort alphabet down</div>
  <div class="column"><i class="sort alphabet up icon"></i>sort alphabet up</div>
  <div class="column"><i class="sort amount down icon"></i>sort amount down</div>
  <div class="column"><i class="sort amount up icon"></i>sort amount up</div>
  <div class="column"><i class="sort down icon"></i>sort down</div>
  <div class="column"><i class="sort numeric down icon"></i>sort numeric down</div>
  <div class="column"><i class="sort numeric up icon"></i>sort numeric up</div>
  <div class="column"><i class="sort up icon"></i>sort up</div>
  <div class="column"><i class="sync icon"></i>sync</div>
  <div class="column"><i class="sync alternate icon"></i>sync alternate</div>
  <div class="column"><i class="text height icon"></i>text height</div>
  <div class="column"><i class="text width icon"></i>text width</div>
  <div class="column"><i class="undo icon"></i>undo</div>
  <div class="column"><i class="undo alternate icon"></i>undo alternate</div>
  <div class="column"><i class="upload icon"></i>upload</div>
  <div class="column"><i class="zoom-in icon"></i>zoom-in</div>
  <div class="column"><i class="zoom-out icon"></i>zoom-out</div>
</div>
`

export default function IconographyPage() {
  return (
    <Layout title="Iconography">
      <section className="ui segment vertical masthead">
        <h1 className="ui header">
          Iconography
          <p className="sub header">
            Symbology is often the strongest and fastest way to convey tribal or
            universal knowledge.
          </p>
        </h1>
      </section>

      <h2 class="ui header">
        Icon Set<a class="anchor" id="icon-set"></a>
      </h2>

      <p>An icon set contains an arbitrary number of glyphs</p>

      <div class="ui ignored warning message">
        Icons serve a very similar function to text in a page. In Semantic icons
        receive a special tag <code>&lt;i&gt;</code> which allow for an
        abbreviated markup when sitting along-side text.
      </div>

      <div class="ui ignored message">
        Semantic includes a complete port of{" "}
        <a href="https://fontawesome.com/" target="_blank">
          Font Awesome 5.0.8
        </a>{" "}
        designed by the{" "}
        <a href="https://twitter.com/fontawesome">FontAwesome</a> team for its
        standard icon set.
      </div>

      <div class="icon example">
        <h3 class="ui header">Accessibility</h3>
        <p>Icons can represent accessibility standards</p>

        <CodeBlock live={true}>{accessibilityIcons}</CodeBlock>
      </div>

      <div class="icon example">
        <h3 class="ui header">Arrows</h3>
        <p>Icons can be used to indicate a direction</p>

        <CodeBlock live={true}>{arrowIcons}</CodeBlock>
      </div>
    </Layout>
  )
}
