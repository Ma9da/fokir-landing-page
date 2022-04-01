import Blog from "./components/blog/Blog";
import Client from "./components/client/Client";
import Contact from "./components/contact/Contact";
import Hello from "./components/hello/Hello";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Numbers from "./components/numbers/Numbers";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Footer from './components/footer/Footer';

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
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
