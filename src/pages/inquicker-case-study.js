import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tilt from "react-tilt"
//Icons
import IconRightArrow from "../images/icons/arrow-right"
import IconLeftArrow from "../images/icons/arrow-left"

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

    <section className="end-of-cs">
      <div className="shim1" />
      <div className="case-study-grid">
        <div class="back-home dark g1-4">
          <h3>Thanks for reading!</h3>
          <p>
            If you’d like to read more about my thoughts on design or my
            approach and process check out my other case studies.
          </p>
          <h4>Please Feel Free to Say Hi</h4>
          <p>
            Twitter:{" "}
            <a href="https://twitter.com/grantgarrett">@grantgarrett</a>
            <br />
            Email:{" "}
            <a href="mailo:grant@grantgarrett.com?subject=Hi from your design site">
              grant@grantgarrett.com
            </a>
          </p>
          <Link to="/" className="home-link">
            <IconLeftArrow />
            Go Back Home
          </Link>
        </div>
        <div className="go-to-invision invision g4-9">
          <div className="iv-copy">
            <img
              className="logo"
              src={require("../images/invision-logo.png")}
              alt="invision logo"
            />
            <h2>Digital Product Design Platform</h2>
            <p>
              <b>Task:</b> Redesign the core application to satisfy the growing
              needs of our customers.
            </p>
            <Link to="/invision-case-study/" className="case-study-link">
              InVision Case Study
              <IconRightArrow fill="#ff3366" />
            </Link>
          </div>
          <div className="hero">
            <img
              width={718}
              className="hero-image"
              src={require("../images/invision-case-study/inspect-mode.png")}
              alt="invision inspect mode"
            />
          </div>
        </div>
      </div>
      <div className="shim2" />
    </section>
  </Layout>
)

export default InvisionCS
