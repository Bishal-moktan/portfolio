import "./About.css"
import aboutImage from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  const aboutContent = [
    {
      icon: <FaAward className="about__icon"/>,
      name: "Experience",
      details: "3+ years working"
    },
    {
      icon: <FiUsers className="about__icon"/>,
      name: "Clients",
      details: "200+ worldwide"
    },
    {
      icon: <VscFolderLibrary className="about__icon"/>,
      name: "Projects",
      details: "20+ completed"
    },
  ]
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={aboutImage} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {aboutContent.map((item, index) => {
              return <article className="about__card" key={index}>
                {item.icon}
                <h5>{item.name}</h5>
                <small>{item.details}</small>
              </article>
            })}
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit accusantium possimus molestiae deserunt placeat, veritatis accusamus error nam perspiciatis quos fugiat enim illo? Quia, eveniet. Aspernatur accusamus nostrum necessitatibus.</p>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  )
}
export default About