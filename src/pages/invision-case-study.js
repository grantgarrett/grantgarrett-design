import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tilt from "react-tilt"
const InvisionCS = () => (
  <Layout
    pageId="invision-case-study"
    pageTitle="InVision Case Study: Inspect Mode"
  >
    <SEO title="Case Study: InVision Inspect Mode" />
    <section className="intro">
      <div className="case-study-grid">
        <div className="g1-4">
          <img
            className="logo"
            src={require("../images/invision-logo.png")}
            alt="invision logo"
          />
          <h2>Case Study: Inspect Mode</h2>
          <p>
            <b>Task:</b> Redesign the core application to satisfy the growing
            needs of our customers.
          </p>
        </div>
        <Tilt
          className="Tilt  g4-9"
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
            src={require("../images/inspect-mode-hero.png")}
            alt="invision inspect mode"
          />
        </Tilt>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div class="column1 g2-5">
          <h2>
            <b>Why</b> - Understanding the Goal
          </h2>
          <h4>Why is this feature important?</h4>
          <p>
            This feature helps complete the design process and workflow.
            Currently in the app there is no way for a designer to easily pass
            along design specs and assets to developers.
          </p>

          <h4>What problem are we trying to solve?</h4>
          <p>
            During the design handoff there is often a disconnect. Design
            documents get updated after the fact, developers don’t have the
            needed design software so they are stuck looking at static
            screenshots, discussions that helped shape the design are lost.
            Because of these problems developers are having to constantly ping
            designers for CSS values, hex codes, icons, image assets, etc. This
            is inefficient for both parties.
          </p>

          <h4>How does this feature benefit customers?</h4>
          <p>
            This feature would save time for the designer as well as bring
            efficiency to the development process. Having a single source of
            truth for the designs means the developer always has the latest
            designs and specs.
          </p>
        </div>
        <div class="column2 g5-8">
          <h2>
            <b>Who</b> - Define the Audience
          </h2>
          <h4>Who will be using this?</h4>
          <p>
            The interesting part of this new feature is that it will not only be
            used by our normal designer user type, but it will potentially be
            bringing on a new audience - developers.
          </p>

          <h4>What are their needs?</h4>
          <p>
            Designers: This new feature needs to facilitate the efficient
            transfer of design details and specifications to the developer.
            Developers: They need design assets and specs. If they can get this
            from the new feature instead of working directly with the designer
            it removes a bottleneck. Another advantage is that this can be done
            whenever the developer needs.
          </p>

          <h4>When & Where?</h4>
          <p>
            The designers and developers using this will be at their desks; most
            likely in an office or their work space. Design for large monitors
            and high speed internet. Designing for mobile is unneeded.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div className="case-study-grid">
        <div class="column1 g2-5">
          <h2>Explore & Define Current Modes</h2>
          <p>
            Working from the bottom up I’m trying to distill each mode into its
            functions and goals. Comment mode is essentially about
            communication, which is what the designer is trying to accomplish
            with the developer in our new scenario.
          </p>

          <p>
            In this light, having developer inspect tools in comment mode makes
            sense. Renaming the mode to something more relevant would need to
            happen however.
          </p>
        </div>
        <div class="column2 g5-8">
          <div className="image-slide">
            <img
              className=""
              src={require("../images/invision-case-study/modes-explore.png")}
              alt="explore modes"
            />
            *Actual documents used during design process
          </div>
        </div>
      </div>
    </section>
    <section className="white">
      <div className="case-study-grid">
        <div class="column1 g3-7">
          <h2>Audit current state of sketches and annotations</h2>
          <p>
            Here I am auditing the current state of the sketch and annotation
            tool. How can we improve this feature and better utilize it with the
            new document inspection tools?
          </p>
        </div>
        <div class="column2 g2-8">
          <div className="image-slide">
            <img
              className="no-border"
              src={require("../images/invision-case-study/sketches-audit.png")}
              alt="explore modes"
            />
            *Actual documents used during design process
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default InvisionCS
