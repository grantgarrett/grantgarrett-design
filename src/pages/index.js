import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// import avatar from "../images/gg-avatar.png"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Grant Garrett Design"
      keywords={[`Product Designer`, `Grant Garrett`, `Design`]}
    />
    <section className="bio">
      <div className="section-wrapper">
        <img className="bio-pic" src={require("../images/gg-avatar.png")} />
        <div className="bio-text">
          <h1>
            Hi, I’m <span>Grant Garrett</span>, a Product Designer living in
            Portland, Oregon.
          </h1>
          <p>
            My focus is creating simple, user centered designs that are based on
            research, data, and a strong understanding of the users goals and
            motivations. I believe that great design is inherently inclusive and
            that everyone can (and should) contribute to design.
          </p>
        </div>
        <p className="contribute">
          Projects I've Contributed To
          <img src={require("../images/down-arrow.svg")} />
        </p>
      </div>
    </section>
    <section className="inquicker">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            width={275}
            className="logo"
            src={require("../images/inquicker-logo.png")}
          />
          <h2>Reinventing the Patient Experience</h2>
          <p>
            <b>Task:</b> Redesign the core application to satisfy the growing
            needs of our customers.
          </p>
          <Link to="/invision-case-study/">InQuicker Case Study</Link>
        </div>
        <img
          width={714}
          className="hero-image"
          src={require("../images/inquicker-hero.png")}
        />
      </div>
    </section>
    <section className="invision">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            width={275}
            className="logo"
            src={require("../images/invision-logo.png")}
          />
          <h2>Digital Product Design Platform</h2>
          <p>
            <b>Task:</b> Redesign the core application to satisfy the growing
            needs of our customers.
          </p>
          <Link to="/invision-case-study/">InVision Case Study</Link>
        </div>
        <img
          width={718}
          className="hero-image"
          src={require("../images/inspect-mode-hero.png")}
        />
      </div>
    </section>
  </Layout>
)

export default IndexPage
