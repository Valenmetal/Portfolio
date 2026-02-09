import React, { useLayoutEffect } from "react"
import { Argentina, LogoGitHub, LogoLinkedin } from "../assets/Icons"
import { gsap } from "gsap"

export default function Hero() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from("#hello", {
            delay: 0.7,
            ease: "Expo.easeOut", // <- Hello animation
            opacity: 0,
            y: -200,
            duration: 3,
         })

         gsap.from(".name", {
            ease: "Expo.easeOut", // <- Name Position
            delay: 1.1,
            x: -100,
            duration: 2,
         })

         gsap.from(".name", {
            delay: 1.1,
            opacity: 0, // <- Name opacity
            duration: 2.5,
         })

         gsap.from(".logo-container, .stagger, .from, .hero-description", {
            delay: 1.5,
            ease: "Expo.easeOut", // <- Logos animation
            opacity: 0,
            y: 200,
            duration: 2.5,
            stagger: 0.15,
         })

         gsap.from(".divider", {
            delay: 2,
            ease: "Expo.easeOut", // <- Divider animation
            scaleX: 0,
            duration: 4,
         })
      }, ".hero") // <- Scope

      return () => ctx.revert() // <- Cleanup!
   }, [])
   return (
      <section id="me" className="hero">
         <main className="hero-container">
            <p id="hello">Valentino Geronzi</p>
            <h1 className="name">
               Full Stack <span>Developer</span>
            </h1>
            <div className="logo-container">
               <p>Structuring the future of the web.</p>
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
            <p className="hero-description">
               Designing and building high-performance digital structures where form
               meets function.
            </p>
            <p id="projects" className="from">
               Based in Argentina <Argentina />
            </p>
         </main>
         <hr className="divider"></hr>
      </section>
   )
}
