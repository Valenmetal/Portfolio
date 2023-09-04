import React, { useLayoutEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projectsArray } from "../projectList";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from("#projects-title", {
            scrollTrigger: { trigger: "#projects-title" },
            delay: 0.5,
            ease: "power4.out", // <- Title Animation
            opacity: 0,
            scale: 0.9,
            duration: 3,
         });

         gsap.from(".grid-container", {
            scrollTrigger: { trigger: ".grid-container" },
            delay: 0.5,
            scale: 0.95,
            ease: "power4.out", // <- Projects Animation
            opacity: 0,
            duration: 3,
         });

         gsap.from(".divider", {
            scrollTrigger: { trigger: ".divider" },
            delay: 0.5,
            ease: "power4.out", // <- Divider animation
            scaleX: 0,
            duration: 3,
         });
      }, ".projects"); // <- Scope

      return () => ctx.revert(); // <- Cleanup!
   }, []);

   return (
      <section className="projects">
         <header>
            <h2 id="projects-title">Projects</h2>
         </header>
         <main>
            <div className="grid-container">
               {projectsArray?.map((project, id) => (
                  <ProjectCard id={id} key={"project" + id} project={project} />
               ))}
            </div>
         </main>
         <hr className="divider"></hr>
      </section>
   );
}
