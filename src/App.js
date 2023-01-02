import Header from "./components/header/Header"
import Navbar from "./components/nav/Navbar"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Testinomial from "./components/testinomials/Testinomial"
import Footer from "./components/footer/Footer"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testinomial />
    <Contact />
    <Footer />
    <ToastContainer position="top-center" autoClose={1500}/>
    </>
  );
}

export default App;
