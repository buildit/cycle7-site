import React from "react";
import ContentCard from "./contentCard";
import TempBuildTestLearn from "../images/temp-build-test-learn.png";
import AssumptionsMapSvg from "./assumptionsMapSvg";
import CompileFindingsSvg from "./CompileFindingsSvg";

const Phases = () => (
  <section className="grav-u-pt-xxl grav-u-pb-xxl">
    <h2 className="grav-u-text-centered grav-u-font-size-plus-6">
      How our process works
    </h2>
    <div>
      <div className="c7-phase grav-u-pb-xl" data-gtm-track="phase-1">
        <div className="phase-heading">
          <div className="grav-o-full-bleed__content">
            <div className="phase-heading-content phase-heading-content--bulb">
              <div className="grav-o-two-column grav-o-two-column--small">
                <div>
                  <h3 className="phase-sub-heading">
                    <div>
                      <span className="grav-u-font-size-minus-1">
                        Phase One
                      </span>
                    </div>
                    <div>
                      <span>Discover</span>
                    </div>
                  </h3>
                </div>
                <div>
                  <h3 className="phase-sub-heading mt0">
                    <span>2 weeks</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grav-o-full-bleed__content">
          <div className="grav-o-two-column">
            <ContentCard>
              <h4 className="cardTitle grav-u-font-size-plus-6">
                Learn, understand <br />
                and define
              </h4>
              <p>
                Discovering what is unknown and important, through assumptions
                mapping, is the key to understanding the proposition and knowing
                which experiments should be prioritised.
              </p>
              <p>
                Our experienced multi-disciplined teams allow us to ideate
                effectively and choose the right experiments; which is
                fundamental to the rest of the process.
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
      <div className="c7-phase grav-u-pb-xl" data-gtm-track="phase-2">
        <div className="phase-heading">
          <div className="grav-o-full-bleed__content">
            <div className="phase-heading-content phase-heading-content--test">
              <div className="grav-o-two-column grav-o-two-column--small">
                <div className="">
                  <h3 className="phase-sub-heading">
                    <div>
                      <span className="grav-u-font-size-minus-1">
                        Phase Two
                      </span>
                    </div>
                    <div>
                      <span>Experiment</span>
                    </div>
                  </h3>
                </div>
                <div>
                  <h3 className="phase-sub-heading mt0">
                    <div>
                      <span className="grav-u-font-size-minus-1">
                        2 sprints
                      </span>
                    </div>
                    <div>
                      <span>4 weeks</span>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grav-o-full-bleed__content c7-phase-2">
          <div className="grav-o-two-column">
            <ContentCard>
              <h4 className="cardTitle grav-u-font-size-plus-6">
                Rapid prototyping
              </h4>
              <p>
                Each experiment is built for users to test; and designed to
                determine the validity of the hypothesis. This is usually a
                prototype containing prioritised features of the overall
                proposition.
              </p>
              <p>
                We replace lengthy, speculative research; instead giving users a
                realistic view of what the proposition actually means to them.
              </p>
            </ContentCard>
            <div className="c7-graphic">
              <img src={TempBuildTestLearn} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="c7-phase grav-u-pb-xl" data-gtm-track="phase-3">
        <div className="phase-heading">
          <div className="grav-o-full-bleed__content">
            <div className="phase-heading-content phase-heading-content--sign">
              <div className="grav-o-two-column grav-o-two-column--small">
                <div>
                  <h3 className="phase-sub-heading">
                    <div>
                      <span className="grav-u-font-size-minus-1">
                        Phase Three
                      </span>
                    </div>
                    <div>
                      <span>Analyse</span>
                    </div>
                  </h3>
                </div>
                <div>
                  <h3 className="phase-sub-heading mt0">
                    <span>1 weeks</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grav-o-full-bleed__content">
          <div className="grav-o-two-column">
            <ContentCard>
              <h4 className="cardTitle grav-u-font-size-plus-6">
                Compile the findings
              </h4>
              <p>
                Findings are formatted to make it easy to communicate them to
                all stakeholders. This includes presenting the data gathered
                during user testing; demonstrating the validated hypotheses.
              </p>
              <p>
                We ensure that a strategy for moving forward is made clear. This
                could include providing a well-defined backlog, technical
                decisions, and continued support for scaling the proposal. In
                the case of uncovering pivot points or no-gos, we reinforce this
                as a positive outcome by identifying further experiments or
                propositions.
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
