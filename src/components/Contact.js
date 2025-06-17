import React from "react";
import "./Contact.css";

const Contact = () => (
  <section id="contact">
    <div className="cont">
      <div className="con1">
        <p>
          <a href="mailto:nikshepkulli9@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </p>
      </div>
      <div className="con3">
        <p>
          <a href="https://www.linkedin.com/in/nikshepkulli/">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </p>
      </div>
      <div className="con3">
        <p>
          <a href="https://github.com/nikshepkulli">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </p>
      </div>
      {/* New YouTube icon */}
      <div className="con3">
        <p>
          <a href="https://www.youtube.com/@Data_Science_In_Kannada">
            <i className="fab fa-youtube" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;