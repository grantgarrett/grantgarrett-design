import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Tilt from "react-tilt"
//Icons
import IconRightArrow from "../images/icons/arrow-right"
import IconLeftArrow from "../images/icons/arrow-left"

const InvisionCS = () => (
  <Layout
    pageId="sprinklr-case-study"
    pageTitle="Sprinklr Case Study: Hyperspace Design System"
  >
    <SEO title="Sprinklr Case Study: Hyperspace Design System" />
    <section className="sprinklr intro">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            // width={275}
            className="logo"
            src={require("../images/sprinklr-logo.svg")}
            alt="sprinklr logo"
          />
          <h2>Hyperspace Design System</h2>
          <p>
            <b>Project:</b> Establishing design guidelines and new patterns and components while updating, maintaining, and governing our design system, <em>Hyperspace</em>.
          </p>
          <p>
            <b>Role:</b> Lead Designer for Modern Care product on Sprinklr Platform and point of contact for the Hyperspace Design System.
          </p>
        </div>
        <img
          className="hero-image"
          src={require("../images/sprinklr-hero.png")}
          alt="sprinklr screenshots"
        />


      </div>
    </section>
    <section className="white">
      <div className="case-study-grid">
        <div className="g1-4">
          <h2>Hyperspace Design System</h2>
          <p>
            The foundational structure of our design system, Hyperspace, is made up of Base, Atomic, and Molecular components.
          </p>
          <p>
            There is also the <strong>Design Guidelines</strong> and <strong>Application Shell</strong> templates files I lead design and creation of.
          </p>
        </div>
        <div className="g4-9">
          <img
            className="border hyperspace-files"
            src={require("../images/sprinklr-case-study/hyperspace.png")}
            alt="hyperspace design system"
          />
        </div>
        <div className="g2-5">
          <h3>Base Components</h3>
          <img
            className="border"
            src={require("../images/sprinklr-case-study/base-components.png")}
            alt="hyperspace design system"
          />
        </div>
        <div className="g5-8">
          <h3>Atomic Components</h3>
          <img
            className="border"
            src={require("../images/sprinklr-case-study/atomic-components.png")}
            alt="hyperspace design system"
          />
        </div>
        <div className="g2-8">
          <h3>Molecular Components</h3>
          <img
            className="border"
            src={require("../images/sprinklr-case-study/molecular-components.png")}
            alt="hyperspace design system"
          />
        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="g2-7">
          <h2>
            Design Guidelines & Standards
          </h2>
        </div>
        <div className="g2-4">

          <p>
            I lead in the creation of our Design System Guidelines and Standards documentation. It covers everything from designer onboarding, Figma best practices, file structure and organization, to design foundations such as typography, spacing, and component creation.
          </p>
          <p>
            Here are some examples of the living documents.
          </p>
        </div>
        <div className="g4-8">
          <img
            className="border"
            src={require("../images/sprinklr-case-study/best-practices1.png")}
            alt="hyperspace design system best practices"
          />
        </div>
        <div className="g1-5">
          <img
            className="border"
            src={require("../images/sprinklr-case-study/best-practices2.png")}
            alt="hyperspace design system best practices"
          />
        </div>
        <div className="g5-9">
          <img
            className="border"
            src={require("../images/sprinklr-case-study/best-practices3.png")}
            alt="hyperspace design system best practices"
          />
        </div>
        <div className="g2-8">
          <img
            className="border"
            src={require("../images/sprinklr-case-study/spacing1.png")}
            alt="hyperspace design system best practices"
          />
        </div>

      </div>
    </section>
    <section className="white">
      <div className="case-study-grid">
        <div className="g2-8">
          <h2>
            Layouts & Application Shell Templates
          </h2>
        </div>
        <div className="g2-4">
          <p>
            One area the team needed alignment on was around the terminology of the various elements of our application. Depending on who you talked to you might hear different terms for the same UI element.
          </p>
          <p>
            To help get the team on the same page I created page layout templates and an Application Shell starter file full of flexible platform components.
          </p>
        </div>
        <div className="g4-8">
          <img
            className="border"
            src={require("../images/sprinklr-case-study/page-layout1.png")}
            alt="hyperspace design system"
          />
        </div>
        <div className="g1-9">
          <img
            className="border"
            src={require("../images/sprinklr-case-study/application-shell-components.png")}
            alt="hyperspace design system"
          />
        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="g2-6">
          <h2>Adaptable Components (in Figma)</h2>
          <p>
            Not only did did we need responsive components that could adjust with variable card quantities, we also needed to quickly and easily swap the contents and branding. Here is an example of a responsive Stories component where we can swap the content and branding from Nike to Samsung.
          </p>
        </div>
        <div className="g1-9">
          <video className="video" autoPlay playsInline loop muted>
            <source
              src={require("../images/sprinklr-case-study/brand-content-swapper.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
    <section className="white">
      <div className="case-study-grid">
        <div className="g1-3">
          <h2>Responsive Charts and Graphs (in Figma)</h2>
          <p>
            We needed fixed height graphing wigets that were fully responsive. Notice how the content area automatically adjusts its height when the header text wraps.
          </p>
        </div>
        <div className="g3-9">
          <video className="video" autoPlay playsInline loop muted>
            <source
              src={require("../images/sprinklr-case-study/responsive-chart-component.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="g1-3">
          <h2>Complex Variants</h2>
          <p>
            Our input components were lacking in options, so I made an all-in-one solution.
          </p>
        </div>
        <div className="g3-8">
          <video className="video" autoPlay playsInline loop muted>
            <source
              src={require("../images/sprinklr-case-study/variants.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>










    <section className="end-of-cs">
      <div className="shim1" />
      <div className="case-study-grid">
        <div className="back-home dark g1-4">
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
            <a href="mailto:grant@grantgarrett.com?subject=Hi from your design site">
              grant@grantgarrett.com
            </a>
          </p>
          <Link to="/" className="home-link">
            <IconLeftArrow />
            Portfolio Home
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
              <b>Case Study:</b> Redesign the core application to satisfy the
              growing needs of our customers.
            </p>
            <Link to="/invision-case-study/" className="case-study-link">
              InVision Case Study
              <IconRightArrow fill="#ff3366" />
            </Link>
          </div>
          <div className="hero">
            <img
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
