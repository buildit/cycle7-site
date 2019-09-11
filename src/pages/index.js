import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Phases from "../components/phases";
import Outcomes from "../components/outcomes";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Phases />
    <Outcomes />
  </Layout>
);

export default IndexPage;
