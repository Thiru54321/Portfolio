import "./Services.css";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCloud
} from "react-icons/fa";

function Services() {

  const services = [

    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description:
        "Responsive and modern user interfaces using HTML5, CSS3, JavaScript and React."
    },

    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Scalable REST APIs using Java, Spring Boot, Spring Data JPA and Spring Security."
    },

    {
      icon: <FaDatabase />,
      title: "Database Design",
      description:
        "Designing efficient MySQL databases with optimized queries and relationships."
    },

    {
      icon: <FaCode />,
      title: "Full Stack Projects",
      description:
        "Complete web applications from frontend to backend with authentication and CRUD operations."
    },

    {
      icon: <FaMobileAlt />,
      title: "Responsive Websites",
      description:
        "Mobile-friendly websites that work smoothly on desktop, tablet and mobile devices."
    },

    {
      icon: <FaCloud />,
      title: "Deployment",
      description:
        "Deploying React applications and Spring Boot projects with Git and cloud platforms."
    }

  ];


  return (

    <section
      id="services"
      className="services"
    >

      <div className="services-header">

        <span>WHAT I DO</span>

        <h2>My Services</h2>

        <p>
          I build modern, fast and scalable applications using
          Java Full Stack technologies.
        </p>

      </div>


      <div className="services-grid">

        {services.map((service, index) => (

          <div
            key={index}
            className="service-card"
          >

            <div className="service-icon">
              {service.icon}
            </div>


            <h3>
              {service.title}
            </h3>


            <p>
              {service.description}
            </p>


          </div>

        ))}

      </div>


    </section>

  );

}

export default Services;