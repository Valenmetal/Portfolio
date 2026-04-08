import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
   { number: "+5", label: "Years of experience" },
   { number: "+10", label: "Projects delivered" },
   { number: "100%", label: "Happy clients" },
   { number: "2 wks", label: "Avg. delivery" },
]

export default function SocialProof() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.utils.toArray(".stat-item").forEach((item) => {
            gsap.from(item, {
               scrollTrigger: {
                  trigger: item,
                  start: "top bottom-=80px",
                  end: "top center",
                  scrub: 1,
               },
               opacity: 0,
               y: 60,
               ease: "power2.out",
            })
         })
      }, ".social-proof")

      return () => ctx.revert()
   }, [])

   return (
      <section className="social-proof">
         <div className="section-label">
            <div className="label-line" />
            <span>01</span>
            <div className="label-line" />
         </div>
         <div className="stats-grid">
            {stats.map((stat, i) => (
               <div className="stat-item" key={i}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
               </div>
            ))}
         </div>
      </section>
   )
}
