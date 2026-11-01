
import { useEffect, useState } from "react";

function Hero() {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        function getGreeting() {
            const hour = new Date().getHours();

            if (hour < 12) {
                return "Good Morning";
            }

            if (hour < 17) {
                return "Good Afternoon";
            }

            return "Good Evening";
        }

        setGreeting(getGreeting());
    }, []);

    return (
        <section className="hero-section" id="hero">

            <h1>
                {greeting}, I'm
                <span className="highlight"> Angel 👋</span>
            </h1>

            <p className="tagline">
                I'm a passionate web developer based in Mysuru.
                Also a novice to cybersecurity.
            </p>

            <div className="hero-button">

                <a href="#projects" className="btn btn-primary">
                    View My Work
                </a>

                <a href="#contact" className="btn btn-primary">
                    Contact Me
                </a>

            </div>

        </section>
    );
}

export default Hero;
