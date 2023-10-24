import "./App.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";

function App() {
   return (
      <>
         <Navbar />
         <Hero />
         <Projects />
         <Technologies />
         <Footer />
      </>
   );
}

export default App;
