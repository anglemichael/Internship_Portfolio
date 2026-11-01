
import { useState } from "react";

function Projects() {

    // Project information
    const projects = [
        {
            id: 1,
            name: "Weather App",
            category: "web",
            tech: ["React", "API"]
        },
        {
            id: 2,
            name: "Todo App",
            category: "web",
            tech: ["Javascript"]
        },
        {
            id: 3,
            name: "Portfolio",
            category: "design",
            tech: ["HTML, CSS"]
        },
        {
            id: 4,
            name: "Calculator",
            category: "web",
            tech: ["Javascript"]
        }
    ];

    // Selected filter
    const [filter, setFilter] = useState("all");

    // Filter projects
    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter(
                (project) => project.category === filter
            );

    return (
        <section id="projects" className="project-section">

            <h2>My Project</h2>

            <div className="project-filters">

                <button
                    className={`filter btn ${filter === "all" ? "active" : ""}`}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>

                <button
                    className={`filter btn ${filter === "web" ? "active" : ""}`}
                    onClick={() => setFilter("web")}
                >
                    Web
                </button>

                <button
                    className={`filter btn ${filter === "design" ? "active" : ""}`}
                    onClick={() => setFilter("design")}
                >
                    Design
                </button>

            </div>

            <div className="project-grid">

                {filteredProjects.map((project) => (

                    <article className="project-card" key={project.id}>

                        <div className="project-card-body">

                            <h3>{project.name}</h3>

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

                            <a href="#" className="btn btn-primary">
                                View Project
                            </a>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default Projects;
