import { IoArrowForward } from 'react-icons/io5'
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.png'
import project4 from '../assets/images/project-4.png'
import project5 from '../assets/images/project-5.png'
const Project = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: "Plastic Credit Card",
      tag: "Identity, Mockup",
      alt: "Plastic Credit Card"
    },
    {
      id: 2,
      image: project2,
      title: "3D Illustration",
      tag: "Development, Mobile App",
      alt: "3D Illustration"
    },
    {
      id: 3,
      image: project3,
      title: "Statistics Mobile App",
      tag: "Development, Mobile App",
      alt: "Statistics Mobile App"
    },
    {
      id: 4,
      image: project4,
      title: "Color Blending Effect",
      tag: "Design, Graphics",
      alt: "Color Blending Effect"
    },
    {
      id: 5,
      image: project5,
      title: "3D Animation",
      tag: "Design, Dimension",
      alt: "3D Animation"
    }
  ];

  return (
    <section className="section project" id='projects' aria-label="projects">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <h2 className="h2 section-title">
              Our recent <span className="span">projects</span>.
            </h2>
            <p className="section-text">
              Aliquam tristique libero at dui sodales, et placerat orci lobortis. Donec metus lorem, vulputate at sapien sit amet,
              auctor iaculis lorem.
            </p>
          </div>
          <a href="#" className="btn-link">
            <span className="span">Show More Projects</span>
            <IoArrowForward size={'1.6rem'} display={'block'} aria-hidden="true"/>
          </a>
        </div>

        <ul className="project-list">
          {projects.map(project => (
            <li key={project.id}>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ "--width": 615, "--height": 391 }}>
                  <img src={project.image} width="615" height="391" loading="lazy" alt={project.alt} className="img-cover" />
                </figure>
                <div className="card-content">
                  <div>
                    <h3 className="h3">
                      <a href="#" className="card-title hover:underline">{project.title}</a>
                    </h3>
                    <p className="card-tag">{project.tag}</p>
                  </div>
                  <a href="#" className="card-link" aria-label="product details">
                    <IoArrowForward size={'22px'} display={'block'} aria-hidden="true"/>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Project;
