import React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Tilt from 'react-parallax-tilt';
import LinkArrow from "../link-arrow";

function GoToInvision() {
  return (
    <div className="go-to-container go-to-invision">
      <div className="content">
        <StaticImage
          className="logo"
          src="../../images/invision-logo.png"
          alt="invision logo"
          placeholder="tracedSVG"
        />
        <h2>Digital Product Design Platform</h2>
        <p>
          <b>Case Study:</b> Redesign the core application to satisfy the
          growing needs of our customers.
        </p>
        <LinkArrow url={"/invision-case-study/"} title={"InVision Case Study"} brand={"invision"} />
      </div>
      <div className="hero">
        <Tilt glareEnable={true} tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02} glareMaxOpacity={0.2} transitionSpeed={1200} tiltReverse="true" glarePosition="all" glareBorderRadius="8px" >
          <StaticImage
            className="hero-image-container"
            imgClassName="hero-image"
            src="../../images/invision-case-study/inspect-mode.png"
            alt="invision inspect mode"
          />
        </Tilt>
      </div>
    </div>
  );
}

export default GoToInvision;


    // <div className="back-home dark g1-4">
    //     <h3>Thanks for reading!</h3>
    //     <p>
    //         If you’d like to read more about my thoughts on design or my
    //         approach and process check out my other case studies.
    //     </p>
    //     <h4>Please Feel Free to Say Hi</h4>
    //     <p>
    //         Twitter:{" "}
    //         <a href="https://twitter.com/grantgarrett">@grantgarrett</a>
    //         <br />
    //         Email:{" "}
    //         <a href="mailto:grant@grantgarrett.com?subject=Hi from your design site">
    //             grant@grantgarrett.com
    //         </a>
    //     </p>
    //     <Link to="/" className="home-link">
    //         <IconLeftArrow />
    //         Portfolio Home
    //     </Link>
    // </div>