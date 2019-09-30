import React from "react";
import Tick from "../images/tick.svg";

const Conditions = () => (
  <section className="grav-o-full-bleed__content grav-u-pt-xxl">
    <h3 className="grav-u-text-centered grav-u-font-size-plus-4">
      Better Together
    </h3>
    <div className="grav-u-text-centered">
      <p className="lead-text lead-text-large grav-u-pb-xl">
        Embedded as a small, agile, and cross skilled team we will understand,
        define, and create faster. This integration with the business better
        informs our strategy and benefits from existing stakeholder
        relationships.
      </p>
    </div>
    <div className="row">
      <div className="col text-right">
        <h4 className="grav-u-font-size-minus-2 condition-members">
          Members from Client
        </h4>
        <ul className="no-bullets">
          <li>Product Owner</li>
          <li>Business Analyst</li>
        </ul>
      </div>
      <div className="col condition-border-left">
        <h4 className="grav-u-font-size-minus-2 condition-members">
          Members from Buildit
        </h4>
        <ul className="no-bullets">
          <li>Creative Technologist x2</li>
          <li>UX Designer</li>
          <li>Experience Designer</li>
          <li>Delivery Lead</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Conditions;
