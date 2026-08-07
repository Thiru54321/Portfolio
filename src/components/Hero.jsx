import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/photo.webp";

function Hero() {
  return (
    <section id="home" className="hero">

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

          {/* GitHub / Hire Me */}
          <a
            href="https://github.com/Thiru54321"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Hire Me
          </a>


          {/* Scroll to Projects */}
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

        <div className="profile-circle">

          <img
            src={profileImage}
            alt="Thiruvalluvan Profile"
          />

        </div>

      </div>


    </section>
  );
}


export default Hero;