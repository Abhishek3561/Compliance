function FeatureCard({ icon, title, desc }) {
  return (
    <div className="feature-card">

      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

    </div>
  );
}

export default FeatureCard;
