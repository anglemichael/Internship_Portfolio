
import { useEffect, useState } from "react";

function Navbar() {

    // 1. Mobile menu state
    const [menuOpen, setMenuOpen] = useState(false);

    // 2. Load saved theme from localStorage
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    // 3. Header shadow state
    const [scrolled, setScrolled] = useState(false);

    // 4. Active navigation section
    const [activeSection, setActiveSection] = useState("");

    // Apply and save theme whenever it changes
    useEffect(() => {
        document.body.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle dark/light mode
    function toggleTheme() {
        setTheme((previousTheme) =>
            previousTheme === "light" ? "dark" : "light"
        );
    }

    // Toggle mobile navigation
    function toggleMenu() {
        setMenuOpen((previous) => !previous);
    }

    // Close mobile navigation
    function closeMenu() {
        setMenuOpen(false);
    }

    // Handle scrolling and window resizing
    useEffect(() => {

        function handleScroll() {

            // Header shadow
            setScrolled(window.scrollY > 50);

            // Find active section
            const sections = document.querySelectorAll("section[id]");

            let current = "";

            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop - 100) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        }

        // Close mobile menu on desktop screen sizes
        function handleResize() {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        // Set correct initial scroll state
        handleScroll();

        // Remove listeners when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    return (
        <header className={`site-header ${scrolled ? "scrolled" : ""}`}>

            <nav className="navbar">

                <div className="logo">AEB</div>

                <ul className={`nav-link ${menuOpen ? "open" : ""}`}>

                    <li>
                        <a
                            href="#about"
                            className={activeSection === "about" ? "active" : ""}
                            onClick={closeMenu}
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            className={activeSection === "skills" ? "active" : ""}
                            onClick={closeMenu}
                        >
                            Abilities
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className={activeSection === "projects" ? "active" : ""}
                            onClick={closeMenu}
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className={activeSection === "contact" ? "active" : ""}
                            onClick={closeMenu}
                        >
                            Contact
                        </a>
                    </li>

                </ul>

                <button
                    className="theme-toggle"
                    aria-label="Toggle dark mode"
                    title="Toggle dark mode"
                    onClick={toggleTheme}
                >
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>

                <button
                    className="menu-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    ≡
                </button>

            </nav>

        </header>
    );
}

export default Navbar;
