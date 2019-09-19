import React from "react";
import ContentCard from "./contentCard";
import TempBuildTestLearn from "../images/temp-build-test-learn.png";
import AssumptionsMapSvg from "./assumptionsMapSvg";
import CompileFindingsSvg from "./CompileFindingsSvg";

const Phases = () => (
  <section className="grav-u-pt-xxl grav-u-pb-xxl">
    <h2 className="grav-u-text-centered">3 Phases over 7 weeks</h2>
    <div>
      <div className="c7-phase grav-u-pb-xl">
        <div className="section-heading">
          <h3 className="categoryText grav-o-full-bleed__content">
            <b>Phase 1: &nbsp;</b>week 1 &amp; 2
          </h3>
        </div>
        <div className="grav-o-full-bleed__content">
          <div className="grav-o-two-column-alt">
            <ContentCard>
              <h4 className="cardTitle grav-u-font-size-plus-6">
                Learn, understand <br />
                and define
              </h4>
              <p className="cardText">
                Discovering what is unknown and important, through assumptions
                mapping, is the key to understanding the proposition and know
                which experiments should be prioritised.
              </p>
            </ContentCard>
            <div className="c7-phase1-graphic">
              <div className="c7-phase1-graphic__map">
                <AssumptionsMapSvg />
              </div>
              <span className="c7-phase1-graphic__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 73">
                  <path d="M69.5 35.086l-19.137-.004L50.367 0H22.602v35.086L3.5 35.082 36.502 73z" />
                </svg>
              </span>
              <div>
                <span className="c7-phase1-graphic__outcome">Hypothosis 1</span>
                <span className="c7-phase1-graphic__outcome">Hypothosis 2</span>
                <span className="c7-phase1-graphic__outcome">Hypothosis 3</span>
              </div>
              <span className="c7-phase1-graphic__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 73">
                  <path d="M69.5 35.086l-19.137-.004L50.367 0H22.602v35.086L3.5 35.082 36.502 73z" />
                </svg>
              </span>
              <div>
                <span className="c7-phase1-graphic__outcome">Experiment 1</span>
                <span className="c7-phase1-graphic__outcome">Experiment 2</span>
                <span className="c7-phase1-graphic__outcome">Experiment 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="c7-phase grav-u-pb-xl">
        <div className="section-heading">
          <h3 className="categoryText grav-o-full-bleed__content">
            <b>Phase 2: &nbsp;</b>week 3&ndash;6
          </h3>
        </div>
        <div className="grav-o-full-bleed__content c7-phase-2">
          <div className="grav-o-two-column">
            <ContentCard>
              <h4 className="cardTitle grav-u-font-size-plus-6">
                Rapid prototyping
              </h4>
              <p className="cardText">
                Experiments consist of a meaningful experience for users in
                order to test and learn. This is a prototype containing a narrow
                slice of the overall proposition. Feedback between sprints leads
                to refinement of the experiments or pivoting. Hypotheses are
                evaluated until they are validated.
              </p>
            </ContentCard>
            <div className="c7-graphic">
              <img src={TempBuildTestLearn} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="c7-phase grav-u-pb-xl">
        <div className="section-heading">
          <h3 className="categoryText grav-o-full-bleed__content">
            <b>Phase 3: &nbsp;</b>week 7
          </h3>
        </div>
        <div className="grav-o-full-bleed__content">
          <div className="grav-o-two-column">
            <ContentCard>
              <h4 className="cardTitle grav-u-font-size-plus-6">
                Compile the findings
              </h4>
              <p className="cardText">
                Findings are formatted so that they can easily be communicated
                with others. This includes presenting data that was gathered
                during user testing, in order to demonstrate the hypothesis has
                been validated.
              </p>
            </ContentCard>
            <div>
              <CompileFindingsSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Phases;
