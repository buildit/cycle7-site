import React from "react";
import ContentCard from "./contentCard";

const Phases = () => (
  <section className="grav-o-full-bleed__content grav-u-pt-xxl grav-u-pb-xxl">
    {/* PHASES CONTENT HERE */}
    <ContentCard>
      <h3 className='categoryText grav-u-font-size-minus-2'><b>Phase 1: &nbsp;</b>week 1 &amp; 2</h3>
      <span className='cardTitle grav-u-font-size-plus-2'>Learn, understand and define</span>
      <p className='cardText grav-u-font-size-minus-1'>Discovering what is unknown and important, through assumptions mapping, Is the key to understanding the proposition and know which experiments should be prioritised.</p>
    </ContentCard>
    <ContentCard>

      <h3 className='categoryText grav-u-font-size-minus-2'><b>Phase 2: &nbsp;</b>week 3&ndash;6</h3>
      <span className='cardTitle grav-u-font-size-plus-2'>Rapid prototyping</span>
      <p className='cardText grav-u-font-size-minus-1'>Experiments consist of a meaningful experience for users in order to test and learn. This is a prototype containing a narrow slice of the overall proposition. Feedback between sprints leads to refinement of the experiments or pivoting. Hypotheses are evaluated until they are validated.</p>
    </ContentCard>
    <ContentCard>
      <h3 className='categoryText grav-u-font-size-minus-2'><b>Phase 3: &nbsp;</b>week 7</h3>
      <span className='cardTitle grav-u-font-size-plus-2'>Compile the findings</span>
      <p className='cardText grav-u-font-size-minus-1'>Findings are formatted so that they can easily be communicated with others. This includes presenting data that was gathered during user testing, in order to demonstrate the hypothesis has been validated.</p>
    </ContentCard>

  </section>
);

export default Phases;
