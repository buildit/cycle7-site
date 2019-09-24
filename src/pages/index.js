import React from "react";
import Layout from "../components/layout";
import Conditions from "../components/conditions";
import Hero from "../components/hero";
import Phases from "../components/phases";
import Outcomes from "../components/outcomes";
import Strategy from "../components/strategy";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Strategy />
    <Conditions />
    <Phases />
    <Outcomes />
  </Layout>
);

export default IndexPage;
