import React from "react";
import Tick from "../images/tick.svg"

const Outcomes = () => (
  <section className="grav-o-full-bleed__content grav-u-pt-xxl grav-u-pb-xxl">
    {/* <p>
    Cycle 7 delivers value fast by getting a digital proposition in front of users to test and learn. Every proposition is handled differently, there is no "cookie-cutter approach" - we do whatever is needed to add maximum value and deliver 3 necessary outcomes.
    </p> */}
    <p>
      Standalone or within a programme Cycle 7 de-risks any given proposition and discovers answers stakeholders need to know.
    </p>
    <ul className="row outcome-list">
      <li className="col-md-4 outcome-list-item">
        <div class="media">
          <img src={Tick} alt="" className="outcome-tick-icon"/>
          <div>
            <p>Validated hypotheses using measurable experiments.</p>
            <p>Exposing and answering unknown and import stakeholder questions</p>
          </div>
        </div>
      </li>
      <li className="col-md-4 outcome-list-item">
        <div class="media">
          <img src={Tick} alt="" className="outcome-tick-icon"/>
          <div>
            <p>Lean but impactful prototypes that are tested with users.</p>
          </div>
        </div>
      </li>
      <li className="col-md-4 outcome-list-item">
        <div class="media">
          <img src={Tick} alt="" className="outcome-tick-icon"/>
          <div>
            <p>Pivot points and no-gos are uncovered. Findings are presented.</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
);

export default Outcomes;


