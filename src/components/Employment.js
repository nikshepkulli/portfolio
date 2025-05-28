import React from "react";
import "./Employment.css"; // Import the CSS file

const Employment = () => (
  <section id="employment">
    <h2>Experience's:</h2>
    <div class="jobs">
       {/* New Job: Chief Technology Officer at Starteryous */}
<div className="job">
  <p class="header"><strong>Senior Software Engineer</strong></p>
  <p>Starteryou Inc., New York, United States (Remote)</p>
  <p>Jul 2024 - Present</p>
  <ul>
    <li>
      1. Lead the vision and strategy for an innovative platform connecting teenagers and college students with meaningful part-time job opportunities.
    </li>
    <li>
      2. Oversee development of robust software solutions using a modern tech stack:
      <ul>
        <li>Front-end: React with Vite, Bootstrap</li>
        <li>Back-end: Node.js</li>
        <li>Database: MongoDB</li>
        <li>Infrastructure: AWS (EC2), Docker, Kubernetes</li>
      </ul>
    </li>
    <li>
      3. Implement secure communication protocols and manage SSL certificates.
    </li>
    <li>
      4. Utilize GitHub for source control and CI/CD processes.
    </li>
    <li>
      5. Design scalable, container-based infrastructure with plans for Kubernetes orchestration.
    </li>
    <li>
      6. Mentor emerging tech talent and foster a culture of innovation.
    </li>
    <li>
      7. Ensure user-centric platform development and continuous technological improvement.
    </li>
  </ul>
</div>
    <div className="job">
      <p class="header"><strong>Adjunct Professor</strong></p>
      <p>Sacred Heart University, Fairfield, CT</p>
      <p>Jan 2024 - Present</p>
      <ul>
        <li>
          1. As an Adjunct Professor since January, I specialize in instructing courses on Data Science Architecture, Big Data, Data Structures, MongoDB, and Text-Based Analysis. 
        </li>
        <li>
          2. Employing interactive teaching methods to facilitate deep understanding and engagement.
        </li>
        <li>
          3. My focus is on integrating industry insights, fostering engagement through interactive teaching methods and updating course material to reflect the latest advancements.
        </li>
        <li>
          4. Integrating industry expertise to offer practical insights and real-world applications.
        </li>
      </ul>
    </div>
    <div className="job">
      <p class="header"><strong>Data Science Virtual Intern</strong></p>
      <p>British Airways, Fairfield, CT</p>
      <p>May 2023 - May 2023</p>
      <ul>
        <li>
          1. Developed web scraping techniques using tools like Beautiful Soup to
          extract valuable data from websites.
        </li>
        <li>
          2. Performed data analysis and visualization using Python libraries like
          Seaborn, NumPy, and Pandas.
        </li>
        <li>
          3. Uncovered competitor strategies, market dynamics, and customer
          behavior to facilitate data-driven decision-making.
        </li>
        <li>
          4. Predicted Customer Buying Behavior using machine learning expertise
          and Scikit-learn/Random Forest algorithms, achieving 85% accuracy.
        </li>
        <li>
          5. Empowered the company to tailor marketing strategies, enhance customer
          segmentation, and optimize business operations for sales growth and
          customer satisfaction.
        </li>
      </ul>
    </div>
   
    {/* Job 1: Research Assistant at Sacred Heart University */}
    <div className="job">
      <p class="header"><strong>Research Assistant</strong></p>
      <p>Sacred Heart University, Fairfield, CT</p>
      <p>Jan 2023 - May 2023</p>
      <ul>
        <li>
          1. Achieved 95% accuracy in breast cancer prediction using linear
          regression on the Scikit dataset.
        </li>
        <li>
          2. Conducted sentiment analysis on tweets with an 85% accuracy rate.
        </li>
        <li>
          3. Identified prevalent topics and sentiments in COVID-19 tweets using
          LDA analysis.
        </li>
        <li>
          4. Designed Vinyl Rack for the IDEA Lab, resulting in a 30% increase in
          storage capacity and an award for outstanding creativity and
          innovation.
        </li>
        <li>
          5. Accomplishments showcase the ability to deliver impactful results,
          utilizing data-driven approaches that improve business outcomes.
        </li>
        <li>
          6. Possesses strong analytical skills and the ability to work with large
          datasets, making for a valuable asset in any research or data-driven
          project.
        </li>
      </ul>
    </div>

    {/* Job 2: Software Engineer II at Oracle Cerner, Bengaluru, India */}
    <div className="job">
      <p class="header"><strong>Software Engineer II</strong></p>
      <p>Oracle Cerner, Bengaluru, India</p>
      <p>Dec 2019 – Aug 2022</p>
      <ul>
        <li>
          1. Managed releases and improved features such as CPDI and WTSLocation
          for the Operations team, reducing workload by 50% for Kansas City
          counterparts and reducing bugs.
        </li>
        <li>
          2. Revamped data collection framework using Olympus and Jetstream
          frameworks, resulting in a 20% increase in data accuracy and a 30%
          reduction in processing time.
        </li>
        <li>
          3. Improved script management process by implementing centralized changes
          and resolved crash gather requests, resulting in a 25% reduction in
          crash reports and an increase in customer satisfaction.
        </li>
      </ul>
    </div>

    {/* Job 3: Software Engineer at 6D Technologies, Bengaluru, India */}
    <div className="job">
    <p class="header"><strong>Software Engineer</strong></p>
      <p>6D Technologies, Bengaluru, India</p>
      <p>Aug 2019 – Dec 2019</p>
      <ul>
        <li>
          1. Developed SMSC GUI for clients in Vietnam and Indonesia and served as
          React UI and Backend Developer for Sony Ericsson’s Campaign Manager
          System (MAGIK), resulting in a 40% increase in system efficiency and a
          25% reduction in system downtime.
        </li>
      </ul>
    </div>

    {/* Job 4: Embedded Software Engineer at Probots Techno Solutions, Bengaluru, India */}
    <div className="job">
    <p class="header"><strong>Embedded Software Engineer</strong></p>
      <p>Probots Techno Solutions, Bengaluru, India</p>
      <p>Jun 2018 – Jul 2019</p>
      <ul>
        <li>
          1. Developed an Android app for kidney dialysis reprocessing machine,
          resulting in a 15% increase in machine communication efficiency and a
          20% reduction in communication errors.
        </li>
        <li>
          2. Created a C# app with REST API for Collin Aerospace evacuation-slide
          fabric tester, resulting in a 30% reduction in testing time and a 25%
          increase in testing accuracy.
        </li>
        <li>
          3. Devised a GPS tracking Android application for Alpine star using
          Google API and an Arduino Mini.
        </li>
      </ul>
    </div>

    </div>
    {/* Repeat the above structure for other employment details */}
  </section>
);

export default Employment;
