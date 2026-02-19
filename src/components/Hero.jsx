import React, { useLayoutEffect } from "react"
import { Argentina, LogoGitHub, LogoLinkedin } from "../assets/Icons"
import { gsap } from "gsap"

export default function Hero() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from("#hello", {
            delay: 0.7,
            ease: "Expo.easeOut",
            opacity: 0,
            y: -200,
            duration: 3,
         })

         gsap.from(".name", {
            ease: "Expo.easeOut",
            delay: 1.1,
            x: -100,
            duration: 2,
         })

         gsap.from(".name", {
            delay: 1.1,
            opacity: 0,
            duration: 2.5,
         })

         gsap.from(
            ".logo-container, .hero-video-container, .stagger, .from, .hero-description, .hero-ctas",
            {
               delay: 1.5,
               ease: "Expo.easeOut",
               opacity: 0,
               y: 200,
               duration: 2.5,
               stagger: 0.15,
            },
         )

         gsap.from(".divider", {
            delay: 2,
            ease: "Expo.easeOut",
            scaleX: 0,
            duration: 4,
         })
      }, ".hero")

      return () => ctx.revert()
   }, [])
   return (
      <section id="me" className="hero">
         <main className="hero-grid">
            <div className="hero-container">
               <p id="hello">Valentino Geronzi</p>
               <h1 className="name">
                  Websites que <span>construyen marca.</span>
               </h1>
               <div className="logo-container">
                  <p>Desarrollo web especializado para estudios de arquitectura.</p>
                  <div className="stagger">
                     <a
                        href="https://github.com/Valenmetal"
                        aria-label="My Github Profile">
                        <LogoGitHub />
                     </a>
                  </div>
                  <div className="stagger">
                     <a
                        href="https://www.linkedin.com/in/valentino-geronzi-404945217/"
                        aria-label="My Linkedin Profile">
                        <LogoLinkedin />
                     </a>
                  </div>
               </div>

               {/* Video moved here for mobile flow */}
               <div className="hero-video-container">
                  <video
                     autoPlay
                     loop
                     muted
                     playsInline
                     src="/Allprojects.mp4"
                     className="hero-video"></video>
               </div>

               <div className="hero-content-block">
                  <p className="hero-description">
                     Diseño y desarrollo sitios web de alto rendimiento que reflejan
                     la visión de tu estudio, atraen clientes y convierten visitantes
                     en consultas reales.
                  </p>
                  <div className="hero-ctas">
                     <a
                        href="mailto:valentinogeronzi@hotmail.com"
                        className="btn-primary">
                        Agenda una consulta gratis →
                     </a>
                     <a href="#projects" className="btn-secondary">
                        Ver proyectos
                     </a>
                  </div>
                  <p className="from">
                     Based in Argentina <Argentina />
                  </p>
               </div>
            </div>
         </main>
         <hr className="divider"></hr>
      </section>
   )
}
