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
            <>
               {project.github === "" ? (
                  <></>
               ) : (
                  <a href={project.github} aria-label="Project GitHub's Link">
                     <LogoGitHub />
                  </a>
               )}
            </>
         </header>
         <div className="card-video">
            <video
               autoPlay
               muted
               loop
               style={{
                  height: "82%",
                  position: "absolute",
                  overflow: "hidden",
               }}
               src={project.src}></video>
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
