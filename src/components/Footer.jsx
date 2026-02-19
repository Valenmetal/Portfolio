import React, { useLayoutEffect } from "react"
import { LogoGitHub, LogoLinkedin, LogoEmail } from "../assets/Icons"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from(".logo-container, .footer-text", {
            scrollTrigger: { trigger: ".logo-container" },
            delay: 0.5,
            ease: "power4.out",
            opacity: 0,
            scale: 0.9,
            duration: 3,
         })
      }, ".footer")

      return () => ctx.revert()
   }, [])
   return (
      <footer className="footer">
         <div className="logo-container">
            <a href="https://github.com/Valenmetal" aria-label="Github Profile">
               <LogoGitHub />
            </a>
            <a
               href="https://www.linkedin.com/in/valentino-geronzi-404945217/"
               aria-label="Linkedin Profile">
               <LogoLinkedin />
            </a>
            <a href="mailto:valentinogeronzi@hotmail.com" aria-label="Email Me">
               <LogoEmail />
            </a>
         </div>
         <p className="footer-text">Valentino Geronzi — Full Stack Developer</p>
         <p className="footer-text footer-copyright">
            © 2026 · Todos los derechos reservados
         </p>
      </footer>
   )
}
