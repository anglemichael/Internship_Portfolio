
function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
        return "Good Morning";
    } else if (hour < 17) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

function Hero() {
    const greeting = getGreeting();

    return (
        <section className="hero-section" id="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">{greeting}!</p>

                    <h1>
                        I'm <span className="highlight">Angel.</span>
                    </h1>

                    <p className="tagline">
                        I'm a passionate web developer based in Mysuru.
                        Also a novice to cybersecurity.
                    </p>

                    <div className="hero-button">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>

                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img
                        src="/images/Profile.jpg"
                        alt="Portrait of Angel"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
