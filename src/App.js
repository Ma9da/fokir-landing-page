import Blog from "./components/blog/Blog";
import Client from "./components/client/Client";
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
    <Client/>
    <Blog/>
    </>
  );
}

export default App;
