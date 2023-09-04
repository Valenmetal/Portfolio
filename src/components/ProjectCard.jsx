import React from "react";
import { LogoGitHub, LogoExternal } from "../assets/Icons";

function ProjectCard({ project }) {
   return (
      <div className="proyect-card">
         <header className="card-header">
            <a target="_blank" href={project.url}>
               <h3 title="Project title">
                  {project.name} <LogoExternal />
               </h3>
            </a>
            <a href={project.github}>
               <LogoGitHub />
            </a>
         </header>

         <video className="card-video" autoPlay muted loop>
            <source src={project.src} type="video/mp4" />
         </video>
         <footer className="logos-container">
            {project.logos.map((logo) => (
               <>{logo}</>
            ))}
         </footer>
      </div>
   );
}
export default ProjectCard;
