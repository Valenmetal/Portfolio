import React, { useLayoutEffect } from "react"
import ProjectCard from "./ProjectCard"
import { projectsArray } from "../projectList"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.utils.toArray(".proyect-card").forEach((card) => {
            gsap.from(card, {
               scrollTrigger: {
                  trigger: card,
                  start: "top bottom-=100px",
                  end: "top center",
                  scrub: 1,
               },
               opacity: 0,
               y: 100,
               scale: 0.95,
               ease: "power2.out",
            })
         })

         gsap.from(".divider", {
            scrollTrigger: {
               trigger: ".divider",
               start: "top bottom",
               end: "bottom bottom",
               scrub: 1,
            },
            scaleX: 0,
            ease: "power2.out",
         })
      }, ".projects") // <- Scope

      return () => ctx.revert() // <- Cleanup!
   }, [])

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
   )
}
