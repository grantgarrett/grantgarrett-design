import React from "react"
import GoToInvision from "./go-to-invision"
import GoToInquicker from "./go-to-inquicker"
import GoToSprinklr from "./go-to-sprinklr"
import GoToSightbox from "./go-to-sightbox"


const SuggestNewCaseStudy = () => {
  return (
    <section className="suggest-new-case-study">
      <div className="case-study-grid">
        <div className="g1-5">
          <GoToSightbox />
        </div>
        <div className="g5-9">
          <GoToSprinklr />
        </div>

      </div>
      <div className="case-study-grid">
        <div className="g1-5">
          <GoToInvision />
        </div>
        <div className="g5-9">
          <GoToInquicker />
        </div>
      </div>
    </section>
  );
}

export default SuggestNewCaseStudy;
