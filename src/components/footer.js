import React from "react";
import WiproDigitalLogoSvg from "./wiproDigitalLogoSvg";
import DesignitSvg from "./designitSvg";

const Footer = () => (
  <footer className="grav-c-page-footer">
    <div>
      <p>
        <span>A proud collaboration between</span>
        <span className="grav-c-page-footer__logos">
          <WiproDigitalLogoSvg />
          <span className="grav-c-page-footer__plus">+</span>
          <DesignitSvg />
        </span>
      </p>
      <p>
        © 2019 <strong>Wipro Limited</strong>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
