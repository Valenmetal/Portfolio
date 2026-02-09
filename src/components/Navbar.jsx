import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"

export default function Navbar() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from("#logo,li,.gradient-blur", {
            ease: "Expo.easeOut", // <- NavBar Animation
            opacity: 0,
            y: -200,
            duration: 1.5,
            stagger: 0.2,
         })
      }, ".navbar-items-container") // <- Scope

      return () => ctx.revert() // <- Cleanup!
   }, [])
   return (
      <nav>
         <main className="navbar-items-container">
            <a id="logo" href="/" aria-label="Home Button">
               <img
                  className="navbar_logo"
                  src="V-2.png"
                  alt="Valentino Geronzi Logo"
               />
            </a>
            <ul>
               <li>
                  <a href="#me" aria-label="About Me Section">
                     Me
                  </a>
               </li>
               <li>
                  <a href="#projects" aria-label="My Projects Section">
                     Projects
                  </a>
               </li>
               <li>
                  <a href="#technologies" aria-label="Technologies I Use">
                     Technologies
                  </a>
               </li>
            </ul>
         </main>
      </nav>
   )
}
