import heroBanner from '../assets/images/hero-banner.png'
import heroShape from '../assets/images/hero-shape-1.svg'
const Hero = () => {
  return (
    <section className="section hero" id="home" aria-label="home">
      <div className="container">

        <div className="hero-content">

          <h1 className="h1 section-title">
            Digital <span className="span">product</span> design agency
          </h1>

          <p className="section-text">
            Create live segments and target the right people for messages based on their behaviors.
          </p>

          <button className="btn btn-secondary">Get Started</button>

        </div>

        <figure className="hero-banner has-shape">

          <img src={heroBanner} width="521" height="675" alt="hero banner" className="w-100" />

          <img src={heroShape} width="106" height="78" alt="" className="shape" />

        </figure>

      </div>
    </section>
  );
}

export default Hero;
