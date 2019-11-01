import React, { Component } from "react";
import Layout from "../components/layout";
import Team from "../components/team";
import Hero from "../components/hero";
import Phases from "../components/phases";
import Outcomes from "../components/outcomes";
import Strategy from "../components/strategy";
import Contact from "../components/contact";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class IndexPage extends Component {
  componentDidMount() {
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Layout>
        <Hero />
        <Element name="outcomes" className="element">
          <Outcomes />
        </Element>
        <Element name="strategy" className="element">
          <Strategy />
        </Element>
        <Element name="team" className="element">
          <Team />
        </Element>
        <Element name="process" className="element">
          <Phases />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
      </Layout>
    );
  }
}

export default IndexPage;
