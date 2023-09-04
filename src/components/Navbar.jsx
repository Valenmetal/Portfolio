import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function Navbar() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from("#logo,li,.gradient-blur", {
            ease: "Expo.easeOut", // <- NavBar Animation
            opacity: 0,
            y: -200,
            duration: 1.5,
            stagger: 0.2,
         });
      }, ".navbar-items-container"); // <- Scope

      return () => ctx.revert(); // <- Cleanup!
   }, []);
   return (
      <nav>
         <div className="gradient-blur">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
         <main className="navbar-items-container">
            <a id="logo" href="/">
               <img className="navbar_logo" src="V-2.png" alt="logo" />
            </a>
            <ul>
               <a href="#me">
                  <li>Me</li>
               </a>
               <a href="#projects">
                  <li>Proyects</li>
               </a>
               <a href="#tecnologies">
                  <li>Tecnologies</li>
               </a>
            </ul>
         </main>
      </nav>
   );
}
