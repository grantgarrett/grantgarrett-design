import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tilt from "react-tilt"

//Icons
import IconRightArrow from "../images/icons/arrow-right"
import IconDownArrow from "../images/icons/arrow-down"

const IndexPage = () => (
  <Layout pageId="home">
    <SEO
      title="Grant Garrett Design"
      keywords={[`Product Designer`, `Grant Garrett`, `Design`]}
    />
    <section className="bio">
      <div className="section-wrapper">
        <div className="g3-5">
          <h1>
            Hi, I’m <span>Grant Garrett</span>, a Product Designer living in Portland, Oregon.
          </h1>
          <h2>This is my portfolio.</h2>
        </div>
        <div className="g5-7">
          <p>
            My focus is creating simple, user centered designs that are based on
            research, data, and a strong understanding of a user's goals and
            motivations. I love to blend user centered design thinking with holistic systems thinking perspectives.
          </p>
          <p>
            I believe that great design is inherently inclusive and
            that everyone can meaningfully contribute to design.
          </p>
          <p>I also love Figma and design systems.</p>
        </div>
        <p className="contribute">
          Experience & Contributions
          <IconDownArrow className="arrow" fill="#C7D5E7" />
        </p>
      </div>
    </section>
    <section className="sprinklr">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            className="logo"
            src={require("../images/sprinklr-logo.svg")}
            alt="sprinklr logo"
          />
          <h2>Unified Customer Experience Platform</h2>
          <p>
            <b>Case Study:</b> Establishing guidelines and new patterns and components for our design system Hyperspace.
          </p>
          <Link to="/sprinklr-case-study/" className="case-study-link-home-button">
            Sprinklr Design System
            <IconRightArrow />
          </Link>
        </div>
        <img
          className="hero-image"
          src={require("../images/sprinklr-hero.png")}
          alt="sprinklr screenshots"
        />
      </div>
    </section>
    <section className="sightbox">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            className="logo"
            src={require("../images/sightbox-logo.png")}
            alt="sightbox logo"
          />
          <h2>Simplifying Vision Care for Contact Lens Wearers</h2>
          <p>
            <b>Case Study:</b> Design a process to automate the renewal of memberships.
          </p>
          <Link to="/sightbox-case-study/" className="case-study-link-home-button">
            Sightbox Case Study
            <IconRightArrow />
          </Link>
        </div>
        <img
          className="hero-image"
          src={require("../images/sightbox-member-profile.png")}
          alt="sightbox app screenshot"
        />
      </div>
    </section>
    <section className="inquicker">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            className="logo"
            src={require("../images/inquicker-logo.png")}
            alt="inquicker logo"
          />
          <h2>Reinventing the Patient Experience</h2>
          <p>
            <b>Case Study:</b> Redesign the core application to satisfy the
            growing needs of our customers.
          </p>
          <Link to="/inquicker-case-study/" className="case-study-link-home-button">
            InQuicker Case Study
            <IconRightArrow fill="#ee3124" />
          </Link>
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
              className=""
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
    <section className="invision">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            className="logo"
            src={require("../images/invision-logo.png")}
            alt="invision logo"
          />
          <h2>Digital Product Design Platform</h2>
          <p>
            <b>Case Study:</b> Design a mode that helps close the gap between
            the end of the design process and the beginning of development.
          </p>
          <Link to="/invision-case-study/" className="case-study-link-home-button">
            InVision Case Study
            <IconRightArrow fill="#ff3366" />
          </Link>
        </div>
        <Tilt
          className="Tilt"
          options={{
            max: 8,
            perspective: 1000,
            reverse: true,
            speed: 2000,
            scale: 1,
          }}
        >
          <img
            width={718}
            className="hero-image"
            src={require("../images/invision-case-study/inspect-mode.png")}
            alt="invision inspect mode"
          />
        </Tilt>
      </div>
    </section>
    {/* <section className="sprintly">
      <div className="section-wrapper">
        <Tilt
          className="Tilt"
          options={{
            max: 5,
            perspective: 1000,
            reverse: true,
            speed: 2000,
            scale: 1,
          }}
        >
          <img
            width={544}
            className="hero-image"
            src={require("../images/sprintly-hero.jpg")}
            alt="sprintly app screenshot"
          />
        </Tilt>
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
    </section> */}
  </Layout >
)

export default IndexPage
