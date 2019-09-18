import React from "react";
import Tick from "../images/tick.svg"

const Outcomes = () => (
  <section className="grav-o-full-bleed__content grav-u-pt-xxl grav-u-pb-xxl">
    <h2 className="grav-u-text-centered">Success</h2>
    <p>
      The outcome from 7 weeks intensive effort yields not only results critical to end users but also discover costly issues before they become assumptions to success. Cycle 7 tests the big idea by exposing the questions that matter and focus on user value.  
    </p>
    <ul className="row outcome-list">
      <li className="col-md-4 outcome-list-item">
        <div class="media">
          <img src={Tick} alt="" className="outcome-tick-icon"/>
          <div>
            <p>Validated findings through hypothesis driven experiments</p>
          </div>
        </div>
      </li>
      <li className="col-md-4 outcome-list-item">
        <div class="media">
          <img src={Tick} alt="" className="outcome-tick-icon"/>
          <div>
            <p>Fastest possible prototyping, testing and learning</p>
          </div>
        </div>
      </li>
      <li className="col-md-4 outcome-list-item">
        <div class="media">
          <img src={Tick} alt="" className="outcome-tick-icon"/>
          <div>
            <p>Quick returns find insight, pivot points and uncover no-gos</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
);

export default Outcomes;


