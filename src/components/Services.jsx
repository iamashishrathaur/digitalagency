import service1 from '../assets/images/service-1.svg';
import service2 from '../assets/images/service-2.svg';
import service3 from '../assets/images/service-3.svg';
import service4 from '../assets/images/service-4.svg';
import circleShape from '../assets/images/circle-shape.svg'
import triangleShape from '../assets/images/triangle-shape-1.svg'

const Services = () => {
  // Define an array of service data
  const services = [
    { title: "Mobile Apps", icon: service1, text: "We design professional looking yet simple Logo." },
    { title: "Branding Strategy", icon: service2, text: "We design professional looking yet simple Logo." },
    { title: "Graphics Design", icon: service3, text: "We design professional looking yet simple Logo." },
    { title: "Online Marketing", icon: service4, text: "We design professional looking yet simple Logo." }
  ];

  return (
    <section className="section service has-shape" id="services" aria-label="service">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">
            Our included <span className="span">service</span>.
          </h2>
          <p className="section-text">
            Aliquam tristique libero at dui sodales, et placerat orci lobortis. Donec metus lorem, vulputate at sapien sit amet,
            auctor iaculis lorem.
          </p>
        </div>
        <ul className="grid-list">
          {/* Use map to iterate over the services array and render each service */}
          {services.map((service, index) => (
            <li key={index}>
              <div className="service-card">
                <figure className="card-icon">
                  <img src={service.icon} width="60" height="60" loading="lazy" alt="service icon" />
                </figure>
                <h3 className="h3">
                  <a href="#" className="card-title">{service.title}</a>
                </h3>
                <p className="card-text">
                  {service.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <img src={circleShape} width="158" height="158" loading="lazy" alt="" className="shape shape-1" />
        <img src={triangleShape} width="158" height="158" loading="lazy" alt="" className="shape shape-2" />
      </div>
    </section>
  );
}

export default Services;
