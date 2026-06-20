import "./Features.css";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="feature-header">
          <div className="feature-heading">
            <h2>
              Why <span>Compliance Matters</span> For Research Analysts
            </h2>
            <img src="/assets/Vector2.png" alt="" className="feature-arrow" />
          </div>

          <div className="feature-description">
            <p>
              In Today's Regulatory Environment, Even A Small Oversight Can Lead
              To Penalties, Reputaional Risks, And Loss Of Client Trust. We Help
              Research Analysts and Firms Navigate Complex Compliance
              Requirements So They Can Focus On Delivering High-Quality Research
              Without Worry.
            </p>
          </div>
        </div>

        <div className="feature-body">
          <div className="feature-image">
            <img
              src="/assets/Section2-Image.png"
              alt="Compliance Illustration"
              className="main-feature-image"
            />

            <img
              src="/assets/Vector1.png"
              alt=""
              className="decorative-shape"
            />
          </div>

          <div className="feature-cards">
            <FeatureCard
              icon="/assets/Regulatory Clarity.png"
              title="Regulatory Clarity"
              desc="We Decode Complex Compliance Rules Into Simple, Actionable Steps."
            />
            <FeatureCard
              icon="/assets/Hassle-Free Filings Clarity.png"
              title="Hassle-Free Filings"
              desc="From Registration To Ongoing Reporting—We Manage it End-To-End."
            />
            <FeatureCard
              icon="/assets/Risk Protection.png"
              title="Risk Protection"
              desc="Stay Ahead Of Audits, Inspections, And Compliance Gaps With Proactive Support."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
