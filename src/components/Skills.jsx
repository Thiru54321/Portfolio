import "./Skills.css";

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";

import { SiSpringboot } from "react-icons/si";


function Skills() {


  const skills = [

    {
      icon: <FaJava />,
      title: "Java",
      level: 90,
      color: "#f89820"
    },


    {
      icon: <SiSpringboot />,
      title: "Spring Boot",
      level: 85,
      color: "#6DB33F"
    },


    {
      icon: <FaReact />,
      title: "React JS",
      level: 85,
      color: "#61DBFB"
    },


    {
      icon: <FaHtml5 />,
      title: "HTML5",
      level: 95,
      color: "#E44D26"
    },


    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      level: 92,
      color: "#264de4"
    },


    {
      icon: <FaJs />,
      title: "JavaScript",
      level: 88,
      color: "#F7DF1E"
    },


    {
      icon: <FaDatabase />,
      title: "MySQL",
      level: 90,
      color: "#00758F"
    },


    {
      icon: <FaGitAlt />,
      title: "Git & GitHub",
      level: 80,
      color: "#F1502F"
    }

  ];



  return (

    <section id="skills" className="skills">


      <div className="skills-header">


        <span>
          MY SKILLS
        </span>


        <h2>
          Technologies I Work With
        </h2>


        <p>
          These are the technologies I use to build responsive,
          scalable and modern full stack applications.
        </p>


      </div>




      <div className="skills-grid">


        {
          skills.map((skill) => (


            <div
              className="skill-card"
              key={skill.title}
            >


              <div
                className="skill-icon"
                style={{
                  color: skill.color
                }}
              >

                {skill.icon}

              </div>



              <h3>
                {skill.title}
              </h3>



              <div className="progress">


                <div
                  className="progress-bar"
                  style={{
                    width: `${skill.level}%`
                  }}
                >

                </div>


              </div>




              <span>
                {skill.level}%
              </span>



            </div>


          ))
        }



      </div>



    </section>

  );

}


export default Skills;