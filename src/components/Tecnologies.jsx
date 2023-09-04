import React, { useLayoutEffect } from "react";
import {
   LogoAstro,
   LogoReact,
   LogoHTML,
   LogoCSS,
   LogoGit,
   LogoSass,
   LogoJS,
   LogoGsap,
   LogoBootstrap,
   LogoFireBase,
} from "../assets/Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tecnologies() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from("#tecnologies", {
            scrollTrigger: { trigger: "#tecnologies" },
            delay: 0.5,
            ease: "power4.out", // <- Title Animation
            opacity: 0,
            scale: 0.9,
            duration: 3,
         });
         gsap.from(".tecnologies-container", {
            scrollTrigger: { trigger: ".tecnologies-container" },
            delay: 0.5,
            scale: 0.95,
            ease: "power4.out", // <- Projects Animation
            opacity: 0,
            duration: 3,
         });
      }, ".tecnologies"); // <- Scope

      return () => ctx.revert(); // <- Cleanup!
   }, []);
   return (
      <section className="tecnologies">
         <h2 id="tecnologies">Tecnologies</h2>
         <main className="tecnologies-container">
            <LogoReact />
            <LogoHTML />
            <LogoCSS />
            <LogoJS />
            <LogoSass />
            <LogoBootstrap />
            <LogoGsap />
            <LogoFireBase />
            <LogoAstro />
            <LogoGit />
         </main>
      </section>
   );
}
