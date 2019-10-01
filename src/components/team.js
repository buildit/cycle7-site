import React from "react";

const Team = () => (
  <section className="grav-o-full-bleed__content grav-u-pt-xxl">
    <h3 className="grav-u-text-centered grav-u-font-size-plus-4">
      Better Together
    </h3>
    <div className="grav-u-text-centered">
      <p className="lead-text lead-text-large grav-u-pb-xl">
        Embedded as a small, agile, and cross-skilled team we will understand,
        define, and create faster. This integration with the business better
        informs our strategy and benefits from existing stakeholder
        relationships.
      </p>
    </div>
    <div className="row">
      <div className="col team-text-right">
        <h4 className="grav-u-font-size-minus-2 team-members">
          Your commitment
        </h4>
        <ul className="team-no-bullets">
          <li>Product Owner</li>
          <li>Business Analyst</li>
        </ul>
      </div>
      <div className="col team-border-left">
        <h4 className="grav-u-font-size-minus-2 team-members">
          Our commitment
        </h4>
        <ul className="team-no-bullets">
          <li>Creative Technologist x2</li>
          <li>UX Designer</li>
          <li>Experience Designer</li>
          <li>Delivery Lead</li>
        </ul>
      </div>
    </div>
    <div className="row grav-u-pt-xl">
      <div className="col-md-5 offset-md-1 team-left-col">
        <p>
          You commit people and resources in a shared location to eliminate
          needless gaps and dependencies.
        </p>
      </div>
      <div className="col-md-5 team-right-col">
        <p>
          We help shape the proposal so you gain better results for steering
          your business decision making.
        </p>
      </div>
    </div>
  </section>
);

export default Team;
