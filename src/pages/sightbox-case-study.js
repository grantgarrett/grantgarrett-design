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
    pageId="sightbox-case-study"
    pageTitle="Sightbox Case Study: Memberships Redesign "
  >
    <SEO title="Case Study: Sightbox" />
    <section className="sightbox intro">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            width={275}
            className="logo"
            src={require("../images/sightbox-logo.png")}
            alt="sightbox logo"
          />
          <h2>Case Study: Memberships Redesign</h2>
          <p>
            <b>Task:</b> Design a process to automate the renewal of memberships.
          </p>
        </div>
        <div className="sightbox-hero-group">
          <img
            // width={740}
            className="hero-image"
            src={require("../images/sightbox-case-study/renewal-dashboard.png")}
            alt="sightbox renewal dashboard screenshot"
          />

        </div>
      </div>
    </section>

    <section className="dark">
      <div className="case-study-grid">
        <div className="column1 g2-5">
          <h2>
            <b>Why</b> - Understanding the Goal
          </h2>
          <h4>Why is this product redesign important?</h4>
          <p>
            The expansion of features to our core app will help fulfill our
            customers needs as well as our own goal to expand into larger
            markets.
          </p>
        </div>
        <div className="column2 g5-8">
          <h2>
            <b>Who</b> - Defining the Audience
          </h2>
          <h4>Who will be using this?</h4>
          <p>
            Our customers are hospitals and larger health systems. The actual
            users of the app will be our customer’s patients. They are, in
            general, men and women who prefer to use the internet to schedule
            appointments rather than traditional phone calls. The age range is
            fairly broad - from 18 to 45. Desktop as well as mobile devices are
            used, at a rough 50/50 split.
          </p>

        </div>
      </div>
    </section>

    <section className="white">
      <div className="case-study-grid">
        <div className="g2-6">
          <h2>Auditing the current manual process flow</h2>
          <p>
            The current user flow worked and has been a proven design. How do we
            add new features without breaking what has worked for years?
          </p>
        </div>
        <div className="g1-9">
          <img
            className="border"
            src={require("../images/sightbox-case-study/manual-renewal-process-flow-audit.png")}
            alt="manual renewal process flow audit"
          />
        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="g2-5">
          <h2>Design Debt</h2>
          <p>
            A redesign gives the opportunity to go back and find the areas of
            the previous design that didn’t hold up over time. The app’s
            expanding needs sometimes led to areas simply being outgrown or
            bloated. Now was the time to address this debt.
          </p>

          <p>
            An obvious element that needed an update was the Insurance filter.
            It had ballooned to an unusable size. The first step in improving
            the experience was to break it down into a two step process:
          </p>
          <ol>
            <li>Choose Insurance Provider</li>
            <li>Choose Plan.</li>
          </ol>
        </div>
      </div>
    </section>
    <section>
      <div className="case-study-grid">
        <div className="g1-4">
          <h2>Member States</h2>
          <p>
            An updated design created more screens but was still able to
            maintain a relatively simple and similar user flow.
          </p>

        </div>
        <div className="g4-9">
          <img
            className="border"
            src={require("../images/sightbox-case-study/member-renewal-states-v1.png")}
            alt="wireframing"
          />
        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="g3-7">
          <h2>State Machines</h2>
          <p>
            A redesign gives the opportunity to go back and find the areas of
            the previous design that didn’t hold up over time. The app’s
            expanding needs sometimes led to areas simply being outgrown or
            bloated. Now was the time to address this debt.
          </p>

          <p>
            An obvious element that needed an update was the Insurance filter.
            It had ballooned to an unusable size. The first step in improving
            the experience was to break it down into a two step process:
          </p>
          <ol>
            <li>Choose Insurance Provider</li>
            <li>Choose Plan.</li>
          </ol>
        </div>

      </div>
    </section>
    <section>
      <div className="case-study-grid">
        <div className="g2-7">
          <h2>Member States: V2</h2>
          <p>
            An updated design created more screens but was still able to
            maintain a relatively simple and similar user flow.
          </p>

        </div>
        <div className="g1-9">
          <img
            className="border"
            src={require("../images/sightbox-case-study/member-renewal-states-v2.png")}
            alt="wireframing"
          />
        </div>
      </div>
    </section>


    <section className="dark">
      <div className="case-study-grid">
        <div className="g2-5">
          <h2>Design Debt</h2>
          <p>
            A redesign gives the opportunity to go back and find the areas of
            the previous design that didn’t hold up over time. The app’s
            expanding needs sometimes led to areas simply being outgrown or
            bloated. Now was the time to address this debt.
          </p>

          <p>
            An obvious element that needed an update was the Insurance filter.
            It had ballooned to an unusable size. The first step in improving
            the experience was to break it down into a two step process:
          </p>
          <ol>
            <li>Choose Insurance Provider</li>
            <li>Choose Plan.</li>
          </ol>
        </div>
        <div className="g5-8">
          <div className="image-slide">
            <img
              className=""
              src={require("../images/inquicker-case-study/debt1.png")}
              alt="design debt"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="case-study-grid">
        <div className="g2-5">
          <h2>Details Defined</h2>
          <p>
            Seemingly simple elements can become quite complex quickly. Clearly
            defining how these UI elements work in any state or scenario is
            immensely important.
          </p>

          <p>
            Here I am defining how the pagination should work across our search
            results pages.
          </p>
        </div>
        <div className="g5-9">
          <div className="image-slide">
            <img
              className="border"
              src={require("../images/inquicker-case-study/pagination.png")}
              alt="pagination"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="white">
      <div className="case-study-grid">
        <div className="g3-7">
          <h2>Wireframe Iterations</h2>
          <p>
            Users don’t always take the same path. The new maps view required us
            to think about the different way locations can be searched for.
          </p>
        </div>
        <div className="g1-5">
          <div className="image-slide">
            <img
              className="hero-image"
              src={require("../images/sightbox-case-study/wireframes01.png")}
              alt="sightbox app screenshot"
            />
          </div>
        </div>
        <div className="g2-6">
          <div className="image-slide">
            <img
              className="hero-image wireframe-overlap"
              src={require("../images/sightbox-case-study/wireframes02.png")}
              alt="sightbox app screenshot"
            />
          </div>
        </div>
        <div className="g3-7">
          <div className="image-slide wireframe-overlap">
            <img
              className="hero-image"
              src={require("../images/sightbox-case-study/wireframes03.png")}
              alt="sightbox app screenshot"
            />
          </div>
        </div>
        <div className="g4-8">
          <div className="image-slide wireframe-overlap">
            <img
              className="hero-image"
              src={require("../images/sightbox-case-study/wireframes04.png")}
              alt="sightbox app screenshot"
            />
          </div>
        </div>
        <div className="g5-9">
          <div className="image-slide wireframe-overlap">
            <img
              className="hero-image"
              src={require("../images/sightbox-case-study/wireframes05.png")}
              alt="sightbox app screenshot"
            />
          </div>
        </div>
      </div>
    </section>




    <section className="dark">
      <div className="case-study-grid">
        <div className="g2-6">
          <h2>2 Point Ohhh!</h2>
          <h4>Final Designs</h4>
          <p>
            By the time time the design was complete we already knew it was
            going to succeed. Our customers who joined along during the design
            process were already on board. Their insight and help left little
            doubt that the rest of our customers would have any issues with the
            redesign.
          </p>
        </div>
      </div>
      <div className="case-study-grid final-sightbox">
        <div className="g1-9">


          <img
            // width={740}
            className="hero-image"
            src={require("../images/sightbox-case-study/renewal-dashboard.png")}
            alt="sightbox renewal dashboard screenshot"
          />
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
