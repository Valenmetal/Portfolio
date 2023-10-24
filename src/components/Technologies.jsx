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

export default function Technologies() {
   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from("#technologies", {
            scrollTrigger: { trigger: "#technologies" },
            delay: 0.5,
            ease: "power4.out", // <- Title Animation
            opacity: 0,
            scale: 0.9,
            duration: 3,
         });
         gsap.from(".technologies-container", {
            scrollTrigger: { trigger: ".technologies-container" },
            delay: 0.5,
            scale: 0.95,
            ease: "power4.out", // <- Projects Animation
            opacity: 0,
            duration: 3,
         });
      }, ".technologies"); // <- Scope

      return () => ctx.revert(); // <- Cleanup!
   }, []);
   return (
      <section className="technologies">
         <h2 id="technologies">Technologies</h2>
         <main className="technologies-container">
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
