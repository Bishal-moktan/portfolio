import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  const services = [
    {
      name: "UI/UX Design",
      icon: <BiCheck className="service__list-icon" />,
      details: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ]
    },
    {
      name: "Web Development",
      icon: <BiCheck className="service__list-icon" />,
      details: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ]
    },
    {
      name: "Content Creation",
      icon: <BiCheck className="service__list-icon" />,
      details: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ]
    },
  ]
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      {services.map((item, index) => {
        const {name, icon, details} = item
        return <article className="service" key={index}>
          <div className="service__head">
            <h3>{name}</h3>
          </div>
            <ul className="service__list">
                {details.map((item, index) => {
             return <li  key={index}>
                {icon}
                 <p>{item}</p>
              </li>
                })}
            </ul>
        </article>
      })}
      </div>
    </section>
  )
}
export default Services