import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tilt from "react-tilt"

const InvisionCS = () => (
  <Layout pageId="inquicker-case-study" pageTitle="InQuicker Case Study">
    <SEO title="Case Study: InQuicker" />
    <section className="inquicker">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            width={275}
            className="logo"
            alt="inqucker logo"
            src={require("../images/inquicker-logo.png")}
          />
          <h2>Reinventing the Patient Experience</h2>
          <p>
            <b>Task:</b> Redesign the core application to satisfy the growing
            needs of our customers.
          </p>
        </div>
        <div className="inquicker-hero-group">
          <Tilt
            className="Tilt hero-iphone"
            options={{
              max: 8,
              perspective: 1000,
              reverse: true,
              speed: 2000,
              scale: 1,
            }}
          >
            <img
              className="hero-image"
              width={197}
              src={require("../images/inquicker-iphone-hero.png")}
              alt="inquicker iphone screenshot"
            />
          </Tilt>

          <img
            width={530}
            className="hero-image hero-app"
            src={require("../images/inquicker-app-hero.png")}
            alt="inquicker app screenshot"
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default InvisionCS
