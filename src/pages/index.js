import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Tilt from 'react-parallax-tilt';
//Icons
import IconDownArrow from "../images/icons/arrow-down"
//Images
import sprinklr_logo from "../images/sprinklr-logo.svg"
//Components
import LinkArrowOutline from "../components/ui/LinkArrowOutline";

const IndexPage = () => (
  <Layout pageId="home">
    <Seo
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
          Projects & Contributions
          <IconDownArrow className="arrow" fill="#C7D5E7" />
        </p>
      </div>
    </section>
    {/* <section className="sprinklr">
      <div className="section-wrapper">
        <div className="section-content">
          <img src={sprinklr_logo} className="logo" alt="sprinklr logo" />
          <h2>Unified Customer Experience Platform</h2>
          <p>
            <b>Project:</b> Creating design guidelines and new patterns and components while updating, maintaining, and governing our design system called Hyperspace.
          </p>
          <LinkArrowOutline url="/sprinklr-case-study/" label="Sprinklr Design System" theme={"sprinklr"} />
        </div>
        <Tilt glareEnable={true} tiltMaxAngleX={1} tiltMaxAngleY={2} scale={1.01} glareMaxOpacity={0} transitionSpeed={900} tiltReverse="true" glarePosition="all" >
          <StaticImage
            src={"../images/sprinklr-hero.png"}
            className="hero-image"
            imgClassName="hero-image"
            alt="sprinklr screenshots" quality="100"
            placeholder="none"
            loading="eager"
          />
        </Tilt>
      </div>
    </section> */}
    <section className="sightbox">
      <div className="section-wrapper">
        <div className="section-content">
          <StaticImage
            className="logo"
            src="../images/sightbox-logo.png"
            alt="sightbox logo"
            placeholder="tracedSVG"
            loading="eager"
          />
          <h2>Simplifying Vision Care for Contact Lens Wearers</h2>
          <p>
            <b>Case Study:</b> Design a process to automate the renewal of memberships.
          </p>
          <LinkArrowOutline url="/sightbox-case-study/" label="Sightbox Case Study" theme={"sightbox"} />
        </div>
        <Tilt glareEnable={true} tiltMaxAngleX={1} tiltMaxAngleY={1} scale={1.01} glareMaxOpacity={0.2} transitionSpeed={900} tiltReverse="true" glarePosition="all" glareBorderRadius="5px" >
          <StaticImage
            src={("../images/sightbox-member-profile.png")}
            className="hero-image"
            imgClassName="hero-image"
            alt="sightbox app screenshot"
            quality="100"
            placeholder="blurred"
          />
        </Tilt>
      </div>
    </section>
    <section className="inquicker">
      <div className="section-wrapper">
        <div className="section-content">
          <StaticImage
            className="logo"
            // imgClassName="logo"
            src={"../images/inquicker-logo.png"}
            alt="inquicker logo"
            placeholder="tracedSVG"
          />
          <h2>Reinventing the Patient Experience</h2>
          <p>
            <b>Case Study:</b> Redesign the core application to satisfy the
            growing needs of our customers.
          </p>
          <LinkArrowOutline url="/inquicker-case-study/" label="InQuicker Case Study" theme={"inquicker"} />
        </div>
        <div className="inquicker-hero-group">
          <Tilt className="hero-iphone" glareEnable={true} tiltMaxAngleX={2} tiltMaxAngleY={6} scale={1.01} glareMaxOpacity={0.2} transitionSpeed={900} tiltReverse="true" glarePosition="all" glareBorderRadius="5px" >
            <StaticImage
              src="../images/inquicker-iphone-hero.png"
              className=""
              alt="inquicker iphone screenshot"
              placeholder="tracedSVG"
            />
          </Tilt>
          <Tilt className="hero-app" glareEnable={true} tiltMaxAngleX={1} tiltMaxAngleY={2} scale={1.01} glareMaxOpacity={0.2} transitionSpeed={900} tiltReverse="true" glarePosition="all" glareBorderRadius="8px" >
            <StaticImage
              src="../images/inquicker-app-hero.png"
              className="hero-image hero-app"
              imgClassName="hero-image"
              alt="inquicker app screenshot"
              quality="100"
              placeholder="blurred"
            />
          </Tilt>
        </div>
      </div>
    </section>
    <section className="invision">
      <div className="section-wrapper">
        <div className="section-content">
          <StaticImage
            className="logo"
            src={("../images/invision-logo.png")}
            alt="invision logo"
            placeholder="tracedSVG"
          />
          <h2>Digital Product Design Platform</h2>
          <p>
            <b>Case Study:</b> Design a mode that helps close the gap between
            the end of the design process and the beginning of development.
          </p>
          <LinkArrowOutline url="/invision-case-study/" label="InVision Case Study" theme={"invision"} />
        </div>
        <Tilt glareEnable={true} tiltMaxAngleX={1} tiltMaxAngleY={1} scale={1.02} glareMaxOpacity={0.1} transitionSpeed={900} tiltReverse="true" glarePosition="all" glareBorderRadius="8px" >
          <StaticImage
            src="../images/invision-case-study/inspect-mode.png"
            width={718}
            // className="hero-image"
            imgClassName="hero-image"
            alt="invision inspect mode"
            quality="100"
          />
        </Tilt>
      </div>
    </section>
  </Layout>
)

export default IndexPage
