import React from "react";
import Layout from "../components/layout";
import Team from "../components/team";
import Hero from "../components/hero";
import Phases from "../components/phases";
import Outcomes from "../components/outcomes";
import Strategy from "../components/strategy";
import WhatsNext from "../components/whatsNext";
import Contact from "../components/contact";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Outcomes />
    <Strategy />
    <Team />
    <Phases />
    <WhatsNext />
    <Contact />
  </Layout>
);

export default IndexPage;
