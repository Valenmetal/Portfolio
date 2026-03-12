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
      title: "Diseño a Medida",
      description:
         "Sitios web que reflejan la identidad visual y filosofía de tu estudio. Sin plantillas genéricas.",
   },
   {
      icon: <IconSpeed />,
      title: "Rendimiento Ultra Rápido",
      description:
         "Carga en menos de 2 segundos. Optimizado para SEO y para que Google posicione tu estudio primero.",
   },
   {
      icon: <IconResponsive />,
      title: "100% Responsive",
      description:
         "Experiencia impecable en cualquier dispositivo. Tus clientes ven tu portfolio perfecto desde el móvil.",
   },
   {
      icon: <IconAnimation />,
      title: "Animaciones Sofisticadas",
      description:
         "Micro-interacciones y transiciones que elevan la percepción de tu marca a nivel premium.",
   },
   {
      icon: <IconMaintenance />,
      title: "Mantenimiento Incluido",
      description:
         "Soporte post-lanzamiento y actualizaciones para que tu sitio esté siempre al día.",
   },
   {
      icon: <IconConversion />,
      title: "Orientado a Conversión",
      description:
         "Estructura pensada para que cada visitante se convierta en una consulta real para tu estudio.",
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
         <h2>Qué Ofrezco</h2>
         <p className="services-subtitle">
            Todo lo que tu estudio necesita <br /> para destacar en el mundo digital.
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
