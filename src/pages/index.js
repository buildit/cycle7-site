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

const IndexPage = () => (
  <Layout>
    <section className="grav-c-hero">
      <img className="grav-c-hero__banner" src={Cycle7Logo} alt="" />
      <div className="grav-c-hero__container">
        <img src={Cycle7LogoText} alt="Cycle7"/>
      </div>
    </section>
    <Conditions />
    <section>
      <div className="grav-o-layout grav-o-layout--half">
        <div>
          <h4>Understand, define, make</h4>
          <p>
            Cycle 7 is a seven week process built around proven methodologies
            and expert co-creational teams.
          </p>
          <p>
            We chose 7 weeks because generally that’s enough time to define and
            run experiments and put together reports and findings.
          </p>
          <p>
            It’s not a way of delivering production code more quickly or some
            new form of Agile. It’s more like a human centred strategy for
            delivering value fast by thinking like a startup.
          </p>
        </div>
        <img src={WeeklySchedule} alt="" />
      </div>
    </section>
    <section className="c7-features grav-u-pt-xxl grav-u-pb-xxl">
      <div className="grav-o-full-bleed__content">
        <ul class="grav-c-list-inline-row">
          <li>
            <img src={StickiesOnBoard} alt="" />
            <span>Learn & understand</span>
          </li>
          <li>
            <img src={Prototyping} alt="" />
            <span>Build, test and learn</span>
          </li>
          <li>
            <img src={Measure} alt="" />
            <span>Validate the hypothesis</span>
          </li>
        </ul>
      </div>
    </section>
    <section className="grav-o-full-bleed__content grav-u-pt-xxl grav-u-pb-xxl">
      <div className="grav-o-layout grav-o-layout--half">
        <div>
          <h2>The approach will help teams:</h2>
          <ul>
            <li>Understand what is desirable, viable and feasible</li>
            <li>Reduce risk without performing lengthy research</li>
            <li>Accelerate innovation</li>
          </ul>
        </div>
        <img src={DesirableFeasibleViable} alt="" />
      </div>
    </section>
    <section className="grav-o-full-bleed__content grav-u-pt-xxl grav-u-pb-xxl">
      <div className="grav-o-layout grav-o-layout--half">
        <div>
          <h2>This is usually achieved by:</h2>
          <ul>
            <li>Assumptions mapping</li>
            <li>Validating hypotheses by running experiments</li>
            <li>Rapidly designing and building working prototypes</li>
          </ul>
        </div>
        <img src={AssumptionsMapping} alt="" />
      </div>
    </section>
    <section className="grav-o-full-bleed__content grav-u-pt-xxl grav-u-pb-xxl">
      <div className="grav-o-layout grav-o-layout--half">
        <div>
          <h2>Which should lead to:</h2>
          <ul>
            <li>Data led reports and findings</li>
            <li>A well defined backlog</li>
            <li>A strategy for scaling the proposition and moving forward</li>
          </ul>
        </div>
        <img src={ReportsAndFindings} alt="" />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
