import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const InvisionCS = () => (
  <Layout pageId="inquicker">
    <SEO title="Case Study: InQuicker" />
    <h1>InQuicker Case Study</h1>
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
          <Link to="/inquicker-case-study/">InQuicker Case Study</Link>
        </div>
        <img
          width={714}
          className="hero-image"
          src={require("../images/inquicker-hero.png")}
        />
      </div>
    </section>
  </Layout>
)

export default InvisionCS
