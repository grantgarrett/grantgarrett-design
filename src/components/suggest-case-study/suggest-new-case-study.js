import React from "react"
import GoToInvision from "./go-to-invision"
import GoToInquicker from "./go-to-inquicker"
import GoToSprinklr from "./go-to-sprinklr"
import GoToSightbox from "./go-to-sightbox"
//Components
import LinkArrow from "../ui/LinkArrow"


const SuggestNewCaseStudy = (props) => {
  return (
    <section className="suggest-new-case-study">
      <div className="case-study-grid">
        <div className="thanks-for-reading g3-7">
          <h3>Thanks for reading!</h3>
          <p>
            If you’d like to read more about my thoughts on design or my
            approach and process check out my other case studies.
          </p>
          <LinkArrow url={"/"} label={"Portfolio Home"} theme={"default"} arrowDirectionForward={false} />

        </div>
        <div className="g1-5">
          {(() => {
            switch (props.linkone) {
              case "sprinklr": return <GoToSprinklr />;
              case "sightbox": return <GoToSightbox />;
              case "inquicker": return <GoToInquicker />;
              case "invision": return <GoToInvision />;
              default: return <GoToSprinklr />;
            }
          })()}
        </div>
        <div className="g5-9">
          {(() => {
            switch (props.linktwo) {
              case "sprinklr": return <GoToSprinklr />;
              case "sightbox": return <GoToSightbox />;
              case "inquicker": return <GoToInquicker />;
              case "invision": return <GoToInvision />;
              default: return <GoToSprinklr />;
            }
          })()}
        </div>
      </div>

    </section>
  );
}

export default SuggestNewCaseStudy;
