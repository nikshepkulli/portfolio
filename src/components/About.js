import React from "react";
import "../components/About.css"; // Import the CSS file
import img from "./img.jpeg";


const About = () => (
  <section id="about">
    {/* <h2>Summary</h2> */}
    <div class="photo">
    <img src={img} alt="Description of the image" />
    </div>
    <div class="text">
    <p>
      I am a Ph.D. candidate in Computer Science, specializing in data science
      and machine learning. As a Research Assistant at Sacred Heart University,
      I've dedicated myself to advancing the field, contributing to a 50%
      reduction in laboratory accidents. My academic focus includes using
      Python, R, and SQL for projects like breast cancer prediction, sentiment
      analysis, and COVID-19 tweet modeling, achieving consistently high
      accuracy. In a Data Science Virtual Intern role at British Airways, I
      refined skills in web scraping and predictive modeling, employing tools
      such as Beautiful Soup, Scikit-learn, and Random Forest. With over four
      years as a Software Engineer at Cerner Corporation, I enhanced AI and
      ML-based life-saving technology, improved data collection frameworks, and
      streamlined workflows. Proficient in Java, C, C++, C#, JS, and big data
      technologies, I integrated Agile and semantic versioning methodologies.
      Driven by a passion for applying data science and machine learning to
      solve real-world challenges and drive business growth, I am ready to make
      meaningful contributions to the academic community and push the boundaries
      of knowledge in computer science during my Ph.D. journey.
      <div class="paper">
      <p>Publication: <a href="https://link.springer.com/chapter/10.1007/978-3-031-53963-3_7">COVID-19 Vaccine Response on Social Media Using LDA Analysis</a></p>
      </div>
      <div class="paper">
      <p>Certifications: <a href="https://github.com/nikshepkulli/niku/tree/master/MongoDB%20Certificates">MongoDB Certificates</a> | <a href="https://github.com/nikshepkulli/niku/tree/master/Forage%20Certificate">Forage Certificates</a></p>
      </div>
     </p>
    </div>
     
  </section>
);

export default About;
