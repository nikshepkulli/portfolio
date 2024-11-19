import React from "react";
import "../components/About.css"; // Import the CSS file
import img from "./CTO.jpg";

const About = () => (
  <section id="about">
    <div className="about-container">
      <div className="photo">
        <img src={img} alt="Nikshep Kulkarni" />
      </div>
      <div className="text">
        <p>
          I am the <strong>Chief Technology Officer (CTO) at Starteryou Inc.,</strong> where I lead the vision and strategy for an innovative platform connecting teenagers and college students with meaningful part-time job opportunities. 
        </p>

        <p>
          As a technology leader, I oversee software development, ensuring our technology stack aligns with business objectives, and drive continuous improvement in product offerings. Our tech ecosystem includes React, Vite, Node.js, MongoDB, AWS (EC2, Docker), and robust HTTPS security, emphasizing scalability and efficiency.
        </p>

        <p>
          Previously, as a Research Assistant at Sacred Heart University, I contributed to a 50% reduction in laboratory accidents through innovative solutions. My work involved leveraging Python, R, and SQL for critical projects such as breast cancer prediction, sentiment analysis, and COVID-19 tweet modeling, consistently achieving high accuracy.
        </p>

        <div className="additional-info">
          <div className="paper">
            <p>
              Publication:{" "}
              <a href="https://link.springer.com/chapter/10.1007/978-3-031-53963-3_7">
                COVID-19 Vaccine Response on Social Media Using LDA Analysis
              </a>
            </p>
          </div>
          <div className="paper">
            <p>
              Certifications:{" "}
              <a href="https://github.com/nikshepkulli/niku/tree/master/MongoDB%20Certificates">
                MongoDB Certificates
              </a>{" "}
              |{" "}
              <a href="https://github.com/nikshepkulli/niku/tree/master/Forage%20Certificate">
                Forage Certificates
              </a>
            </p>
          </div>
    {/* <h2>Summary</h2> */}
    <div class="photo">
      <img src={img} alt="Description" />
    </div>
    <div class="text">
      <p>
       I am a passionate technologist with experience as a Software Engineer and a current Adjunct Professor at Sacred Heart University.  While I find teaching rewarding, my ultimate career goal is to become a  Senior Software Engineer or  Data Scientist.  To achieve this, I am currently pursuing a Ph.D. in Computer Science, specializing in data science and machine learning.
        <div class="paper">
          <p>
            Publication:{" "}
            <a href="https://link.springer.com/chapter/10.1007/978-3-031-53963-3_7">
              COVID-19 Vaccine Response on Social Media Using LDA Analysis
            </a>
          </p>
        </div>
        <div class="paper">
          <p>
            Certifications:{" "}
            <a href="https://github.com/nikshepkulli/niku/tree/master/MongoDB%20Certificates">
              MongoDB Certificates
            </a>{" "}
            |{" "}
            <a href="https://github.com/nikshepkulli/niku/tree/master/Forage%20Certificate">
              Forage Certificates
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;