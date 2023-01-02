import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
    <a href="#" className="footer__logo">BISHAL</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">portfolio</a></li>
      <li><a href="#testinomials">Testinomials</a></li>
      <li><a href="#contact">Contact</a></li>

    </ul>

    <div className="footer__socials">
      <a href="https://faceboook.com">
        <FaFacebook />
      </a>
      <a href="https://instagram.com">
        <FaInstagram />
      </a>
      <a href="https://twitter.com">
        <FaTwitter/>
      </a>
    </div>

    <div className="footer__copyright">
      <small> &copy; BISHAL MOKTAN. All rights reserved.</small>
    </div>
    </footer>
  )
}
export default Footer