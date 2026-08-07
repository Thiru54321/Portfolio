// import { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";


// function Navbar() {

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);


//   useEffect(() => {

//     let lastScroll = window.scrollY;


//     const handleScroll = () => {

//       const currentScroll = window.scrollY;


//       if (currentScroll < lastScroll) {

//         setShowNavbar(true);

//       }
//       else if (currentScroll > 100) {

//         setShowNavbar(false);
//         setMenuOpen(false);

//       }


//       lastScroll = currentScroll;

//     };


//     window.addEventListener(
//       "scroll",
//       handleScroll
//     );


//     return () => {

//       window.removeEventListener(
//         "scroll",
//         handleScroll
//       );

//     };


//   }, []);



//   return (

//     <>

//       {/* Mouse hover area */}

//       <div
//         className="top-hover-area"
//         onMouseEnter={() => setShowNavbar(true)}
//       ></div>



//       <header
//         className={
//           showNavbar
//             ? "navbar show"
//             : "navbar hide"
//         }
//       >



//         <div className="logo">

//           <span>
//             Thiru.dev
//           </span>

//         </div>




//         <nav
//           className={
//             menuOpen
//               ? "nav-links active"
//               : "nav-links"
//           }
//         >


//           <a href="#home">
//             Home
//           </a>


//           <a href="#about">
//             About
//           </a>


//           <a href="#skills">
//             Skills
//           </a>


//           <a href="#projects">
//             Projects
//           </a>


//           <a href="#services">
//             Services
//           </a>


//           <a href="#contact">
//             Contact
//           </a>



//           <a
//             href="/resume.pdf"
//             className="resume-btn"
//             download
//           >

//             Resume

//           </a>


//         </nav>




//         <div
//           className="menu-icon"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >

//           {
//             menuOpen
//               ? <FaTimes />
//               : <FaBars />
//           }

//         </div>



//       </header>


//     </>

//   );

// }


// export default Navbar;

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

      // At the top, always show navbar
      if (currentScroll <= 100) {
        setShowNavbar(true);
      }
      // Scrolling up
      else if (currentScroll < lastScroll) {
        setShowNavbar(true);
      }
      // Scrolling down
      else if (currentScroll > lastScroll) {
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
      {/* Mouse hover area */}
      <div
        className="top-hover-area"
        onMouseEnter={() => setShowNavbar(true)}
      ></div>

      <header className={showNavbar ? "navbar show" : "navbar hide"}>
        {/* Logo */}
        <div className="logo">
          <span>Thiru.dev</span>
        </div>

        {/* Navigation */}
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

          {/* Resume */}
          <a
            href="/Resume.pdf"
            className="resume-btn"
            download="Thiruvalluvan-Resume.pdf"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
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