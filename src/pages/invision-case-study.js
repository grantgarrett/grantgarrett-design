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
            <b>Task:</b> Design a mode that helps close the gap between the end
            of the design process and the beginning of development.
          </p>
        </div>
        <Tilt
          className="Tilt g4-9"
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
            src={require("../images/invision-case-study/inspect-mode.png")}
            alt="invision inspect mode"
          />
        </Tilt>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="column1 g2-5">
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
        <div className="column2 g5-8">
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
    <section className="white">
      <div className="case-study-grid">
        <div className="column1 g2-5">
          <h2>What & How - Taking a Step Back</h2>
          <p>
            Before diving into designing a new mode I decided to take stock of
            what we already had and really question if a new mode was completely
            necessary. There is a possibility that we could expand upon what we
            already had.
          </p>
        </div>
        <div className="column2 g5-9">
          <h4>Do we really need another mode?</h4>
          <p>
            There are currently four modes: Preview, Build, Comment, and
            History. <b>Could these new features live within Comment mode?</b>{" "}
            Comment mode currently has comments, Dev Notes (a comment sub-type),
            and sketches/annotations. It feels like there would be a lot of
            potential overlap of features if we created a new mode. If designers
            and developers are already inside Comment mode, maybe we can keep
            all their conversations and interactions there.
          </p>

          <h4>Cons on redesigning Comment mode</h4>
          <p>
            New developer tools would have to be introduced into this mode so
            there might be real concerns with screen real-estate and
            overcrowding. Redesigning a current mode alongside adding new
            features is adding a significant amount of scope to the project as
            well.
          </p>

          <h4>Benefits on redesigning Comment mode</h4>
          <p>
            Sketches and annotations could use a redesign. They are
            underutilized and viewed inside of an awkward modal view which pulls
            them out of context with conversations.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div className="case-study-grid">
        <div className="column1 g2-5">
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
        <div className="column2 g5-8">
          <div className="image-slide">
            <img
              className="border"
              src={require("../images/invision-case-study/modes-explore.png")}
              alt="explore modes"
            />
            {/* *Actual documents used during design process */}
          </div>
        </div>
      </div>
    </section>
    <section className="white">
      <div className="case-study-grid">
        <div className="column1 g3-7">
          <h2>Audit current state of sketches and annotations</h2>
          <p>
            Here I am auditing the current state of the sketch and annotation
            tool. How can we improve this feature and better utilize it with the
            new document inspection tools?
          </p>
        </div>
        <div className="column2 g2-8">
          <div className="image-slide">
            <img
              className=""
              src={require("../images/invision-case-study/sketches-audit.png")}
              alt="explore modes"
            />
            {/* *Actual documents used during design process */}
          </div>
        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="column1 g3-7">
          <h2>How would a redesigned Comment Mode flow?</h2>

          <h4>
            Now, how do we bring redesigned sketches and annotations into
            context with conversations?{" "}
          </h4>
          <p>
            Let’s see how how sketches and annotations are viewed within context
            of a specific comment thread. Viewing all sketches and annotations
            of a screen at once would be incomprehensible, so we can limit the
            scope of them. We can also list comment threads on the left side of
            the screen for easier navigation (instead of relying on just the
            comment dots all across the screen).
          </p>

          <h4>Where will the new document inspection tools fit? </h4>
          <p>
            Inspection tools could be accessed from a toggle in the top right of
            the screen. This allows a developer to use them whenever they need
            and in whatever context. We could have a panel for the inspection
            tools as well as one for the layers of the design document. This
            allows for the new tools to be the least interruptive within the
            mode. They can be there when you need them, and be hidden if not.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div className="case-study-grid">
        <div className="column1 g2-4">
          <h2>Storyboarding</h2>
          <p>
            These series of storyboards are early versions of tying comments
            together with their associated sketches and annotations. They are
            shown in context with the conversation instead of separate modal
            window.
          </p>

          <p>
            The storyboards are also displaying the first passes at how an
            Inspect and Layers panel could work within the mode.
          </p>
        </div>
        <div className="column2 g4-9">
          <div className="image-slide">
            <img
              className="border"
              src={require("../images/invision-case-study/storyboarding.png")}
              alt="storyboarding"
            />
            {/* *Actual documents used during design process */}
          </div>
        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="column1 g3-8">
          <h2 className="cancel-that">Redesigning Comment Mode</h2>
          <h2>A Stand Alone Inspect Mode</h2>
          <h4>Why redesigning Comment Mode wasn’t the move.</h4>
          <p>
            The team didn’t have enough time or resources to handle the extra
            work needed to redesign Comment Mode in addition to the new
            features. The decision was to leave comment mode alone and go
            forward with creating an entirely new mode.
          </p>
          <h4>We did, however, learn a few things from this exploration</h4>
          <p>
            We know we liked the Inspect and Layers panel to be their own unique
            elements. We also liked viewing the list of conversations in their
            own panel, instead of the current system - which was clicking on
            dots on the screen. Another decision that was made was that we were
            only going to display Dev Notes, not every conversation type.
          </p>
          <h4>How was this new mode going to be laid out?</h4>
          <p>Let’s explore a few options…</p>
        </div>
      </div>
    </section>
    <section>
      <div className="case-study-grid">
        <div className="column1 g2-6">
          <h2>Thumbnail Wireframing Layout Options</h2>
          <p>
            How do we want this new mode to be laid out? We knew a few panels
            that we wanted to include and a general idea of the tools we wanted
            to include. It was still early and the mode itself was still being
            fleshed out.
          </p>
          <p>
            Here are a few quick wireframes I did to get a feel for how we
            wanted the new mode to be structured.
          </p>
        </div>
        <div className="column2 g1-9">
          <div className="image-slide">
            <img
              className="border"
              src={require("../images/invision-case-study/wireframing.png")}
              alt="wireframing"
            />
            {/* *Actual documents used during design process */}
          </div>
        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="column1 g2-7">
          <h2>Inspect Toolset</h2>
          <h4>Inspect tab?</h4>
          <p>
            The Inspect tab is where we are going to place the most needed tools
            a developer will need. Things such as CSS code, colors, layer
            properties, and asset export options.
          </p>
          <h4>Toolbar?</h4>
          <p>
            The floating toolbar would be tools that the developer would use to
            interact with the document. These include zoom, panning, text tool,
            drawing/annotating, and a select tool.
          </p>
          <h4>Select tool would be the default and most used toolbar tool</h4>
          <p>
            By default the Select tool would be chosen. Selecting a layer
            updates the contextual Inspect tab which will then display the
            selection’s CSS properties, dimensions, coordinates, etc. Selecting
            a layer gives the user the ability to hover over a different layer
            and get distance measurements. If a designer wanted to highlight a
            specific distance or measurement for a developer, they could “pin”
            that to the artboard. Pinned distances or dimensions would remain on
            screen as callouts for developers.
          </p>
        </div>
      </div>
    </section>
    <section className="white">
      <div className="case-study-grid">
        <div className="column1 g2-5">
          <h2>Inspection Tools</h2>
          <p>
            These series of screens are simple wireframes designed to try and
            understand the user interactions with the tools and how the tools
            themselves interact with the design.
          </p>
        </div>
        <div className="column2 g2-8">
          <div className="image-slide">
            <img
              className=""
              src={require("../images/invision-case-study/tools-storyboarding.png")}
              alt="inspectin tools"
            />
            {/* *Actual documents used during design process */}
          </div>
        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="column1 g2-7">
          <h2>Designs</h2>
          <h4>Iteration, Iteration, Iteration</h4>
          <p>
            With a strong idea of the elements and tools we needed for the
            design and how those tools would work, it was time to start more
            polished designs and prototypes.
          </p>
          <p>
            Each design was thoroughly prototyped, tested, and discussed with
            the team. There were also features being designed concurrently in
            other part of the InVision app that would affect my designs. Keeping
            shared elements consistent was top priority (layers tab, document
            zooming, document header, rulers).
          </p>
        </div>
        <div className="image-slide g2-8">
          <img
            className="iteration"
            src={require("../images/invision-case-study/iteration1.png")}
            alt="inspect iteration"
          />
          <img
            className="iteration"
            src={require("../images/invision-case-study/iteration2.png")}
            alt="inspect iteration"
          />
          <img
            className="iteration"
            src={require("../images/invision-case-study/iteration3.png")}
            alt="inspect iteration"
          />
          <img
            className="iteration"
            src={require("../images/invision-case-study/iteration4.png")}
            alt="inspect iteration"
          />
        </div>
      </div>
    </section>
    <section className="dark">
      <div className="case-study-grid">
        <div className="column1 g3-7">
          <h2>Final Design</h2>
          <h4>It all comes together</h4>
          <p>
            The previous screens are just an overall glimpse into the amount of
            testing, prototyping, and iteration that went into designing the new
            Inspect Mode. Nearly every day for a couple months I sat down with
            the team and solicited feedback, worked through interactions, and
            presented new flows and ideas. As mentioned earlier, there were
            separate concurrent designs happening elsewhere in the app, so
            keeping these continually evolving designs in sync was a challenge
            in itself.
          </p>
          <p>
            Through the iterations you can see work on where the toolbars were
            to be kept. We also added a contextual layer popup when you selected
            a layer, document rulers, and guides.
          </p>
          <p>
            The addition of the contextual layer popup freed up a lot of real
            estate in the Inspect panel. It was enough room that we were then
            able to consolidate the Inspect panel and the Dev Notes panel.
            Instead of two tabs they now became one scrolling column.
          </p>
        </div>
        <div className="image-slide g1-9 final-image-iv">
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
              className="hero-image"
              src={require("../images/invision-case-study/inspect-mode.png")}
              alt="invision inspect mode"
            />
          </Tilt>
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
        <div className="go-to-inquicker g4-9">
          <div className="iq-copy">
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
            <Link to="/inquicker-case-study/" className="case-study-link">
              InQuicker Case Study
              <IconRightArrow fill="#ee3124" />
            </Link>
          </div>
          <div className="hero">
            <img
              className=""
              src={require("../images/inquicker-hero.png")}
              alt="inquicker app"
            />
          </div>
        </div>
      </div>
      <div className="shim2" />
    </section>
  </Layout>
)

export default InvisionCS
