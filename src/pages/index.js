import React, { Component } from "react";
import LayoutHome from "../components/layoutHome";
import Team from "../components/team";
import Hero from "../components/hero";
import Phases from "../components/phases";
import Outcomes from "../components/outcomes";
import Strategy from "../components/strategy";
import WhatsNext from "../components/whatsNext";
import Contact from "../components/contact";
import {
  Element
} from "react-scroll";

class IndexPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <LayoutHome>
        <Hero isHome={this.props.location.pathname === "/"} />
          <Outcomes />
          <Strategy />
        <Element name="team" className="grav-u-mt-none">
          <Team />
        </Element>
        <Element name="process" className="grav-u-mt-none">
          <Phases />
        </Element>
        <Element name="whatsnext" className="grav-u-mt-none">
          <WhatsNext />
        </Element>
        <Element name="contact" className="grav-u-mt-none">
          <Contact />
        </Element>
      </LayoutHome>
    );
  }
}

export default IndexPage;
