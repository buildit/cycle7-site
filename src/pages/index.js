import React from "react";
import Layout from "../components/layout";
import Conditions from "../components/conditions";
import Hero from "../components/hero";
import Phases from "../components/phases";
import Outcomes from "../components/outcomes";
import Contact from "../components/contact";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Outcomes />  
    <Phases />
    <Conditions />
    <Contact />
  </Layout>
);

export default IndexPage;
