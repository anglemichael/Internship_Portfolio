
const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 85 },
];

function Skills() {
    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">

                <p className="section-subtitle">
                    What I work with
                </p>

                <h2 className="section-title">
                    My Skills
                </h2>

                <p className="skills-description">
                    A collection of technologies and tools
                    I use to bring ideas to life.
                </p>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            className="skill-card"
                            key={skill.name}
                            style={{ "--skill-level": `${skill.level}%` }}
                        >
                            <div className="skill-card-heading">
                                <h3>{skill.name}</h3>
                                <span>{skill.level}%</span>
                            </div>

                            <div
                                className="skill-progress"
                                role="progressbar"
                                aria-label={`${skill.name} proficiency`}
                                aria-valuenow={skill.level}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                <div className="skill-progress-fill" />
                            </div>

                            <p className="skill-card-caption">
                                {index === 0 && "Building structured web pages"}
                                {index === 1 && "Creating layouts and styling"}
                                {index === 2 && "Adding interactive functionality"}
                                {index === 3 && "Developing dynamic interfaces"}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;
