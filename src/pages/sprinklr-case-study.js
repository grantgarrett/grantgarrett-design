import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

//Icons
import IconRightArrow from "../images/icons/arrow-right"
import IconLeftArrow from "../images/icons/arrow-left"

//Images
import sprinklr_logo from "../images/sprinklr-logo.svg"
//Videos
import adaptableComponents from "../images/sprinklr-case-study/brand-content-swapper.mp4"
import responsiveChart from "../images/sprinklr-case-study/responsive-chart-component.mp4"
import complexVariants from "../images/sprinklr-case-study/variants.mp4"



const InvisionCS = () => (
  <Layout
    pageId="sprinklr-case-study"
    pageTitle="Sprinklr Case Study: Hyperspace Design System"
  >
    <Seo title="Sprinklr Case Study: Hyperspace Design System" />
    <section className="sprinklr intro">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            className="logo"
            src={sprinklr_logo}
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
        <StaticImage
          src="../images/sprinklr-hero.png"
          className="hero-image"
          imgClassName="hero-image"
          alt="sprinklr screenshots"
        />


      </div>
    </section>

    <section className="white">
      <div className="case-study-grid">
        <div className="g2-7">
          <h2>
            Creating Sprinklr's Design System Guidelines & Standards
          </h2>
        </div>
        <div className="g2-4">

          <p>
            I lead in the creation of our Design System Guidelines and Standards documentation. It covers everything from designer onboarding, Figma best practices, file structure and organization, to design foundations such as typography, spacing, and component creation.
          </p>
          <p>
            Here are some examples from the <strong>Design Guidelines</strong> document.
          </p>
        </div>
        <div className="g4-8">
          <h3>Naming Conventions and Layers</h3>
          <StaticImage
            imgClassName="border"
            src="../images/sprinklr-case-study/best-practices1.png"
            alt="hyperspace design system best practices"
          />
        </div>
        <div className="g1-5">
          <h3>How to use Tokens</h3>
          <StaticImage
            imgClassName="border"
            src="../images/sprinklr-case-study/best-practices2.png"
            alt="hyperspace design system best practices"
          />
        </div>
        <div className="g5-9">
          <h3>Component Structure & Documentation</h3>
          <StaticImage
            imgClassName="border"
            src="../images/sprinklr-case-study/best-practices3.png"
            alt="hyperspace design system best practices"
          />
        </div>
        <div className="g2-8">
          <h3>Elemental Spacing and Grid System Guidelines</h3>
          <StaticImage
            imgClassName="border"
            src="../images/sprinklr-case-study/spacing1.png"
            alt="hyperspace design system best practices"
          />
        </div>

      </div>
    </section>

    <section className="dark">
      <div className="case-study-grid">
        <div className="g1-4">
          <h2>Hyperspace Design System Cleanup</h2>
          <p>
            Now that we had some agreed upon standards to guide us, a small team and I were ready to start updating and organizing Hyperspace. The foundational files of our design system <em>Hyperspace</em>, is made up of Base, Atomic, and Molecular components.
          </p>
          <p>
            Part of the cleanup process included an extensive audit of all the existing components. The team and I did health checks on all the compontents, checking to see how well they stood up against our new standards. We creating notes (stickies) as well as status indicators on the table of contents pages to help us in our ongoing work.
          </p>
          <p>
            Also included in this foundational project are the <strong>Design Guidelines</strong> and <strong>Application Shell</strong> templates files I lead design and creation of.
          </p>
        </div>
        <div className="g4-9">
          <StaticImage
            imgClassName="border"
            src="../images/sprinklr-case-study/hyperspace.png"
            alt="hyperspace design system"
          />
        </div>
        <div className="g2-5">
          <h3>Base Components</h3>
          <StaticImage
            imgClassName="border"
            src="../images/sprinklr-case-study/base-components.png"
            alt="hyperspace design system"
          />
        </div>
        <div className="g5-8">
          <h3>Atomic Components</h3>
          <StaticImage
            imgClassName="border"
            src="../images/sprinklr-case-study/atomic-components.png"
            alt="hyperspace design system"
          />
        </div>
        <div className="g2-8">
          <h3>Molecular Components</h3>
          <StaticImage
            imgClassName="border"
            src="../images/sprinklr-case-study/molecular-components.png"
            alt="hyperspace design system"
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
          <StaticImage
            imgClassName="border"
            src="../images/sprinklr-case-study/page-layout1.png"
            alt="hyperspace design system"
          />
        </div>
        <div className="g1-9">
          <StaticImage
            imgClassName="border"
            src="../images/sprinklr-case-study/application-shell-components.png"
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
            Not only did did we need responsive components that could adjust with variable card quantities, we also needed to quickly and easily swap the contents and branding. Here is an example of a responsive Stories component I created showcasing how we can swap the content and branding from Nike to Samsung using a plugin.
          </p>
        </div>
        <div className="g1-9">
          <video className="video" autoPlay playsInline loop muted>
            <source
              src={adaptableComponents}
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
            The team needed fixed height graphing wigets that were fully responsive. Here is an example of a flexible and responsive bar chart I created. Notice how the content area automatically adjusts its height when the header text wraps and how the bar chart percentages stay consistent.
          </p>
        </div>
        <div className="g3-9">
          <video className="video" autoPlay playsInline loop muted>
            <source
              src={responsiveChart}
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
            Many of our most commonly used components were severly lacking in flexibility. Here is an example of me expanding on the capabilities of our simple input component.
          </p>
        </div>
        <div className="g3-8">
          <video className="video" autoPlay playsInline loop muted>
            <source
              src={complexVariants}
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
            <StaticImage
              className="logo"
              src="../images/invision-logo.png"
              alt="invision logo"
              placeholder="tracedSVG"
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
            <StaticImage
              imgClassName="hero-image"
              src="../images/invision-case-study/inspect-mode.png"
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
