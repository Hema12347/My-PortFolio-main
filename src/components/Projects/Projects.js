import React from 'react';
import ReactTooltip from 'react-tooltip';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
   <SectionDivider/>
   <SectionTitle main>Projects</SectionTitle>
   <GridContainer>
     {projects.map(({id,description,tags,frontend,backend,visit,image,title})=>(
      <BlogCard key={id}>
         <Img src={image}  />
         <TitleContent>
           <HeaderThree title>{title}</HeaderThree>
           <Hr/>
         </TitleContent>
         <CardInfo>{description}</CardInfo>
         <div>
           <TitleContent>Stack</TitleContent>
           <TagList>
             {tags.map((tag,i)=>(
               <Tag key={i}>{tag}</Tag>
             ))}
           </TagList>
         </div>
         <UtilityList>
          
           <ExternalLinks target="_blank" href={frontend}>Frontend</ExternalLinks>
           <ExternalLinks target="_blank" href={backend}>Backend</ExternalLinks>
           <ExternalLinks target="_blank" href={visit} data-tip="username-admin@gmail.com password-admin123" >Demo </ExternalLinks>
         <ReactTooltip effect="solid" backgroundColor='white' textColor='black'/>
         </UtilityList>
      </BlogCard>
     ))}
   </GridContainer>
  </Section>
);

export default Projects;