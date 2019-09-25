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
      <div className="c7-phase grav-u-pb-xl">
        <div className="phase-heading">
          <div className="grav-o-full-bleed__content">
            <div className="row">
              <div className="col hide-sm">
                <div className="phase-icon-wrap">
                  <svg className="phase-icon phase-icon-idea" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.52 157.77">
                    <g>
                      <path d="M49 6.55a42.75 42.75 0 0 1 34.4 68.51 56 56 0 0 0-10.68 33.2 3.29 3.29 0 0 1-3.27 3.31l-39.45.27a3.26 3.26 0 0 1-3.3-3.26 56 56 0 0 0-11.14-33.06A42.73 42.73 0 0 1 49 6.55zm0 9.87a3.11 3.11 0 0 0-3.26 3.31A3.17 3.17 0 0 0 49.09 23a26.24 26.24 0 0 1 26.47 26.1 3.29 3.29 0 1 0 6.57-.1A32.91 32.91 0 0 0 49 16.42zM48.92 0A49.26 49.26 0 0 0 9.48 78.35a49.46 49.46 0 0 1 10.63 30.28 9.85 9.85 0 0 0 9.89 9.78l39.43-.27a9.87 9.87 0 0 0 9.79-9.93 49.51 49.51 0 0 1 10.21-30.45A49.23 49.23 0 0 0 48.92 0zM30.09 125a3.29 3.29 0 1 0-.05 6.57h.09l39.43-.28a3.29 3.29 0 0 0 0-6.57h-.09zm.09 13.14a3.29 3.29 0 1 0-.05 6.57h.1l39.42-.28a3.29 3.29 0 0 0 0-6.57h-.09zm10 13.07a3.29 3.29 0 0 0-.05 6.57h.1l19.71-.13a3.29 3.29 0 0 0 0-6.58h-.1z"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="col">
                <h3 className="phase-sub-heading">
                  <span className="grav-u-font-size-minus-1">Phase One</span><br />
                  <span>Ideate</span>
                </h3>
              </div>
              <div className="col">
                <h3 className="phase-sub-heading mt0">
                  <span className="grav-u-font-size-minus-1">1x sprint</span><br />
                  <span className="block">2 weeks</span>
                </h3>
              </div>
            </div>
          </div>
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
              <p className="cardText">
                Our experienced, multi-disciplined teams allow us to ideate
                effectively and choose the right experients, which is
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
      <div className="c7-phase grav-u-pb-xl">
      <div className="phase-heading">
          <div className="grav-o-full-bleed__content">
            <div className="row">
              <div className="col hide-sm">
                <div className="phase-icon-wrap">
                <svg className="phase-icon phase-icon-experiment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.86 150.56">
                  <defs/>
                  <g>
                    <g>
                      <path d="M44.32 112.08a14.68 14.68 0 0 0-22.9 9.32A14.7 14.7 0 1 0 32.35 148a14.7 14.7 0 0 0 15.88.38 14.7 14.7 0 0 0 18.45-2.59h.95a14.64 14.64 0 0 0 7.65-2.15 14.64 14.64 0 0 0 7.65 2.15h.95a14.7 14.7 0 0 0 18.45 2.59 14.7 14.7 0 0 0 15.88-.38 14.7 14.7 0 1 0 10.93-26.64 14.68 14.68 0 0 0-22.9-9.32L88.22 80V45.22a4.68 4.68 0 0 0 2.35-4v-4.76a4.7 4.7 0 0 0-4.7-4.7H64.69a4.71 4.71 0 0 0-4.7 4.7v4.71a4.68 4.68 0 0 0 2.35 4V80zm60.37 12a10 10 0 1 1 20 0 9.87 9.87 0 0 1-.19 2 10 10 0 1 1-6.28 15.47 10 10 0 0 1-15.88.77 10 10 0 0 1-16.39-1.6 10 10 0 0 1-10.66-3.1 10 10 0 0 1-10.66 3.1 10 10 0 0 1-16.39 1.6 10 10 0 0 1-14.08 1.22 9.49 9.49 0 0 1-1.8-2 10 10 0 1 1-6.28-15.47 10 10 0 1 1 19.34 1.06 10 10 0 0 1 2.82 2.31 10 10 0 0 1 10.65-3.1 10 10 0 0 1 16.4-1.6 10 10 0 0 1 16.4 1.6 10 10 0 0 1 10.65 3.1 10 10 0 0 1 2.82-2.31 10 10 0 0 1-.47-3.03zm-7.55-18.62l5.63 10a14.5 14.5 0 0 0-2.66 6.68 14.42 14.42 0 0 0-5.42-1h-1a14.69 14.69 0 0 0-18.45-2.59 14.69 14.69 0 0 0-18.45 2.59h-1a14.33 14.33 0 0 0-5.41 1 14.63 14.63 0 0 0-2.67-6.68l6.75-12h.16a15.83 15.83 0 0 1 6.09 1 20.45 20.45 0 0 0 7.62 1.3h1.38a9.72 9.72 0 0 0 3-.38 23.36 23.36 0 0 0 3.27-.92 15.52 15.52 0 0 1 5.31-1 13.24 13.24 0 0 1 1.47.1l.06-.1a15.37 15.37 0 0 1 5.36 1 20.46 20.46 0 0 0 7.63 1.3 2.31 2.31 0 0 0 1.33-.28zm-28.92-7.83A5.89 5.89 0 0 1 80 97.56a6.14 6.14 0 0 1-.15 1.35 20.39 20.39 0 0 0-5.33 1.2 15.6 15.6 0 0 1-5.1 1 5.85 5.85 0 0 1-1.2-3.48zm-3.53-61.17h21.18v4.71H64.69zm2.36 44.77V45.87h16.46v35.36l11.18 19.9a15.77 15.77 0 0 1-4.93-1 20.34 20.34 0 0 0-5.17-1.19 11.2 11.2 0 0 0 .1-1.29 10.59 10.59 0 1 0-21.17 0 10.14 10.14 0 0 0 .45 3c-.57-.15-1.1-.33-1.65-.52a20.33 20.33 0 0 0-5.21-1.2zM128.8 16.47a8.24 8.24 0 1 0-8.23-8.24 8.23 8.23 0 0 0 8.23 8.24zm0-11.76a3.53 3.53 0 1 1-3.53 3.52 3.53 3.53 0 0 1 3.53-3.52zM8.23 16.47A8.24 8.24 0 1 0 0 8.23a8.24 8.24 0 0 0 8.23 8.24zm0-11.76a3.53 3.53 0 1 1-3.52 3.52 3.53 3.53 0 0 1 3.52-3.52zM35.29 43.52a9.41 9.41 0 1 0-9.41-9.41 9.41 9.41 0 0 0 9.41 9.41zm0-14.11a4.71 4.71 0 1 1-4.71 4.7 4.69 4.69 0 0 1 4.71-4.7z" class="cls-1"/>
                      <path d="M37.64 77.63a9.41 9.41 0 1 0 9.41-9.41 9.41 9.41 0 0 0-9.41 9.41zm9.41-4.7a4.71 4.71 0 1 1-4.7 4.7 4.71 4.71 0 0 1 4.7-4.7zM11.16 50.84L9.8 53.33l-2.48 1.36a4.7 4.7 0 0 0 0 8.25L9.8 64.3l1.36 2.49a4.71 4.71 0 0 0 8.26 0l1.36-2.49 2.48-1.36a4.71 4.71 0 0 0 1.88-6.38 4.76 4.76 0 0 0-1.88-1.87l-2.48-1.36-1.36-2.49a4.71 4.71 0 0 0-8.26 0zm9.85 8l-3.7 2-2 3.7-2-3.7-3.69-2 3.69-2 2-3.69 2 3.69zM115.44 43.52a9.41 9.41 0 1 0-9.44-9.41 9.41 9.41 0 0 0 9.44 9.41zm0-14.11a4.71 4.71 0 1 1-4.71 4.7 4.69 4.69 0 0 1 4.71-4.7zM94.27 77.63a9.41 9.41 0 1 0 9.41-9.41 9.41 9.41 0 0 0-9.41 9.41zm9.41-4.7a4.71 4.71 0 1 1-4.68 4.7 4.7 4.7 0 0 1 4.68-4.7zM131.31 50.84L130 53.33l-2.49 1.36a4.7 4.7 0 0 0 0 8.25L130 64.3l1.36 2.49a4.7 4.7 0 0 0 8.25 0l1.36-2.49 2.49-1.36a4.7 4.7 0 0 0 0-8.25l-2.49-1.36-1.36-2.49a4.7 4.7 0 0 0-8.25 0zm9.84 8l-3.69 2-2 3.7-2-3.7-3.69-2 3.69-2 2-3.69 2 3.69zM49.4 14.12a2.36 2.36 0 0 0 2.36-2.36 7.17 7.17 0 0 1 7.27-7 7.36 7.36 0 0 1 5.93 3 2.44 2.44 0 0 0 3.43.37 2.53 2.53 0 0 0 .36-.37 7.4 7.4 0 0 1 12.31.69 2.34 2.34 0 0 0 4.09 0 7.3 7.3 0 0 1 6.38-3.66 7.18 7.18 0 0 1 7.28 7.05 2.35 2.35 0 1 0 4.7 0A11.89 11.89 0 0 0 91.53 0a12.16 12.16 0 0 0-8.43 3.4 12.12 12.12 0 0 0-16.25-.53A12.08 12.08 0 0 0 59 0a11.89 11.89 0 0 0-12 11.76 2.36 2.36 0 0 0 2.4 2.36z" class="cls-1"/>
                      <path d="M67.64 27.05A2.35 2.35 0 0 0 70 24.7a2.39 2.39 0 0 0-.25-1.05L65 14.24a2.35 2.35 0 1 0-4.2 2.1l4.7 9.41a2.34 2.34 0 0 0 2.14 1.3zM82.92 27.05a2.33 2.33 0 0 0 2.08-1.3l4.71-9.41a2.35 2.35 0 0 0-4.21-2.11l-4.71 9.41a2.34 2.34 0 0 0 2.1 3.4zM77.63 18.82v-7.06a2.35 2.35 0 1 0-4.7 0v7.06a2.35 2.35 0 1 0 4.7 0z" class="cls-1"/>
                    </g>
                  </g>
                </svg>
                </div>
              </div>
              <div className="col">
                <h3 className="phase-sub-heading">
                  <span className="grav-u-font-size-minus-1">Phase Two</span><br />
                  <span>Experiment</span>
                </h3>
              </div>
              <div className="col">
                <h3 className="phase-sub-heading mt0">
                  <span className="grav-u-font-size-minus-1">2x sprints</span><br />
                  <span className="block">4 weeks</span>
                </h3>
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
              <p className="cardText">
                Experiments are essentially a meaningful experience built for
                users in order to test and learn. This is usually a prototype
                containing a narrow slice of the overall proposition.
              </p>
              <p className="cardText">
                We replace lengthy, speculative research by instead giving users
                a realistic view of what the proposition actually means to them.
              </p>
            </ContentCard>
            <div className="c7-graphic">
              <img src={TempBuildTestLearn} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="c7-phase grav-u-pb-xl">
      <div className="phase-heading">
          <div className="grav-o-full-bleed__content">
            <div className="row">
              <div className="col hide-sm">
                <div className="phase-icon-wrap">
                <svg className="phase-icon phase-icon-analyse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.31 163.89">
                  <defs/>
                  <g>
                    <g>
                      <path d="M98.7 56.8H21.37a1.7 1.7 0 0 1-1.21-.51L10.38 46a1.68 1.68 0 1 1 2.44-2.31l9.28 9.72h75V14.58a1.68 1.68 0 1 1 3.35 0v40.54a1.73 1.73 0 0 1-1.75 1.68zM5 39.67a1.66 1.66 0 0 1-1.2-.5L.46 35.69a1.68 1.68 0 0 1 2.44-2.32l3.35 3.49a1.69 1.69 0 0 1-.06 2.38 2 2 0 0 1-1.19.43zm5.83-12.8a1.71 1.71 0 0 1-1.17-.47 1.65 1.65 0 0 1 0-2.37L20.19 13.4a1.63 1.63 0 0 1 1.21-.5h65.11a1.68 1.68 0 0 1 0 3.35H22L12 26.37a1.56 1.56 0 0 1-1.16.5zM79.71 106.93H2.37a1.66 1.66 0 0 1-1.68-1.68V91.88a1.66 1.66 0 0 1 1.68-1.67A1.65 1.65 0 0 1 4 91.88v11.7h75l18.26-18.27-13.53-14.17a1.68 1.68 0 1 1 2.44-2.31l14.68 15.38a1.68 1.68 0 0 1 0 2.34l-19.97 19.91a1.68 1.68 0 0 1-1.17.47zM2.37 83.54a1.66 1.66 0 0 1-1.68-1.68V64.71A1.66 1.66 0 0 1 2.37 63h77.57a1.68 1.68 0 1 1 0 3.35H4v15.51a1.66 1.66 0 0 1-1.63 1.68z"/>
                      <path d="M59.06 163.89h-4.29a1.68 1.68 0 0 1 0-3.35h2.62v-6.37a1.68 1.68 0 0 1 3.35 0v8.05a1.66 1.66 0 0 1-1.68 1.67zm-17.09 0a1.66 1.66 0 0 1-1.67-1.67v-57a1.65 1.65 0 0 1 1.7-1.64h17.1a1.65 1.65 0 0 1 1.67 1.67v39.54a1.68 1.68 0 1 1-3.35 0v-37.86H43.65v55.29a1.68 1.68 0 0 1-1.65 1.67zm17.09-97.51H41.94a1.65 1.65 0 0 1-1.67-1.67v-9.59a1.65 1.65 0 0 1 1.67-1.67h17.12a1.66 1.66 0 0 1 1.68 1.67v9.59a1.66 1.66 0 0 1-1.68 1.67zM43.65 63h13.77v-6.2H43.65zm15.41-46.75H41.94a1.65 1.65 0 0 1-1.67-1.67v-4.23A10.38 10.38 0 0 1 50.62 0a9.89 9.89 0 0 1 7.27 3.05 10.46 10.46 0 0 1 2.85 7.3v4.23a1.66 1.66 0 0 1-1.68 1.67zM43.65 12.9h13.77v-2.55a7.19 7.19 0 0 0-1.91-5 6.56 6.56 0 0 0-4.86-2 7 7 0 0 0-7 7z"/>
                    </g>
                  </g>
                </svg>
                </div>
              </div>
              <div className="col">
                <h3 className="phase-sub-heading">
                  <span className="grav-u-font-size-minus-1">Phase Three</span><br />
                  <span>Analyse</span>
                </h3>
              </div>
              <div className="col">
                <h3 className="phase-sub-heading mt0">
                  <span className="grav-u-font-size-minus-1">1x sprint</span><br />
                  <span className="block">1 week</span>
                </h3>
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
