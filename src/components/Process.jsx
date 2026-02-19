import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const steps = [
   {
      number: "01",
      title: "Consulta Gratuita",
      description:
         "Conversamos sobre tu estudio, tus objetivos y tu visión. Entiendo qué necesitás antes de proponer nada.",
   },
   {
      number: "02",
      title: "Propuesta & Diseño",
      description:
         "Presento un concepto visual alineado a tu identidad. Iteramos hasta que estés conforme al 100%.",
   },
   {
      number: "03",
      title: "Desarrollo",
      description:
         "Construyo el sitio con código limpio, animaciones sofisticadas y rendimiento optimizado.",
   },
   {
      number: "04",
      title: "Lanzamiento & Soporte",
      description:
         "Publico tu sitio y te brindo soporte continuo para que todo funcione impecable.",
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
         <h2>Cómo Trabajo</h2>
         <p className="process-subtitle">
            Un proceso transparente donde vos tenés el control en cada etapa.
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
