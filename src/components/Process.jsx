import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const steps = [
   {
      number: "01",
      title: "Discovery & Strategy",
      description:
         "We discuss your project goals, vision, and technical requirements to define a clear roadmap.",
   },
   {
      number: "02",
      title: "Architecture & Design",
      description:
         "I create a visual and structural blueprint aligned with your brand's identity and user needs.",
   },
   {
      number: "03",
      title: "Core Development",
      description:
         "Building the application with clean, high-performance code and sophisticated GSAP animations.",
   },
   {
      number: "04",
      title: "Launch & Growth",
      description:
         "I deploy your site and provide ongoing support to ensure it scales and stays optimized.",
   },
]

export default function Process() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.utils.toArray(".process-step").forEach((step) => {
            gsap.from(step, {
               scrollTrigger: {
                  trigger: step,
                  start: "top bottom-=80px",
                  end: "top center",
                  scrub: 1,
               },
               opacity: 0,
               x: -60,
               ease: "power2.out",
            })
         })
      }, ".process")

      return () => ctx.revert()
   }, [])

   return (
      <section className="process" id="process">
         <div className="section-label">
            <div className="label-line" />
            <span>03</span>
            <div className="label-line" />
         </div>
         <h2>Process</h2>
         <p className="process-subtitle">
            A transparent workflow where you're in control at every milestone.
         </p>
         <div className="process-timeline">
            {steps.map((step, i) => (
               <div className="process-step" key={i}>
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                     <h3>{step.title}</h3>
                     <p>{step.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}
