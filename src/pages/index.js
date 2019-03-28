import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import avatar from "../images/gg-avatar.png"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Grant Garrett Design"
      keywords={[`Product Designer`, `Grant Garrett`, `Design`]}
    />

    <section className="bio">
      <img src={avatar} alt="Grant Garrett" />
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
    </section>

    <Link to="/invision-case-study/">InVision Case Study</Link>
  </Layout>
)

export default IndexPage
