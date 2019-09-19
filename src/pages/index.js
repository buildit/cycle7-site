import React from "react";
import Layout from "../components/layout";
import Conditions from "../components/conditions";
import Hero from "../components/hero";
import Phases from "../components/phases";
import Outcomes from "../components/outcomes";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Outcomes />
    <Phases />
    <Conditions />
    
  </Layout>
);

export default IndexPage;
