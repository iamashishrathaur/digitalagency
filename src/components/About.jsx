import aboutBanner from '../assets/images/about-banner.png'
import bannerShape from '../assets/images/banner-shape.svg'

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">

        <figure className="about-banner has-shape">
          <img src={aboutBanner} width="500" height="611" loading="lazy" alt="about banner" className="w-100" />
          <img src={bannerShape} width="108" height="86" loading="lazy" alt="" className="shape" />
        </figure>

        <div className="about-content">
          <h2 className="h2 section-title">
            We've been helping <span className="span">customers</span> globally.
          </h2>

          <p className="section-text">
            Aliquam tristique libero at dui sodales, et placerat orci lobortis. Donec metus lorem, vulputate at sapien sit amet,
            auctor iaculis lorem.
          </p>

          <a href="#" className="btn btn-outline">More About Us</a>
        </div>

      </div>
    </section>
  );
}

export default About;
