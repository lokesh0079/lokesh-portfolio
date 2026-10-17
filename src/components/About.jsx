import React from "react";


function About() {
  return (
  <section id="about">
  <div className="container">

    <h2 className="about-subtitle">ABOUT ME</h2>

    <h2 className="about-title">
      I am a Computer Science B.Tech Student
    </h2>

    <p className="about-text">
      I am a frontend developer focused on building clean and
      responsive web applications. I enjoy working with HTML,
      CSS, JavaScript and React to create useful web experiences.
    </p>

    <p className="about-text">
      I am currently pursuing my B.Tech in Computer Science and
      Engineering and looking for opportunities to grow as a
      frontend developer.
    </p>

    <div className="row g-4 mt-4">

      <div className="col-md-4">
        <div className="about-card">
          <h6>Education</h6>
          <p>B.Tech CSE</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="about-card">
          <h6>Location</h6>
          <p>Maharashtra</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="about-card">
          <h6>Focus</h6>
          <p>Frontend Development</p>
        </div>
      </div>

    </div>

  </div>
</section>
  );
}

export default About;