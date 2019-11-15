import React from "react";
import PatrickBower from "../images/patrickbower.jpg";

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
    </div>
  </section>
);

export default Quote;
