import React from "react";
import "./Contact.css";

const Contact = () => (
  <section id="contact">
    {/* <h2>Contact</h2> */}
    <div className="cont">
      <div className="con1">
        <p><a href="mailto:nikshepkulli9@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></p>
      </div>
      {/* <div className="con2">
        <p><a href="tel:+1-203-220-1705"><i class="fa fa-phone" aria-hidden="true"></i></a></p>
      </div> */}
      <div className="con3">
        <p><a href="https://www.linkedin.com/in/nikshepkulli/"><i class="fab fa-linkedin" aria-hidden="true"></i></a></p>
      </div>
      <div className="con3">
        <p><a href="https://github.com/nikshepkulli"><i class="fab fa-github" aria-hidden="true"></i></a></p>
      </div>
      {/* <div className="con4">
        <p><a href="https://maps.app.goo.gl/GLsyy1mhuoRJzq9G9"><i class="fa fa-home" aria-hidden="true"></i></a></p>
      </div> */}
    </div>
  </section>
);

export default Contact;
