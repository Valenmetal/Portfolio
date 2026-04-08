import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
   IconDesign,
   IconSpeed,
   IconResponsive,
   IconAnimation,
   IconMaintenance,
   IconConversion,
} from "../assets/Icons"

gsap.registerPlugin(ScrollTrigger)

const services = [
   {
      icon: <IconDesign />,
      title: "Custom Design",
      description:
         "Unique UI/UX tailored to your brand's identity. I build from scratch, avoiding generic templates.",
   },
   {
      icon: <IconSpeed />,
      title: "Ultra-Fast Performance",
      description:
         "Optimized for speed and core web vitals. I ensure your site loads instantly for better user retention.",
   },
   {
      icon: <IconResponsive />,
      title: "Seamlessly Responsive",
      description:
         "A consistent and flawless experience across desktops, tablets, and smartphones.",
   },
   {
      icon: <IconAnimation />,
      title: "Premium Animations",
      description:
         "Sophisticated micro-interactions and transitions that elevate the perceived value of your product.",
   },
   {
      icon: <IconMaintenance />,
      title: "Scalable Full Stack",
      description:
         "Robust backends and efficient frontends designed to scale as your business grows.",
   },
   {
      icon: <IconConversion />,
      title: "Business Oriented",
      description:
         "Strategic code and design built to turn casual visitors into loyal customers and users.",
   },
]

export default function Services() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.utils.toArray(".service-card").forEach((card) => {
            gsap.from(card, {
               scrollTrigger: {
                  trigger: card,
                  start: "top bottom-=80px",
                  end: "top center",
                  scrub: 1,
               },
               opacity: 0,
               y: 80,
               ease: "power2.out",
            })
         })
      }, ".services")

      return () => ctx.revert()
   }, [])

   return (
      <section className="services" id="services">
         <div className="section-label">
            <div className="label-line" />
            <span>02</span>
            <div className="label-line" />
         </div>
         <h2>Expertise</h2>
         <p className="services-subtitle">
            Providing end-to-end solutions <br /> for high-impact digital products.
         </p>
         <div className="services-grid">
            {services.map((service, i) => (
               <div className="service-card" key={i}>
                  <div className="service-header">
                     <span className="service-icon">{service.icon}</span>
                     <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
               </div>
            ))}
         </div>
      </section>
   )
}
