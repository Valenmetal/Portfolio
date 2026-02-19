import React, { useEffect } from "react"
import "./App.scss"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SocialProof from "./components/SocialProof"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Process from "./components/Process"
import Technologies from "./components/Technologies"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"
import Lenis from "lenis"

function App() {
   useEffect(() => {
      const lenis = new Lenis()

      function raf(time) {
         lenis.raf(time)
         requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
   }, [])

   return (
      <>
         <Navbar />
         <Hero />
         <SocialProof />
         <Services />
         <Projects />
         <Process />
         <Technologies />
         <FinalCTA />
         <Footer />
      </>
   )
}

export default App
