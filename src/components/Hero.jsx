import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-bg">
        <span className="particle p1"></span>
        <span className="particle p2"></span>
        <span className="particle p3"></span>
        <span className="particle p4"></span>
        <span className="particle p5"></span>
      </div>

      <div className="hero-left">

        <p className="welcome">
          👋 Hello, I'm
        </p>

        <h1>
          Thiruvalluvan
        </h1>

        <h2>
          Java Full Stack Developer
        </h2>

        <p className="description">
          I build responsive websites and scalable web applications using
          HTML, CSS, JavaScript, React, Java, Spring Boot and MySQL.
        </p>

        <div className="hero-buttons">

          <a
            href="https://github.com/Thiru54321"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="btn-outline"
          >
            View Projects
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/Thiru54321"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/thiruvalluvan-891111244/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=thiruvalluvan3333@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="scene">

          <div className="glow"></div>

          <div className="ring ring1"></div>
          <div className="ring ring2"></div>

          <div className="profile-card">

            <div className="card-shine"></div>

            <div className="profile-circle">
              <img
                src={profileImage}
                alt="Thiruvalluvan Profile"
              />
            </div>

            <div className="floating-tag tag1">
              Java
            </div>

            <div className="floating-tag tag2">
              React
            </div>

            <div className="floating-tag tag3">
              Spring Boot
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;