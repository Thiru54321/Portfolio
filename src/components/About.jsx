import "./About.css";

import {
  FaJava,
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

function About() {
  const technologies = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaDatabase />, name: "MySQL" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJsSquare />, name: "JavaScript" },
  ];

  return (
    <section id="about" className="about">

      <div className="about-left">

        <span className="section-tag">ABOUT ME</span>

        <h2>Passionate Java Full Stack Developer</h2>

        <p>
          I'm a Computer Science Engineering graduate passionate about building
          modern web applications using Java, Spring Boot and React.
        </p>

        <p>
          I enjoy creating responsive websites, scalable backend APIs and clean
          user interfaces that solve real-world problems.
        </p>

        <div className="about-info">

          <div>
            <h3>Location</h3>
            <p>Tamil Nadu, India</p>
          </div>

          <div>
            <h3>Email</h3>
            <p>thiruvalluvan3333@email.com</p>
          </div>

          <div>
            <h3>Availability</h3>
            <p>Open to Work</p>
          </div>

          <div>
            <h3>Experience</h3>
            <p>Java Full Stack Projects</p>
          </div>

        </div>

      </div>


      <div className="about-right">

        <div className="tech-grid">

          {technologies.map((tech) => (
            <div className="tech-card" key={tech.name}>
              <div className="tech-icon">{tech.icon}</div>
              <h4>{tech.name}</h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default About;