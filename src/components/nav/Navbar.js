import { useState } from "react"

import "./navbar.css"
import {AiOutlineHome} from "react-icons/ai"
import {BiUser} from "react-icons/bi"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {AiOutlineMessage} from "react-icons/ai"



const Navbar = () => {
  const [activeClass, setActiveClass] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveClass("#")} className={activeClass === "#"? "active": ""}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveClass("#about")} className={activeClass === "#about"? "active": ""}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveClass("#experience")} className={activeClass === "#experience"? "active": ""}><BiBook /></a>
      <a href="#services" onClick={() => setActiveClass("#services")} className={activeClass === "#services"? "active": ""}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveClass("#contact")} className={activeClass === "#contact"? "active": ""}><AiOutlineMessage /></a>
    </nav>
  )
}
export default Navbar