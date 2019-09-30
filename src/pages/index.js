import React from "react";
import Layout from "../components/layout";
import Conditions from "../components/conditions";
import Hero from "../components/hero";
import Phases from "../components/phases";
import Outcomes from "../components/outcomes";
import Strategy from "../components/strategy";
import Contact from "../components/contact";
import TeamShape from "../components/team-shape";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Outcomes />
    <Strategy />
    <Conditions />
    <TeamShape />
    <Phases />
    <Contact />
  </Layout>
);

export default IndexPage;
