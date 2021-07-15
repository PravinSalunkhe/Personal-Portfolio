import React from 'react';
import {CardTitle, CardSubtitle, CardText, CardFooter, Button } from 'reactstrap';
import {projects} from './project-data';
import {IoLogoGithub} from "react-icons/io";

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>

const ProjectCard = ({ project }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div class="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <CardTitle className="proj-card-title">{project.name}</CardTitle>
                                    <CardSubtitle className="proj-card-sub">{project.type}<br></br></CardSubtitle>
                                    <CardText id="tect-text">{project.tech}</CardText>
                                    <CardText id="proj-text-just"><em className="highlight">What I learnt:</em> {project.learning}</CardText>
                                    <CardFooter>
                                      <Button variant="outline-light" id="status">
                                        {project.status}  
                                      </Button>  
                                    </CardFooter>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <CardTitle className="proj-card-title">Summary</CardTitle>
                                    <CardText className="card-text" id="proj-text-just">{project.description}</CardText>     
                                </div>
                                <CardFooter>
                                <a href={project.git_link} target="_blank">  
                                  <Button variant="outline-dark" id="action-btn" size="sm">
                                      <IoLogoGithub id="btn-icon" size="20px"/> Github
                                  </Button>
                                </a>
                                </CardFooter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
  );
};

function Projects(props) {
  return (
    <div className="container">
      <h1 className="regularh1">Projects</h1>
      <div className="row">
        {projects.map((item) => (
          <ProjectCard project={item} />
        ))}
      </div>
    </div>
  );
};
  
export default Projects;