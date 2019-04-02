import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

//Icons
import IconRightArrow from "../images/icons/arrow-right"
import IconDownArrow from "../images/icons/arrow-down"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Grant Garrett Design"
      keywords={[`Product Designer`, `Grant Garrett`, `Design`]}
    />
    <section className="bio">
      <div className="section-wrapper">
        <figure>
          <img
            className="bio-pic"
            width={192}
            src={require("../images/gg-avatar.png")}
            alt={"Me on a hike near Ama Dablam in the Himalaya, Nepal."}
          />
          <figcaption>
            Me on a hike near{" "}
            <a
              href="https://en.wikipedia.org/wiki/Ama_Dablam"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ama Dablam
            </a>{" "}
            in the Himalaya, Nepal.
          </figcaption>
        </figure>
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
          <IconDownArrow className="arrow" />
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
            alt="inquicker logo"
          />
          <h2>Reinventing the Patient Experience</h2>
          <p>
            <b>Task:</b> Redesign the core application to satisfy the growing
            needs of our customers.
          </p>
          <Link to="/inquicker-case-study/" className="case-study-link">
            InQuicker Case Study
            <IconRightArrow fill="#ee3124" />
          </Link>
        </div>
        <img
          width={714}
          className="hero-image"
          src={require("../images/inquicker-hero.png")}
          alt="inquicker app screenshot"
        />
      </div>
    </section>
    <section className="invision">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            width={270}
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
        <img
          width={718}
          className="hero-image"
          src={require("../images/inspect-mode-hero.png")}
          alt="invision inspect mode"
        />
      </div>
    </section>
    <section className="sprintly">
      <div className="section-wrapper">
        <img
          width={544}
          className="hero-image"
          src={require("../images/sprintly-hero.jpg")}
          alt="sprintly app screenshot"
        />
        <div className="section-content">
          <img
            width={275}
            className="logo"
            src={require("../images/sprintly-logo.png")}
            alt="sprintly logo"
          />
          <h2>Project Management for Software Teams</h2>
        </div>
      </div>
    </section>
    <section className="appfog">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            width={294}
            className="logo"
            src={require("../images/appfog-logo.png")}
            alt="appfog logo"
          />
          <h2>
            Platform for creating, scaling, and managing apps in the cloud.
          </h2>
        </div>
        <img
          width={534}
          className="hero-image"
          src={require("../images/appfog-hero.png")}
          alt="appfog application screenshot"
        />
      </div>
    </section>
  </Layout>
)

export default IndexPage
