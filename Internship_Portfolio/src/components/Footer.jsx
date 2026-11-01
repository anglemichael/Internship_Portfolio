
function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">

            <p>
                &copy; {currentYear} Angel Biju.
                All rights reserved.
            </p>

            <nav aria-label="Social media links">

                <a href="mailto:your-email@example.com">
                    Email
                </a>

                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>

                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Linkedin
                </a>

            </nav>

        </footer>
    );
}

export default Footer;
