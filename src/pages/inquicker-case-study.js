import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tilt from "react-tilt"
//Icons
import IconRightArrow from "../images/icons/arrow-right"
import IconLeftArrow from "../images/icons/arrow-left"

const InvisionCS = () => (
  <Layout
    pageId="inquicker-case-study"
    pageTitle="InQuicker Case Study: InQuicker 2.0 "
  >
    <SEO title="Case Study: InQuicker" />
    <section className="inquicker intro">
      <div className="section-wrapper">
        <div className="section-content">
          <img
            className="logo"
            alt="inqucker logo"
            src={require("../images/inquicker-logo.png")}
          />
          <h2>Case Study: Patient Application 2.0</h2>
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
              className=""
              src={require("../images/inquicker-iphone-hero.png")}
              alt="inquicker iphone screenshot"
            />
          </Tilt>

          <img
            className="hero-image hero-app"
            src={require("../images/inquicker-app-hero.png")}
            alt="inquicker app screenshot"
          />
        </div>
      </div>
    </section>
    <section>
      <div className="case-study-grid">
        <div className="g1-5">
          <h2>Current State of the App</h2>
          <p>
            InQuicker’s patient self scheduling application was at a state where
            it had outgrown it’s original design intent of providing scheduling
            for patient’s immediate needs; Emergency Room and Urgent Care.
          </p>
          <p>
            Recently Primary Care scheduling had been added and we could already
            see cracks start to appear. With a list of features and other
            general improvements that needed to be added, we knew we a redesign
            was in order.
          </p>
          <h4>What new features did we need?</h4>
          <ul>
            <li>Appointment type filtering</li>
            <li>Insurance coverage filtering</li>
            <li>Search and browse by location</li>
            <li>Map view</li>
            <li>Easily browse future schedules</li>
            <li>Accommodate new Specialties and Service types</li>
            <li>Dedicated Provider profiles</li>
            <li>Language filtering</li>
            <li>Advanced screening questions</li>
          </ul>
        </div>
        <div className="g5-9">
          <div className="image-slide">
            <img
              className="hero-image"
              src={require("../images/inquicker-case-study/inquicker-old-patient.png")}
              alt="old inquicker state"
            />
          </div>
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

          <h4>What problem are we trying to solve?</h4>
          <p>
            Currently the app is able to serve Urgent Care, Emergency Room, and
            basic Primary Care needs. We need to expand the types of Provider
            coverage as well as basic market features to be competitive in the
            growing market space.
          </p>

          <h4>How does this feature benefit customers?</h4>
          <p>
            An updated and redesigned InQuicker gives our customers an
            application that will cover all their needs. They will no longer
            need separate tools to cover the gaps that the current application
            creates. A redesign will also give our customer’s patients a greater
            and more streamlined user experience.
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

          <h4>What are their needs?</h4>
          <p>
            Patients need an easy and quick way to find a doctor and book an
            appointment. Appointments may be soon or much further into the
            future, so they need an easy way to browse dates. Filtering based on
            insurance coverage and appointment types is important. Some patients
            have specific providers they visit, so they need an easy way to find
            their providers profile.
          </p>

          <h4>When & Where?</h4>
          <p>
            The patients might be at home or on the go. They have no specific
            time restraints, but the quicker they can flow through to
            appointment registration the better.
          </p>
        </div>
      </div>
    </section>

    <section className="white">
      <div className="case-study-grid">
        <div className="g2-6">
          <h2>Current Flow = Very simple</h2>
          <p>
            The current user flow worked and has been a proven design. How do we
            add new features without breaking what has worked for years?
          </p>
        </div>
        <div className="g1-9">
          <img
            className="border"
            src={require("../images/inquicker-case-study/wireframes1.png")}
            alt="wireframing"
          />
        </div>
      </div>
    </section>

    <section>
      <div className="case-study-grid">
        <div className="g1-4">
          <h2>Mo Pages Mo Problems?</h2>
          <p>
            An updated design created more screens but was still able to
            maintain a relatively simple and similar user flow.
          </p>
          <p>
            The general steps of a flow a user takes is shown here left to
            right. The columns represent alternate states of a step.
          </p>
        </div>
        <div className="g4-9">
          <img
            className="border"
            src={require("../images/inquicker-case-study/wireframes2.png")}
            alt="wireframing"
          />
        </div>
      </div>
    </section>

    <section className="white">
      <div className="case-study-grid">
        <div className="g1-4">
          <h2>Iterating With Customers</h2>
          <h4>Example: Provider Profile</h4>
          <p>
            We worked with our customers from wireframes through to the final
            designs. They helped shape and inform the product from Day 1. They
            had first hand knowledge of what their patients needed and were
            asking for, so they were crucial to consult with and learn from.
          </p>
          <p>
            One thing we learned from was that patients really wanted to know
            more about the providers. So to help educate the patients we added
            an “About” tab to each provider profile where we showcased personal
            and background information.
          </p>
        </div>
        <img
          className="g4-9"
          src={require("../images/inquicker-case-study/iteration-group.png")}
          alt="iterating"
        />
        {/* <div class="g4-9 iterations">
          <img
            className="hero-image it1"
            src={require("../images/inquicker-case-study/iteration1.png")}
            alt="wireframing"
          />
          <img
            className="hero-image it2"
            src={require("../images/inquicker-case-study/iteration2.png")}
            alt="wireframing"
          />
          <img
            className="hero-image it3"
            src={require("../images/inquicker-case-study/iteration3.png")}
            alt="wireframing"
          />
          <img
            className="hero-image it4"
            src={require("../images/inquicker-case-study/iteration4.png")}
            alt="wireframing"
          />
          <img
            className="hero-image it5"
            src={require("../images/inquicker-case-study/iteration5.png")}
            alt="wireframing"
          />
        </div> */}
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
    <section className="white">
      <div className="case-study-grid">
        <div className="g2-5">
          <h2>New 2-Step Insurance Picker</h2>
          <p>
            We added an extra click to the process, but drastically shortened
            the amount of scrolling needed.
          </p>
        </div>
        <div className="g1-9">
          <img
            className="border"
            src={require("../images/inquicker-case-study/insurance-dropdown.png")}
            alt="insurance dropdown screenshot"
          />
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
          <h2>Different Paths</h2>
          <p>
            Users don’t always take the same path. The new maps view required us
            to think about the different way locations can be searched for.
          </p>
        </div>
        <div className="g2-8">
          <div className="image-slide">
            <img
              className="border"
              src={require("../images/inquicker-case-study/gps-paths.png")}
              alt="pagination"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="case-study-grid">
        <div className="g2-5">
          <h2>Details Matter</h2>
          <p>A prototype is worth a thousand images.</p>
          <p>
            Here I wanted to get a real feel of how a custom interaction would
            work so I prototyped a simple select box that allowed the user to
            clear the selection by clicking an ‘x’ icon instead of scrolling all
            the way to the top of the list.
          </p>
          <p>
            This select box was naturally a long list so I liked this custom
            design over having the user needing to scroll.
          </p>
        </div>
        <div className="g5-8">
          <div className="image-slide">
            <img
              className="border"
              src={require("../images/inquicker-case-study/specialty-dropdown.gif")}
              alt="pagination"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="white">
      <div className="case-study-grid">
        <div className="g1-5">
          <h2>Prototyping to define state transitions</h2>
          <p>
            When it comes to designing a series of micro-interactions it becomes
            paramount to fully understand not only the many different states a
            user may be in, but also understand{" "}
            <b>how a user transitions between all those different states</b>.
            When the design gets to this point in the process, prototyping
            becomes an extremely valuable tool.
          </p>
          <p>
            This prototype illustrates how a user jumps back and forth from the
            Providers list view and the map view. Once in the full screen map
            view I show how a user can move from one Provider to the next,
            either by selecting a pin or scrolling through the cards on the
            bottom of the screen.
          </p>
        </div>
        <div className="g5-8">
          <video className="video" autoPlay controls loop muted>
            <source
              src={require("../images/inquicker-case-study/mobile-provider-map-search-short.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
    <section className="white">
      <div className="case-study-grid">
        <div className="g1-5">
          <h2>Seeing (and touching) Is Believing</h2>
          <p>
            Most of the time verbally explaining how something works or visually
            showing static mockups and flows doesn’t accurately communicate the
            intent.
          </p>
          <p>
            The first mini prototype here visually explains how we can add a bit
            of interest to the map with a pulsing GPS dot and drawing a
            suggesting route. A static mockup just wouldn’t do it justice.
          </p>
          <p>
            The second prototype not only visually shows how a header can grow
            and shrink based on scroll position, but it also gives the user
            pseudo-tactile feedback while they scroll.{" "}
            <b>
              The fun here is the transition itself, something only a prototype
              can deliver.
            </b>
          </p>
        </div>
        <div className="g5-7">
          <video className="video fixsize" autoPlay controls loop muted>
            <source
              src={require("../images/inquicker-case-study/directions.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="g7-9">
          <video className="video fixsize" autoPlay controls loop muted>
            <source
              src={require("../images/inquicker-case-study/scroll-size-header.mp4")}
              type="video/mp4"
            />
          </video>
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
      <div className="case-study-grid final-iq">
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
            className=" "
            src={require("../images/inquicker-iphone-hero.png")}
            alt="inquicker iphone screenshot"
          />
        </Tilt>
        <Tilt
          className="Tilt hero-app"
          options={{
            max: 8,
            perspective: 1000,
            reverse: true,
            speed: 2000,
            scale: 1,
          }}
        >
          <img
            className=" hero-image"
            src={require("../images/inquicker-app-hero.png")}
            alt="inquicker app screenshot"
          />
        </Tilt>
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
