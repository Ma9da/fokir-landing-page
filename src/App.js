import Hello from "./components/hello/Hello";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Numbers from "./components/numbers/Numbers";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Hello/>
    <Services/>
    <Portfolio/>
    <Numbers/>
    </>
  );
}

export default App;
