import "./header.css"
import CTA from "./CTA"
import HeaderSocial from "./HeaderSocial"
import me from "../../assets/me.png"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Bishal Moktan</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">scroll down</a>
      </div>
    </header>
  )
}
export default Header