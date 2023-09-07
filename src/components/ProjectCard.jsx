import React from "react";
import { LogoGitHub, LogoExternal } from "../assets/Icons";

function ProjectCard({ project }) {
   return (
      <div className="proyect-card">
         <header className="card-header">
            <a target="_blank" href={project.url} aria-label="Project's Link">
               <h3 title="Project title">
                  {project.name} <LogoExternal />
               </h3>
            </a>
            <a href={project.github} aria-label="Project GitHub's Link">
               <LogoGitHub />
            </a>
         </header>
         <div
            className="card-video"
            style={{
               position: "relative",
               paddingBottom: "56.206%",
            }}>
            <iframe
               style={{
                  height: "100%",
                  position: "absolute",
                  overflow: "hidden",
               }}
               src={project.src}
               allow="autoplay"></iframe>
         </div>

         <footer className="logos-container">
            {project.logos.map((logo) => (
               <>{logo}</>
            ))}
         </footer>
      </div>
   );
}
export default ProjectCard;
