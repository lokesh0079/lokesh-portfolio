import React from "react";
import skills from "../data/skill";
function Skills() {
  return (
    <section id="skills">

      <h2 className="section-title">
        Skills
      </h2>

      <div className="skills">

      {skills.map((skill)=>(
        <div className="skill-card" key={skill}>
          {skill}
          </div>
      ))}

      </div>

    </section>
  );
}

export default Skills;