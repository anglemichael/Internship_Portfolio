
function Skills() {

    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "Javascript", level: 70 },
        { name: "React", level: 85 }
    ];

    return (
        <section id="skills" className="skill-section">

            <h2>My Skills</h2>

            <div className="skill-grid">

                {skills.map((skill) => (
                    <div
                        className="skill-item"
                        data-level={skill.level}
                        key={skill.name}
                    >
                        {skill.name}
                    </div>
                ))}

            </div>

        </section>
    );
}

export default Skills;
