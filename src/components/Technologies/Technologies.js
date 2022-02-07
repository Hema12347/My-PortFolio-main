import React from 'react';
import { DiFirebase, DiReact, DiZend,DiHtml5 ,DiJavascript1,DiNodejsSmall,DiMaterializecss} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
        I have worked across all these technologies to 
        create a projects  in the web development world.
        From Back-end to design.
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem"/>
        <ListContainer>
          <ListTitle>HTML,CSS</ListTitle>
          <ListParagraph>
            Experience with <br/>
            HTML,CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript1 size="3rem"/>
        <ListContainer>
          <ListTitle>JAVASCRIPT</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>REACT JS</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem"/>
        <ListContainer>
          <ListTitle>NODE JS</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>MONGODB,SQL</ListTitle>
          <ListParagraph>
            Experience with <br/>
             MongoDB and MySql
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMaterializecss size="3rem"/>
        <ListContainer>
          <ListTitle>Materialize-css</ListTitle>
          <ListParagraph>
            Experience with <br/>
            materialize-css,material-ui
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
