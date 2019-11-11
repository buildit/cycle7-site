import React from "react";
import ContentCard from "./contentCard";
import PhaseOne from "./phaseOne";
import PhaseTwo from "./phaseTwo";
import PhaseThree from "./phaseThree";

const Phases = () => (
  <section className="grav-u-pt-xxl grav-u-pb-xxl">
    <h2 className="grav-u-text-centered grav-u-font-size-plus-6 grav-u-pb-xxl">
      How our process works
    </h2>
    <div>
      <div className="c7-phase grav-u-pb-xl" data-gtm-track="phase-1">
        <div className="phase-heading">
          <div className="grav-o-full-bleed__content">
            <div>
              <div className="phase-heading-number">1</div>
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
            <div>
              <div className="c7-phase1-graphic">
                <PhaseOne />
              </div>
            </div>
          </div>
          <ContentCard>
            <h5>Outcomes</h5>
            <ul className="grav-o-two-column">
              <li>
                Assumptions map; a living document for measuring what needs to
                be learnt
              </li>
              <li>Clearly defined and prioritised hypotheses</li>
              <li>
                Strategy for building the right experiments to test each
                hypothesis
              </li>
            </ul>
          </ContentCard>
        </div>
      </div>
      <div className="c7-phase grav-u-pb-xl" data-gtm-track="phase-2">
      <div className="phase-heading">
          <div className="grav-o-full-bleed__content">
            <div>
              <div className="phase-heading-number">2</div>
              <div className="grav-o-two-column grav-o-two-column--small">
                  <div>
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
                  <h3 className="phase-sub-heading">
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
                Experiments are built for users to test and designed to
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
              <PhaseTwo />
            </div>
          </div>
          <ContentCard>
            <h5>Outcomes</h5>
            <ul className="grav-o-two-column">
              <li>Data-lead experiments tested with real users</li>
              <li>Conclusive insight into the validity of the hypotheses</li>
              <li>
                Crucial insight into what's desirable, viable and feasible
              </li>
              <li>Typically, a prototype containing the key features</li>
            </ul>
          </ContentCard>
        </div>
      </div>
      <div className="c7-phase grav-u-pb-xl" data-gtm-track="phase-3">
        <div className="phase-heading">
        <div className="grav-o-full-bleed__content">
            <div>
              <div className="phase-heading-number">3</div>
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
                    <span>1 week</span>
                  </h3>
                </div>
              </div>
              </div>
          </div>
          {/* <div className="grav-o-full-bleed__content">
            <div>
              <div className="grav-o-two-column grav-o-two-column--small">
                <div>
                  <span className="phase-heading-number">3</span>
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
          </div> */}
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
              <PhaseThree />
            </div>
          </div>
        </div>
        <div className="grav-o-full-bleed__content">
          <ContentCard>
            <h5>Outcomes</h5>
            <ul className="grav-o-two-column">
              <li>
                A well defined backlog of activities that should happen next
              </li>
              <li>
                Clear, insightful reports detailing how risk has been reduced
              </li>
              <li>
                A strategy for moving forward or pivoting in a new direction
              </li>
            </ul>
          </ContentCard>
        </div>
      </div>
    </div>
  </section>
);

export default Phases;
