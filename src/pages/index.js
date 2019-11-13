import React from "react";
import Layout from "../components/layout";
import Team from "../components/team";
import Hero from "../components/hero";
import Phases from "../components/phases";
import Outcomes from "../components/outcomes";
import Strategy from "../components/strategy";
import Contact from "../components/contact";
import Quote from "../components/quote";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Outcomes />
    <Strategy />
    <Team />
    <Quote />
    <Phases />
    <Contact />
  </Layout>
);

export default IndexPage;
