import React from "react";
import Layout from "../components/layout";
import Cycle7Logo from "../images/cycle7-logo-alt.svg";
import Cycle7LogoText from "../images/cycle7-logo-text.svg";
import WeeklySchedule from "../images/7-week-schedule.svg";
import DesirableFeasibleViable from "../images/desirable-feasible-viable.svg";
import AssumptionsMapping from "../images/assumptions-mapping.svg";
import ReportsAndFindings from "../images/reports-and-findings.svg";
import StickiesOnBoard from "../images/stickies-on-board.svg";
import Prototyping from "../images/prototyping.svg";
import Measure from "../images/measure.svg";
import Conditions from "../components/conditions";
import Hero from "../components/hero";
import Phases from "../components/phases";
import Outcomes from "../components/outcomes";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Conditions />
    <Phases />
    <Outcomes />
  </Layout>
);

export default IndexPage;
