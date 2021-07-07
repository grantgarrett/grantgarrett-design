import React from "react"
import Tilt from 'react-parallax-tilt';
import { StaticImage } from "gatsby-plugin-image"
import LinkArrow from "../ui/LinkArrow"

const GoToSightbox = () => {
  return (

    <div className="go-to-container go-to-sightbox">
      <div className="content">
        <StaticImage
          className="logo"
          src="../../images/sightbox-logo.png"
          alt="sightbox logo"
          placeholder="tracedSVG"
          loading="eager"
        />
        <h2>Simplifying Vision Care for Contact Lens Wearers</h2>
        <p>
          <b>Case Study:</b> Design a process to automate the renewal of memberships.
        </p>
        <LinkArrow url="/sightbox-case-study/" label="Sightbox Case Study" theme={"sightbox"} arrowDirectionForward={true} />
      </div>
      <div className="hero">
        <Tilt glareEnable={true} tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02} glareMaxOpacity={0.2} transitionSpeed={1200} tiltReverse="true" glarePosition="all" glareBorderRadius="8px" >
          <StaticImage
            src={("../../images/sightbox-member-profile.png")}
            className="hero-image-container"
            imgClassName="hero-image"
            alt="sightbox app screenshot"
            quality="100"
            placeholder="blurred"
          />
        </Tilt>
      </div>
    </div>

  );
}

export default GoToSightbox;