import React from "react"
import GoToInvision from "./go-to-invision"
import GoToInquicker from "./go-to-inquicker"
import GoToSprinklr from "./go-to-sprinklr"
import GoToSightbox from "./go-to-sightbox"


const SuggestNewCaseStudy = (props) => {
  return (
    <section className="suggest-new-case-study">
      <div className="case-study-grid">
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
