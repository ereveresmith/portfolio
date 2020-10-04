import React, {useState} from 'react';
import Button from '../components/Button';
import Styled from 'styled-components';
import Card from '../components/Card';

const handleClick = () => {
  console.log('Clicked the button');
}

const OuterGrid = Styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
`

const ProjectsGrid = Styled.div`
  display: grid;
  grid-gap: 24px;
  padding: 8px;
  justify-items: center;
  align-items: center;
  grid-template-columns: auto auto;
`

const Projects = [
  {name: "My portfolio", id: "2", description: "Test project, my portfolio. Let's see how the long text works on my new page."},
  {name: "At Dusk", id: "3", description: "A 90 minute film that premiered in IMAX"},
  {name: "Mighty Mufler Website", id: "1", description: "A site I built for Shane"},
  {name: "Mighty Mufler Website yoyooyoyoy", id: "1", description: "A site I built for Shane test 2 with a bigger description"},
];

const renderedProjects = Projects.map((project) => {
  return <Card 
    title={project.name} 
    content={project.description}></Card>
})

const ProjectsPage = () => {
  return (
    <OuterGrid>
      <h1>Projects</h1> 
      <ProjectsGrid>
        {renderedProjects}
      </ProjectsGrid>
    </OuterGrid>
  );
}

export default ProjectsPage;
