import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  const frontend = [
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      language: "HTML",
      level: "Experienced"
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      language: "CSS",
      level: "Experienced"
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      language: "Javascript",
      level: "Experienced"
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      language: "Bootstrap",
      level: "Experienced"
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      language: "React",
      level: "Experienced"
    },
  ]
  const backend = [
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      language: "Node Js",
      level: "Intermediate"
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      language: "MongoDB",
      level: "Intermediate"
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      language: "Php",
      level: "Basic"
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      language: "MySQL",
      level: "Intermediate"
    },
    {
      icon: <BsPatchCheckFill className="experience__details-icon" />,
      language: "Python",
      level: "Basic"
    },
  ]
  return (
    <section id="experience">
      <h5>What skills I have?</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
              {frontend.map((item, index) => {
                return <div className="experience__details" key={index}>
                    {item.icon}
                    <div>

                    <h4>{item.language}</h4>
                    <small>{item.level}</small>
                    </div>
                </div>
              })}
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
              {backend.map((item, index) => {
                return <div className="experience__details" key={index}>
                    {item.icon}
                    <div>
                    <h4>{item.language}</h4>
                    <small>{item.level}</small>
                    </div>
                </div>
              })}
          </div>
        </div>
      </div>

    </section>
  )
}
export default Experience