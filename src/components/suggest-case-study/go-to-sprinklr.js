import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import LinkArrow from "../ui/LinkArrow"
import Tilt from 'react-parallax-tilt';
//Images
import sprinklr_logo from "../../images/sprinklr-logo.svg"

const GoToSprinklr = () => {
  return (

    <div className="go-to-container go-to-sprinklr">
      <div className="content">
        <img src={sprinklr_logo} className="logo" alt="sprinklr logo" />
        <h2>Unified Customer Experience Platform</h2>
        <p>
          <b>Project:</b> Creating design guidelines and new patterns and components while updating, maintaining, and governing our design system called Hyperspace.
        </p>
        <LinkArrow url="/sprinklr-case-study/" label="Sprinklr Design System" theme={"sprinklr"} arrowDirectionForward={true} />
      </div>
      <div className="hero">
        <Tilt glareEnable={true} tiltMaxAngleX={2} tiltMaxAngleY={3} scale={1.02} glareMaxOpacity={0.0} transitionSpeed={1200} tiltReverse="true" glarePosition="all"  >
          <StaticImage
            src={"../../images/sprinklr-hero.png"}
            className="hero-image"
            imgClassName="hero-image"
            alt="sprinklr screenshots" quality="100"
          />
        </Tilt>
      </div>
    </div>

  );
}

export default GoToSprinklr;