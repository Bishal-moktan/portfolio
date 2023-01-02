import {BsLinkedin} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedIn.com" target="_blank"><BsLinkedin /></a>
        <a href="https://www.github.com" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedIn.com" target="_blank"><BsFacebook /></a>
    </div>
  )
}
export default HeaderSocial