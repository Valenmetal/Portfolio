import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTA() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from(".final-cta-content", {
            scrollTrigger: {
               trigger: ".final-cta",
               start: "top bottom-=100px",
               end: "top center",
               scrub: 1,
            },
            opacity: 0,
            y: 80,
            scale: 0.95,
            ease: "power2.out",
         })
      }, ".final-cta")

      return () => ctx.revert()
   }, [])

   return (
      <section className="final-cta">
         <div className="final-cta-content">
            <h2>Ready to build something extraordinary?</h2>
            <p>
               Let's discuss how I can help you scale your digital presence. 
               Reach out via email or LinkedIn to get started.
            </p>
            <div className="final-cta-buttons">
               <a href="mailto:valentinogeronzi@hotmail.com" className="btn-primary">
                  Let's Work Together →
               </a>
               <a
                  href="https://www.linkedin.com/in/valentino-geronzi-404945217/"
                  target="_blank"
                  className="btn-secondary">
                  LinkedIn Profile
               </a>
            </div>
         </div>
      </section>
   )
}
