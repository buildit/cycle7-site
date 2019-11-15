import React from "react";
import PatrickBower from "../images/patrickbower.jpg";
import DanielBull from "../images/danielbull.jpg";

const Quote = () => (
  <section>
    <div className="grav-o-full-bleed__content">
      <div className="quote">
        <img src={PatrickBower} alt="Patrick Bower" className="quote__person" />
        <div className="quote__speech">
          <p className="grav-u-font-size-plus-3">
            Using Cycle 7 we can measure the desirability, viability and
            feasibility for ideas without any of the usual ambiguity.
          </p>
          <p className="quote__name">Patrick Bower, Cycle 7 practitioner.</p>
        </div>
      </div>
      <div className="quote">
        <img src={DanielBull} alt="Daniel Bull" className="quote__person" />
        <div className="quote__speech">
          <p className="grav-u-font-size-plus-3">
            Cycle 7 allows us to focus on what really matters to users and iterate quickly, based
            on their feedback.
          </p>
          <p className="quote__name">Daniel Bull, Cycle 7 practitioner.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Quote;
