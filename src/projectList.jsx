import {
   LogoAstro,
   LogoBootstrap,
   LogoReact,
   LogoHTML,
   LogoCSS,
   LogoGit,
   LogoSass,
   LogoJS,
   LogoGsap,
   LogoFireBase,
} from "./assets/Icons"

export const projectsArray = [
   {
      id: 1,
      name: "Bonofilms",
      src: "/bono.mp4",
      github: "https://github.com/Valenmetal/bonofilms",
      url: "https://bonofilms.com/",
      logos: [
         <LogoReact />,
         <LogoGsap />,
         <LogoSass />,
         <LogoGit />,
         <LogoHTML />,
         <LogoCSS />,
         <LogoJS />,
      ],
   },
   {
      id: 2,
      name: "Astro E-Commerce",
      src: "/astro.mp4",
      github: "https://github.com/Valenmetal/React-Astro-E-Commerce",
      url: "https://valenmetal.github.io/React-Astro-E-Commerce/",
      logos: [
         <LogoReact />,
         <LogoAstro />,
         <LogoGsap />,
         <LogoSass />,
         <LogoGit />,
         <LogoHTML />,
         <LogoCSS />,
         <LogoJS />,
      ],
   },
]
