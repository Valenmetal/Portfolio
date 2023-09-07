import React, { useLayoutEffect } from "react";
import { Argentina, LogoGitHub, LogoLinkedin } from "../assets/Icons";
import { gsap } from "gsap";

export default function Hero() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from("#hello", {
            delay: 0.7,
            ease: "Expo.easeOut", // <- Hello animation
            opacity: 0,
            y: -200,
            duration: 3,
         });

         gsap.from(".name", {
            ease: "Expo.easeOut", // <- Name Position
            delay: 1.1,
            x: -100,
            duration: 2,
         });

         gsap.from(".name", {
            delay: 1.1,
            opacity: 0, // <- Name opacity
            duration: 2.5,
         });

         gsap.from(".logo-container, .stagger,.from", {
            delay: 1.5,
            ease: "Expo.easeOut", // <- Logos animation
            opacity: 0,
            y: 200,
            duration: 2.5,
            stagger: 0.15,
         });

         gsap.from(".divider", {
            delay: 2,
            ease: "Expo.easeOut", // <- Divider animation
            scaleX: 0,
            duration: 4,
         });
      }, ".hero"); // <- Scope

      return () => ctx.revert(); // <- Cleanup!
   }, []);
   return (
      <section id="me" className="hero">
         <main className="hero-container">
            <p id="hello">Hello, I'm</p>
            <h1 className="name">Valentino Geronzi</h1>
            <div className="logo-container">
               <p>Web Developer</p>
               <div className="stagger">
                  <a
                     href="https://github.com/Valenmetal"
                     aria-label="Mi Github Profile">
                     <LogoGitHub />
                  </a>
               </div>
               <div className="stagger">
                  <a
                     href="https://www.linkedin.com/in/valentino-geronzi-404945217/"
                     aria-label="Mi Linkedin Profile">
                     <LogoLinkedin />
                  </a>
               </div>
            </div>
            <p id="projects" className="from">
               {/* id = projects to take the user at this section with the perfect fit */}
               From Argentina <Argentina />
            </p>
         </main>
         <hr className="divider"></hr>
      </section>
   );
}
