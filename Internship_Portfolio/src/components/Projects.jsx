
import { useState } from "react";

const projects = [
    {
        id: 1,
        name: "Weather App",
        category: "web",
        tech: ["React", "API"],
        description: "Description not added yet.",
        liveLink: "",
        githubLink: ""
    },
    {
        id: 2,
        name: "Todo App",
        category: "web",
        tech: ["JavaScript"],
        description: "Description not added yet.",
        liveLink: "",
        githubLink: ""
    },
    {
        id: 3,
        name: "Portfolio",
        category: "design",
        tech: ["HTML", "CSS"],
        description: "Description not added yet.",
        liveLink: "",
        githubLink: ""
    },
    {
        id: 4,
        name: "Calculator",
        category: "web",
        tech: ["JavaScript"],
        description: "Description not added yet.",
        liveLink: "",
        githubLink: ""
    }
];

function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filters = ["all", "web", "design"];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter(
                (project) => project.category === activeFilter
            );

    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <p className="section-subtitle">What I've worked on</p>
                <h2 className="section-title">My Projects</h2>

                {/* Project filters */}
                <div className="project-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            className={
                                activeFilter === filter ? "active" : ""
                            }
                            onClick={() => setActiveFilter(filter)}
                            aria-pressed={activeFilter === filter}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Project cards */}
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <article className="project-card" key={project.id}>
                            <div className="project-card-body">
                                <h3>{project.name}</h3>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-tags">
                                    {project.tech.map((technology) => (
                                        <span
                                            className="tag"
                                            key={technology}
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {project.liveLink ? (
                                        <a
                                            href={project.liveLink}
                                            className="btn btn-primary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className="project-link-placeholder">
                                            Live Demo not added
                                        </span>
                                    )}

                                    {project.githubLink ? (
                                        <a
                                            href={project.githubLink}
                                            className="btn btn-secondary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub
                                        </a>
                                    ) : (
                                        <span className="project-link-placeholder">
                                            GitHub link not added
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <p className="no-projects">
                        No projects found in this category.
                    </p>
                )}
            </div>
        </section>
    );
}

export default Projects;
