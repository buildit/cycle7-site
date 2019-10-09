import React from "react";
import Tick from "../images/tick.svg"

const Outcomes = () => (
   <section className="grav-o-full-bleed__content grav-u-pt-xxl grav-u-pb-xxl" data-gtm-track="outcomes">
    <p className="lead-text">
      Standalone, or within a programme, Cycle 7 de-risks any given proposition and exposes the answers stakeholders need to know. Fast.
    </p>
    <ul className="row outcome-list">
      <li className="col-md-4 outcome-list-item">
        <div class="media">
          <img src={Tick} alt="" className="outcome-tick-icon"/>
          <div>
            <p>Pinpoint and answer the unknown, important questions.</p>
          </div>
        </div>
      </li>
      <li className="col-md-4 outcome-list-item">
        <div class="media">
          <img src={Tick} alt="" className="outcome-tick-icon"/>
          <div>
            <p>Run lean impactful experiments tested directly with users.</p>
          </div>
        </div>
      </li>
      <li className="col-md-4 outcome-list-item">
        <div class="media">
          <img src={Tick} alt="" className="outcome-tick-icon"/>
          <div>
            <p>Build realistic propositions from data driven insights.</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
);

export default Outcomes;


