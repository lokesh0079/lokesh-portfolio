
import React from "react";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">
        Projects
      </h2>

      <div className="projects">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-actions">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  className="project-action project-demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              )}

              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  className="project-action project-source"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code ↗
                </a>
              )}

              {!project.liveDemo && !project.sourceCode && (
                <span className="project-unavailable">
                  Links coming soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
