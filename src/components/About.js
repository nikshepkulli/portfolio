import React from "react";
import "../components/About.css"; // Import the CSS file
import img from "./img.jpeg";

const About = () => (
  <section id="about">
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
      </p>
    </div>
  </section>
);

export default About;
