import React from "react";
function Hero() {

  return (
    <section className="hero" id="home">

      <div className="hero-text">

        <p className="eyebrow">
          Frontend Developer
        </p>

        <h1>
          Hi, I'm Lokesh Gujrathi
        </h1>

        <h2>
          Building clean, responsive web experiences.
        </h2>

        <p className="hero-description">
          Frontend developer focused on building clean,
          responsive interfaces with HTML, CSS, and
          JavaScript. I enjoy turning ideas into usable
          web experiences and improving UI details.
        </p>

        <p className="availability">
          Open to internships and junior frontend roles
        </p>

        <div className="hero-buttons">

          <a
            href="#contact"
            className="btn btn-primary"
          >
            Contact Me
          </a>

          <a
            href="/Lokesh_Gujrathi_React_Developer_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            View Resume
          </a>

        </div>

        <div className="social">

          <a
            href="https://www.instagram.com/lokeshgujarathi0079/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/lokesh-gujrathi/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a href="https://github.com/lokesh0079">
            <i className="bx bxl-github"></i>
          </a>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="/profile2.jpeg"
          alt="Lokesh Gujrathi"
        />

      </div>

    </section>
  );
}

export default Hero;