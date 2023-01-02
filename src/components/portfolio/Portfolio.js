import "./portfolio.css"
import project1 from "../../assets/portfolio1.jpg"
import project2 from "../../assets/portfolio2.jpg"
import project3 from "../../assets/portfolio3.jpg"
import project4 from "../../assets/portfolio4.jpg"
import project5 from "../../assets/portfolio5.png"
import project6 from "../../assets/portfolio6.jpg"

const Portfolio = () => {
  const projects = [
    {
      title: "Project Title",
      img: project1,
      githubLink: "https://github.com",
      liveDemoLink: "https://github.com",
    },
    {
      title: "Project Title",
      img: project2,
      githubLink: "https://github.com",
      liveDemoLink: "https://github.com",
    },
    {
      title: "Project Title",
      img: project3,
      githubLink: "https://github.com",
      liveDemoLink: "https://github.com",
    },
    {
      title: "Project Title",
      img: project4,
      githubLink: "https://github.com",
      liveDemoLink: "https://github.com",
    },
    {
      title: "Project Title",
      img: project5,
      githubLink: "https://github.com",
      liveDemoLink: "https://github.com",
    },
    {
      title: "Project Title",
      img: project6,
      githubLink: "https://github.com",
      liveDemoLink: "https://github.com",
    },
  ]
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {projects.map((item, index) => {
        const {title, img, githubLink, liveDemoLink} = item
        return <article className="portfolio__item" key={index}>
          <div className="portfolio__item-img">
            <img src={img} alt={title}/>
          </div>
          <h3>{title}</h3>

          <div className="portfolio__item-cta">
          <a href={githubLink} className="btn" target="_blank">Github</a>
          <a href={liveDemoLink} className="btn btn-primary" target="_blank">Live Demo</a>
          </div>

        </article>
      })}
      </div>
    </section>
  )
}
export default Portfolio