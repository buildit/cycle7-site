import React from "react";
import Tick from "../images/tick.svg"

const Conditions = () => (
  <section className="grav-o-full-bleed__content grav-u-pt-xxl grav-u-pb-xxl">
    <h3 className="grav-u-pb-xxl grav-u-text-centered grav-u-font-size-plus-4">Winning Collaboration</h3>
      <ul className="row condition-list">
      <li className="col-md-6 condition-list-item">
          <img src={Tick} alt="" className="condition-tick-icon"/>
          <div>
            <h4 className="grav-u-font-size-plus-1">Problem Shaping</h4>
            <p>We can help define the right slice of the proposal for results that can guide business decision making. Striking only at the important and unknown to truly innovate and explore technology with as little impunity as posable.</p>
          </div>  
        </li>
        <li className="col-md-6 condition-list-item">
          <img src={Tick} alt="" className="condition-tick-icon"/>
          <div>
            <h4 className="grav-u-font-size-plus-1">Take the pledge</h4>
            <p>Committing people, resources and a shared location for the full 7 weeks are key due to the rapid nature of Cycle 7 projects. We aim to eliminate unnecessary gaps and dependencies before starting.</p>
          </div>
        </li>
      </ul>
      <div className="grav-u-pt-xxl grav-u-pb-xxl">
        <div className="grav-u-text-centered">
          <h4 className="grav-u-font-size-plus-1">Co-creation</h4>
          <p>A small cross skilled team of 7 people is ideal.</p>
        </div>
        <div className="row">
        <div className="col text-right">
            <p><strong>From the client</strong></p>
            <ul className="no-bullets">
              <li>Product Owner</li>
              <li>Business Analyst</li>
            </ul>
          </div>
          <div className="col border-left">
            <p><strong>From our side</strong></p>
            <ul className="no-bullets">
              <li>Creative Technologist x2</li>
              <li>User Experience</li>
              <li>Experience Designer</li>
              <li>Delivery Lead</li>
            </ul>
          </div>
        </div>
      </div>
      
  </section>
);

export default Conditions;