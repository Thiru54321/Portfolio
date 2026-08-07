// import "./Projects.css";

// import {
//   FaUserGraduate,
//   FaCloudSun,
//   FaJava,
//   FaReact,
//   FaDatabase,
//   FaCode
// } from "react-icons/fa";

// function Projects() {


//   const projects = [

//     {
//       icon: <FaUserGraduate />,

//       title: "Student Management System",

//       description:
//         "A full stack student management application to manage student records, add, update, delete and search student details with secure backend APIs.",


//       technologies: [
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "Bootstrap",
//         "Java",
//         "Spring Boot",
//         "MySQL",
//         "Spring Data JPA",
//         "Lombok",
//         "DevTools"
//       ],


//       color: "blue"
//     },



//     {

//       icon: <FaCloudSun />,

//       title: "Weather Application",

//       description:
//         "A live weather application that provides real-time weather information and location based historical search using Weather API integration.",


//       technologies: [

//         "HTML",
//         "CSS",
//         "JavaScript",
//         "React JS",
//         "Spring Boot",
//         "MySQL",
//         "Weather API",
//         "Spring JPA",
//         "Lombok",
//         "DevTools"

//       ],


//       color: "pink"

//     }

//   ];




//   return (

//     <section className="projects" id="projects">


//       <div className="projects-header">


//         <span>MY PROJECTS</span>


//         <h2>
//           Featured Work
//         </h2>


//         <p>
//           Some of my full stack projects built using modern frontend
//           and backend technologies.
//         </p>


//       </div>





//       <div className="projects-grid">


//         {
//           projects.map((project, index) => (


//             <div
//               className={`project-card ${project.color}`}
//               key={index}
//             >



//               <div className="project-icon">

//                 {project.icon}

//               </div>



//               <h3>
//                 {project.title}
//               </h3>



//               <p>
//                 {project.description}
//               </p>




//               <div className="tech-list">


//                 {
//                   project.technologies.map((tech, i) => (


//                     <span key={i}>
//                       {tech}
//                     </span>


//                   ))
//                 }


//               </div>




//               <button className="project-btn">

//                 View Project

//               </button>



//             </div>


//           ))
//         }


//       </div>


//     </section>

//   )

// }


// export default Projects;

import "./Projects.css";

import {
  FaUserGraduate,
  FaCloudSun
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      icon: <FaUserGraduate />,
      title: "Student Management System",
      description:
        "A full stack student management application to manage student records, add, update, delete and search student details with secure backend APIs.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Java",
        "Spring Boot",
        "MySQL",
        "Spring Data JPA",
        "Lombok",
        "DevTools"
      ],
      color: "blue",
      github: "https://github.com/Thiru54321"
    },

    {
      icon: <FaCloudSun />,
      title: "Weather Application",
      description:
        "A live weather application that provides real-time weather information and location based historical search using Weather API integration.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Spring Boot",
        "MySQL",
        "Weather API",
        "Spring JPA",
        "Lombok",
        "DevTools"
      ],
      color: "pink",
      github: "https://github.com/Thiru54321/weather-app"
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="projects-header">
        <span>MY PROJECTS</span>

        <h2>
          Featured Work
        </h2>

        <p>
          Some of my full stack projects built using modern frontend
          and backend technologies.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            className={`project-card ${project.color}`}
            key={index}
          >

            <div className="project-icon">
              {project.icon}
            </div>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="tech-list">

              {project.technologies.map((tech, i) => (
                <span key={i}>
                  {tech}
                </span>
              ))}

            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;