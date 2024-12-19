export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Shreyash</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Machine Learning</span>{" "}
            <br />
            Enthusiast
          </h1>
          <p className="hero--section-description">
          Passionate about crafting AI-driven solutions for real-world impact
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Untitled Project (1).jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
