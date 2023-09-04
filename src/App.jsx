import "./App.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Tecnologies from "./components/Tecnologies";

function App() {
   return (
      <>
         <Navbar />
         <Hero />
         <Projects />
         <Tecnologies />
         <Footer />
      </>
   );
}

export default App;
