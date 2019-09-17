import React from "react";
import Tick from "../images/tick.svg"

const Conditions = () => (
  <section className="grav-o-full-bleed__content grav-u-pt-xxl grav-u-pb-xxl">
    <h3 className="grav-u-pb-xxl grav-u-text-centered">What you need for a Cycle 7 project</h3>
    <div className="container">
      <ul className="row condition-list">
        <li className="col condition-list-item">
          <div className="condition-img">
            <img src={Tick} alt="" />
          </div>
          <h4 className="grav-u-font-size-plus-1 grav-u-text-centered"> A small flexible team</h4>
          <p>A small cross skilled cell of 7 people is ideal. An agile makeup of Creative Technologist, User Experience, Experience Designer, Product Owner (client side), Business Analyst (client side) and a Delivery Lead.</p>
        </li>
        <li className="col condition-list-item">
          <div className="condition-img">
            <img src={Tick} alt="" />
          </div>
          <h4 className="grav-u-font-size-plus-1 grav-u-text-centered">A commitment</h4>
          <p>Committing people, resources and a shared location for the full 7 weeks are key due to the rapid nature of Cycle 7 projects. We aim to eliminate unnecessary gaps and dependencies before starting.</p>
        </li>
        <li className="col condition-list-item">
          <div className="condition-img">
            <img src={Tick} alt="" />
          </div>
          <h4 className="grav-u-font-size-plus-1 grav-u-text-centered">A problem statement</h4>
          <p>We can help define the right slice of the proposal to get results that can guide business decision making. Striking only at important and unknown aspects to rapidly innovate and explore technology with as little impunity as posable.</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Conditions;