import React from "react";
import Tick from "../images/tick.svg"

const Outcomes = () => (
   <section className="grav-o-full-bleed__content grav-u-pb-xxl" data-gtm-track="outcomes">
    <ul className="grav-o-three-column grav-u-list-unstyled">
      <li>
        <div className="media">
          <img src={Tick} alt="" className="outcome-tick-icon"/>
          <div>
            <p>Pinpoint and answer the unknown, important questions.</p>
          </div>
        </div>
      </li>
      <li>
        <div className="media">
          <img src={Tick} alt="" className="outcome-tick-icon"/>
          <div>
            <p>Run lean impactful experiments tested directly with users.</p>
          </div>
        </div>
      </li>
      <li>
        <div className="media">
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


