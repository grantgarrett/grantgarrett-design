import React from "react"
import Tilt from 'react-parallax-tilt';
import { StaticImage } from "gatsby-plugin-image"
import LinkArrow from "../ui/LinkArrow"

const GoToInquicker = () => {
  return (

    <div className="go-to-container go-to-inquicker">
      <div className="content">
        <StaticImage
          className="logo"
          src="../../images/inquicker-logo.png"
          alt="inquicker logo"
        />
        <h2>Reinventing the Patient Experience</h2>
        <p>
          <b>Case Study:</b> Redesign the core application to satisfy the
          growing needs of our customers.
        </p>
        <LinkArrow url="/inquicker-case-study/" label="InQuicker Case Study" theme={"inquicker"} />
      </div>
      <div className="hero">
        <Tilt glareEnable={true} tiltMaxAngleX={2} tiltMaxAngleY={3} scale={1.02} glareMaxOpacity={0.0} transitionSpeed={1200} tiltReverse="true" glarePosition="all"  >
          <StaticImage
            className=""
            src="../../images/inquicker-hero.png"
            alt="inquicker app"
          />
        </Tilt>
      </div>
    </div>

  );
}

export default GoToInquicker;