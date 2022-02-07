import React from "react";

import {
  Section,
  SectionText,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Name } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
      Hey there! I'm <Name>Hema Gopisetty</Name>
        <br />
        Welcome to my PortFolio
      </SectionTitle>
      <SectionText>
        Im an Certified Full Stack Developer, 
        Developing react and full stack applications using MERN. and also an Enthusiastic learner to learn new things.
      </SectionText>

      <Button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1llv23ETMmM7NP8ekQgDKmTFp3le0vbCd/view?usp=sharing",
            "_blank"
          )
        }
      >
        View Resume
      </Button>
      <SectionDivider />
    </LeftSection>
  </Section>
);

export default Hero;
