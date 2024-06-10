const Services = () => {
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

          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img src="./assets/images/service-1.svg" width="60" height="60" loading="lazy" alt="service icon" />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">Mobile Apps</a>
              </h3>
              <p className="card-text">
                We design professional looking yet simple Logo.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img src="./assets/images/service-2.svg" width="60" height="60" loading="lazy" alt="service icon" />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">Branding Strategy</a>
              </h3>
              <p className="card-text">
                We design professional looking yet simple Logo.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img src="./assets/images/service-3.svg" width="60" height="60" loading="lazy" alt="service icon" />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">Graphics Design</a>
              </h3>
              <p className="card-text">
                We design professional looking yet simple Logo.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img src="./assets/images/service-4.svg" width="60" height="60" loading="lazy" alt="service icon" />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">Online Marketing</a>
              </h3>
              <p className="card-text">
                We design professional looking yet simple Logo.
              </p>
            </div>
          </li>

        </ul>

        <img src="./assets/images/circle-shape.svg" width="158" height="158" loading="lazy" alt="" className="shape shape-1" />
        <img src="./assets/images/triangle-shape-1.svg" width="158" height="158" loading="lazy" alt="" className="shape shape-2" />

      </div>
    </section>
  );
}

export default Services;
