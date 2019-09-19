import React from "react";
import Tick from "../images/tick.svg"

const Conditions = () => (
  <section className="grav-o-full-bleed__content grav-u-pt-xxl grav-u-pb-xxl">
    <h3 className="grav-u-pb-xxl grav-u-text-centered grav-u-font-size-plus-6">What you need to run a Cycle 7</h3>
      <ul className="row condition-list">
        <li className="col-md-4 condition-list-item">
          <img src={Tick} alt="" className="condition-tick-icon"/>
          <div>
            <h4 className="grav-u-font-size-plus-1">Small Flexible Team</h4>
            <p>A small cross skilled cell of 7 people is ideal. An agile makeup of Creative Technologist, User Experience, Experience Designer, Product Owner (client side), Business Analyst (client side) and a Delivery Lead.</p>
          </div>
        </li>
        <li className="col-md-4 condition-list-item">
          <img src={Tick} alt="" className="condition-tick-icon"/>
          <div>
            <h4 className="grav-u-font-size-plus-1">Commitment</h4>
            <p>Committing people, resources and a shared location for the full 7 weeks are key due to the rapid nature of Cycle 7 projects. We aim to eliminate unnecessary gaps and dependencies before starting.</p>
          </div>
        </li>
        <li className="col-md-4 condition-list-item">
          <img src={Tick} alt="" className="condition-tick-icon"/>
          <div>
            <h4 className="grav-u-font-size-plus-1">Problem Statement</h4>
            <p>We can help define the right slice of the proposal to get results that can guide business decision making. Striking only at important and unknown aspects to rapidly innovate and explore technology with as little impunity as posable.</p>
          </div>  
        </li>
      </ul>
  </section>
);

export default Conditions;