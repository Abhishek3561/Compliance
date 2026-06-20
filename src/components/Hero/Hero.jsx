import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-content">
          <h1>
            Simplifying
            <br />
            <span className="compliance-wrapper">
              Compliance
              <img
                src="/assets/underline-Vector.png"
                alt=""
                className="underline-vector"
              />
            </span>{" "}
            For
            <br />
            Research Analysts
          </h1>

          <p className="hero-description">
            Stay Focused On Your Insights—We'll Handle The Compliance. Our
            Expert Solutions Ensure Your Research Practices Meet Every
            Regulatory Requirement With Confidence And Ease
          </p>

          <div className="points">
            <div className="point">
              <img src="/assets/check-sign.png" alt="" />
              <span>End-To-End Compliance Support</span>
            </div>
            <div className="point">
              <img src="/assets/check-sign.png" alt="" />
              <span>Regulatory Filings Made Simple</span>
            </div>
            <div className="point">
              <img src="/assets/check-sign.png" alt="" />
              <span>Tailored Solutions For Independent Analysts & Firms</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Book A Consultation</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/assets/Banner Image.png"
            alt="Research analyst illustration"
            className="banner-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
