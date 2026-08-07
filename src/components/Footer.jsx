// 


import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-brand">

          <h2>
            Thiru<span>.dev</span>
          </h2>

          <p>
            Java Full Stack Developer passionate about
            building modern, scalable and responsive web
            applications using Java, Spring Boot, React and MySQL.
          </p>

        </div>

        {/* Quick Links */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#services">Services</a>

          <a href="#contact">Contact</a>

        </div>

        {/* Contact */}
        <div className="footer-contact">

          <h3>Connect</h3>

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=thiruvalluvan3333@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
            thiruvalluvan3333@gmail.com
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Thiru54321"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/thiruvalluvan-891111244/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © {year} Thiruvalluvan. Made with{" "}
          <FaHeart className="heart" /> using React.
        </p>

        <button
          className="top-button"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;