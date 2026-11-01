
import { useEffect, useState } from "react";

function Navbar() {
    // Mobile menu state
    const [menuOpen, setMenuOpen] = useState(false);

    // Theme state
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "light"
    );

    // Header scroll state
    const [scrolled, setScrolled] = useState(false);

    // Active navigation link
    const [activeSection, setActiveSection] = useState("");

    // Apply theme to body and save it
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

    // Toggle mobile menu
    function toggleMenu() {
        setMenuOpen((previous) => !previous);
    }

    // Close menu when a navigation link is clicked
    function closeMenu() {
        setMenuOpen(false);
    }

    // Handle scrolling and active navigation
    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll("section[id]");
            let current = "";

            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop - 100) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        }

        function handleResize() {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        handleScroll();

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
