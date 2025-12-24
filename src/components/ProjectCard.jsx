import React, { useRef, useEffect } from "react";
import { LogoGitHub, LogoExternal } from "../assets/Icons";

function ProjectCard({ project }) {
   const videoRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  videoRef.current.play();
               } else {
                  videoRef.current.pause();
               }
            });
         },
         {
            threshold: 0.5, // Play when 50% visible
         }
      );

      if (videoRef.current) {
         observer.observe(videoRef.current);
      }

      return () => {
         if (videoRef.current) {
            observer.unobserve(videoRef.current);
         }
      };
   }, []);

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
               ref={videoRef}
               muted
               loop
               playsInline
               style={{
                  height: "82%",
                  position: "absolute",
                  overflow: "hidden",
               }}
               src={project.src}></video>
         </div>

         <footer className="logos-container">
            {project.logos.map((logo, index) => (
               <React.Fragment key={index}>{logo}</React.Fragment>
            ))}
         </footer>
      </div>
   );
}
export default ProjectCard;
