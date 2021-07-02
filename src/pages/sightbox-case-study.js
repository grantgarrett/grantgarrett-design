import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Tilt from "react-tilt"
//Icons
import IconRightArrow from "../images/icons/arrow-right"
import IconLeftArrow from "../images/icons/arrow-left"

const InvisionCS = () => (
  <Layout
    pageId="sightbox-case-study"
    pageTitle="Sightbox Case Study: Memberships Redesign "
  >
    <Seo title="Case Study: Sightbox" />
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
          <p>
            <b>Role:</b> Product Design lead for Sightbox's internal CRM, IRIS.
          </p>
        </div>
        <div className="intro-hero">
          <img
            className="hero-image"
            src={require("../images/sightbox-case-study/renewal-dashboard.png")}
            alt="sightbox renewal dashboard screenshot"
          />

        </div>
      </div>
    </section>

    <section className="dark">
      <div className="case-study-grid">
        <div className="column1 g2-8"><h2>
          Automate the process of renewing a member.
        </h2></div>
        <div className="column1 g2-5">
          <p>
            My role at Sightbox was lead designer for our internal CRM which was named IRIS. IRIS handled member data (payments, shipping, prescription info, scheduling). One thing it didn’t handle was the renewal of a membership once the prescription expired at the end of the year. It had no notion or idea how long a membership lasted or what to do when a prescription was expiring - so our support team was handling the entire process <strong>manually</strong>.
          </p>
        </div>
        <div className="column2 g5-8">

          <p>
            Before I could think about starting on designing an automated system, I knew that I needed to do some quality research on the current process. What actions and decisions was the support team having to make along the way? What data were they using to make those decisions? What data could help them that they didn’t already have?
          </p>


        </div>
      </div>
    </section>

    <section className="white">
      <div className="case-study-grid">
        <div className="g2-8">
          <h2>Auditing the current manual process flow</h2>
          <p>
            I started off by auditing the process flow from the support agents point of view. I sat down with the Renewals team and observed them going through their process. I documented all their steps. What criteria they were looking at, what decisions were made and when. What other tools they were using to fill in the gaps. What steps were manual, what were already automated.
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
        <div className="g2-8">
          <h2>So what did I learn from the audit?</h2>
          <p>
            There were a lot of steps, but overall it was mostly a linear flow; which was great, we can work with that. The hardest part to automating this would be around <strong>determining member eligibility</strong>. There weren’t clean rules and policies in place which led to a lot of subjective decisions being made with data that was hard to get.
          </p>
        </div>
      </div>
    </section>
    <section className="white">
      <div className="case-study-grid">
        <div className="g1-4">
          <h2>Figuring Out the Eligibility System</h2>
          <p>
            To get a better idea of all the variables a support agent needed to consider when determining if a member was eligible for a renewal, I mocked up various scenarios from a membership timeline point of view.
          </p>
          <p>
            It quickly showed how easily out-of-sync various timelines could get and how taking a snapshot of a members timeline near the end of the year wasn’t an accurate representation of their status or eligibility. So again, how were we going to automate this complexity? Part of the reason the data was hard to digest was because IRIS had no notion of member states or status.
          </p>
        </div>
        <div className="g4-9">
          <img
            className="border"
            src={require("../images/sightbox-case-study/membership-timelines.png")}
            alt="possible membership timelines"
          />
        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="g1-5">
          <img
            className="border"
            src={require("../images/sightbox-case-study/member-renewal-states-v1.png")}
            alt="wireframing"
          />
        </div>
        <div className="g5-9">
          <h2>Desiging A System</h2>
          <p>
            A system isn’t great at being subjective. It needs clear sets of data and a solid ruleset to do its job. IRIS didn’t have those things and would need them to automate. Using the more simplified flow steps from the process audit, I started diagramming out possible member state flows. How can we tag and track members through their membership based on key decision or action points?
          </p>
        </div>
      </div>
    </section>
    <section>
      <div className="case-study-grid">
        <div className="g2-8">
          <h2>Member States</h2>
          <p>
            I really wanted to learn more here, to dig deeper. I did a lot of external research and looked at how other systems handled state. I learned about <strong>Finite State Machines</strong> and how they are designed to simulate sequential logic, so I designed one for our system. The FSM here looks complex but logically it ended up being a much more clean and simple way to handle what we needed. Perfect for the system automation we were going for.
          </p>

        </div>
        <div className="g1-9">
          <img
            className="border"
            src={require("../images/sightbox-case-study/member-renewal-states-v2.png")}
            alt="wireframing"
          />
        </div>
        <div className="g2-8">
          <p>
            I consulted engineering about possible technical limitations or problems and found out they had been trying to do something like this for a while. They were completely on board and were excited at building proper state management into IRIS. This would help not only this automated Renewals project, but the system as a whole.
          </p>

        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="g3-7">
          <h2>The Plan</h2>
          <p>
            So I had a basic strategy:
          </p>
          <ol>
            <li>Leverage these states that would provide clear data for the system to use against a ruleset.</li>
            <li>Customer Support was going to work with the business on clarifying and simplifying the criteria for eligibility. </li>
            <li>Pull the entire Renewal process into IRIS. No more 3rd party tools; no more copy and pasting.</li>
          </ol>

        </div>

      </div>
    </section>
    <section>
      <div className="case-study-grid">
        <div className="g3-7">
          <h2>First Steps</h2>
          <p>
            We had the end goal, but how were we going to make smaller steps to get there? Proper state management wasn’t something that could be budgeted right away, so we knew manual decision making was still going to be needed at least for a little bit. What pragmatic steps would be most beneficial right now?
          </p>
        </div>

      </div>
    </section>


    <section className="dark">
      <div className="case-study-grid">
        <div className="g2-8">
          <h2>Iterating</h2>
        </div>
        <div className="g2-5">
          <p>
            Through lots of rough wireframes and feedback sessions on user flow, I decided on a dashboard style approach. I listed members with their relevant data needed for processing. All the info an agent needed to make a decision was right there, front and center, with buttons tied to the major actions needed to process a member through the flow.
          </p>
        </div>
        <div className="g5-8">
          <p>
            Keeping Automation in mind as the end goal, what can we start now that can help us later? The engineering team and I decided to start an ‘algorithm’ with the data we had, however incomplete or messy it was. We can show what the system is suggesting, but still have the support agent be the one calling the shots. This way we can start to grade the system suggestions vs the reality of what the agents did. This ‘algorithm’ is something we can slowly develop and tweak over time and hopefully it would become super solid as we introduce cleaner data into the system down the road.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div className="case-study-grid wireframe-section">
        <div className="g2-8">
          <p className="first-paragraph">
            Through more in depth conversations with our Member Portal team around automated messaging, we found out we could move away from all the previous ‘steps’ we were using and start to base the members status on where they were at in the messaging flow. Which emails have the users received, which have they responded to, ect. With this new approach to a users status/state we only needed a couple views. I also introduced the notion of letting Support use Filters to help them narrow down on more specific users that may be in more unique situations.
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
        <div className="g2-8">
          <p className="last-paragraph">
            Through more and more feedback sessions and prototyping with Support and Engineering, I found we could continue to simplify the dashboard. We had a simple dashboard that used filters to drive what area of renewals you needed to see. The member messaging turned into a major status indicator. Everyone was really happy with this initial design - it was simple to use yet powerful in all the functionality it provided.
          </p>
        </div>
      </div>
    </section>

    <section className="dark">
      <div className="case-study-grid">
        <div className="g1-4">
          <h2>Design Phase 1 Complete</h2>
          <h4>Results after launch?</h4>
          <ul>
            <li>IRIS was capturing all the data, nothing lost to 3rd party apps anymore, Support was able to ditch many of the 3rd party tools they needed</li>
            <li>Time spent by support agents on Renewals was cut by nearly in half</li>
            <li>Every Sightbox member was able to be given the proper time to be evaluated for eligibility, no more skipped or lost members at the end of their year</li>
            <li>Overall, we drastically simplified the Renewal process, a Support Agent could be onboarded in a day, where previously it was weeks</li>
            <li>And finally, we had a solid plan and roadmap moving forward towards a fully automated renewals system</li>
          </ul>
        </div>

        <div className="final-screenshot g4-9">
          <img
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
