import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import emailjs from "@emailjs/browser";


function Contact() {


  const sendEmail = (e) => {

    e.preventDefault();


    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_PUBLIC_KEY"
    )

    .then(() => {

      alert("Message sent successfully!");

      e.target.reset();

    })

    .catch((error)=>{

      console.log(error);

      alert("Failed to send message");

    });


  };



  return (

    <section id="contact" className="contact">


      <div className="contact-header">

        <span>CONTACT</span>

        <h2>
          Let's Build Something Great
        </h2>


        <p>
          Looking for a Java Full Stack Developer?
          I'm available for internships, freelance
          projects and full-time opportunities.
        </p>


      </div>




      <div className="contact-container">



        <div className="contact-info">



          <div className="info-card">

            <FaEnvelope className="info-icon"/>

            <div>

              <h3>Email</h3>

              <p>
                thiruvalluvan3333@email.com
              </p>

            </div>

          </div>




          <div className="info-card">


            <FaPhoneAlt className="info-icon"/>


            <div>

              <h3>Phone</h3>

              <p>
                +91 8015503537
              </p>

            </div>


          </div>





          <div className="info-card">


            <FaMapMarkerAlt className="info-icon"/>


            <div>

              <h3>Location</h3>

              <p>
                Tamil Nadu, India
              </p>

            </div>


          </div>






          <div className="social-links">


            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >

              <FaGithub/>

            </a>





            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >

              <FaLinkedin/>

            </a>



          </div>



        </div>






        <form 
          className="contact-form"
          onSubmit={sendEmail}
        >



          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />



          <input
            type="email"
            name="from_email"
            placeholder="Email Address"
            required
          />



          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />



          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          />



          <button type="submit">

            Send Message

          </button>



        </form>




      </div>



    </section>

  );

}



export default Contact;