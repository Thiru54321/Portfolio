import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 100) {
        setShowNavbar(true);
      } else if (currentScroll < lastScroll) {
        setShowNavbar(true);
      } else if (currentScroll > lastScroll) {
        setShowNavbar(false);
        setMenuOpen(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top mouse trigger */}
      <div
        className="top-hover-area"
        onMouseEnter={() => setShowNavbar(true)}
      ></div>

      <header className={showNavbar ? "navbar show" : "navbar hide"}>

        {/* ================= LOGO ================= */}

        <div className="logo">
          <span className="logo-main">Thiru</span>
          <span className="logo-dot">.</span>
          <span className="logo-dev">dev</span>
        </div>

        {/* ================= NAVIGATION ================= */}

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <a
            href="/Resume.pdf"
            className="resume-btn"
            download="Thiruvalluvan-Resume.pdf"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>

        </nav>

        {/* ================= MOBILE MENU ================= */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </header>
    </>
  );
}

export default Navbar;