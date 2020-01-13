import React from "react";
import Cycle7LogoSvg from "./cycle7LogoSvg";

const Hero = (props) => (
  <section className={`grav-c-hero ${props.isHome ? "grav-c-hero--is-home" : ""}`}>
    <div className="hero-dots"></div>
    <div className="grav-c-hero__container">
      <div id="hero-logo-lockup">
        <Cycle7LogoSvg />
      </div>
      <h1 className="hero-heading">Cycle 7</h1>
      <p className="grav-u-font-size-plus-2">
        A seven week lean understanding and rapid prototyping process
      </p>
    </div>
  </section>
);

export default Hero;
