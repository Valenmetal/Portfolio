import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function RecruiterSection() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from(".recruiter-header h2, .recruiter-subtitle", {
            scrollTrigger: {
               trigger: ".recruiter-section",
               start: "top bottom-=100px",
               end: "top center",
               scrub: 1,
            },
            opacity: 0,
            x: -100,
            stagger: 0.2,
            ease: "power2.out",
         })
         
         gsap.from(".benefit-card", {
            scrollTrigger: {
               trigger: ".benefits-grid",
               start: "top bottom-=50px",
               end: "top center",
               scrub: 1,
            },
            opacity: 0,
            y: 40,
            stagger: 0.1,
            ease: "power2.out",
         })

         gsap.from(".recruiter-cta-block", {
            scrollTrigger: {
               trigger: ".recruiter-cta-block",
               start: "top bottom",
               end: "top center",
               scrub: 1,
            },
            opacity: 0,
            scale: 0.9,
            ease: "power1.out"
         })
      }, ".recruiter-section")

      return () => ctx.revert()
   }, [])

   const benefits = [
      {
         index: "01",
         title: "Clean & Maintainable Architecture",
         description: "I focus on writing code that is not only functional but easy to scale, following industry best practices and design patterns."
      },
      {
         index: "02",
         title: "Modern Stack Proficiency",
         description: "Expertise in the JavaScript ecosystem (React, Node, TypeScript) with a deep understanding of frontend performance and backend efficiency."
      },
      {
         index: "03",
         title: "Performance & DX Enthusiast",
         description: "Obsessed with Core Web Vitals and building tools that improve both the final product's speed and the team's development experience."
      },
      {
         index: "04",
         title: "Technical Leadership & Collaboration",
         description: "Strong communication skills for bridge-building between engineering and product goals. Experienced in Git-flow and high-standard PR reviews."
      }
   ]

   return (
      <section className="recruiter-section" id="recruiter">
         <div className="section-label">
            <div className="label-line" />
            <span>02</span>
            <div className="label-line" />
         </div>
         
         <div className="recruiter-content">
            <div className="recruiter-header">
               <h2>
                  Technical Asset 
                  <span>for your team</span>
               </h2>
               <p className="recruiter-subtitle">
                  I don't just build websites; I engineer digital experiences with 
                  precision, performance, and a product-focused mindset.
               </p>
            </div>

            <div className="benefits-grid">
               {benefits.map((benefit, i) => (
                  <div className="benefit-card" key={i}>
                     <div className="card-index">{benefit.index}</div>
                     <div className="card-info">
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="recruiter-cta-block">
            <span className="cta-label">Available for full-time opportunities</span>
            <div className="btn-container">
               <a href="mailto:valentinogeronzi@hotmail.com" className="btn-primary">
                  SCHEDULE TECHNICAL INTERVIEW →
               </a>
            </div>
         </div>
      </section>
   )
}
