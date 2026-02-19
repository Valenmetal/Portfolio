import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap"

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false)

   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from("#logo,li,.nav-cta,.hamburger", {
            ease: "Expo.easeOut",
            opacity: 0,
            y: -200,
            duration: 1.5,
            stagger: 0.2,
         })
      }, ".navbar-items-container")

      return () => ctx.revert()
   }, [])

   const toggleMenu = () => setIsOpen(!isOpen)

   return (
      <nav className={isOpen ? "nav-open" : ""}>
         <main className="navbar-items-container">
            <a id="logo" href="/" aria-label="Home Button">
               <img
                  className="navbar_logo"
                  src="V-2.png"
                  alt="Valentino Geronzi Logo"
               />
            </a>

            <button
               className="hamburger"
               onClick={toggleMenu}
               aria-label="Toggle menu">
               <div className="bar"></div>
               <div className="bar"></div>
               <div className="bar"></div>
            </button>

            <ul className={isOpen ? "show" : ""}>
               <li>
                  <a href="#services" onClick={() => setIsOpen(false)}>
                     Servicios
                  </a>
               </li>
               <li>
                  <a href="#projects" onClick={() => setIsOpen(false)}>
                     Proyectos
                  </a>
               </li>
               <li>
                  <a href="#process" onClick={() => setIsOpen(false)}>
                     Proceso
                  </a>
               </li>
               <li>
                  <a href="#technologies" onClick={() => setIsOpen(false)}>
                     Stack
                  </a>
               </li>
               <li className="mobile-only">
                  <a href="mailto:valentinogeronzi@hotmail.com" className="nav-cta">
                     Contactar
                  </a>
               </li>
            </ul>

            <a
               href="mailto:valentinogeronzi@hotmail.com"
               className="nav-cta desktop-only">
               Contactar
            </a>
         </main>
      </nav>
   )
}
