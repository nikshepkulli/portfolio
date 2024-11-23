import React from 'react';
import './SkillDisplay.css';

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" },
      { name: "R", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/724px-R_logo.svg.png" },
      { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
      { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" },
      { name: "Python", logo: "https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg" },
      { name: "C#", logo: "https://banner2.cleanpng.com/20180831/iua/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b89919299aab1.1956912415357423546294.jpg" }
    ]
  },
  {
    category: "Big Data / Database",
    items: [
      { name: "Hadoop", logo: "https://serviot.com/wp-content/uploads/2020/09/Hadoop-logo.png" },
      { name: "Cassandra", logo: "https://bi-insider.com/wp-content/uploads/2022/02/apache-cassandra-logo.png" },
      { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" }
    ]
  },
  {
    category: "ML / AI Libraries and Tools",
    items: [
      { name: "Keras", logo: "https://keras.io/img/logo.png" },
      { name: "Pandas", logo: "https://preview.redd.it/c6h7rok9c2v31.jpg?auto=webp&s=55820f5f994a744ff9d774fa2c6b3b56539a302f" },
      { name: "NumPy", logo: "https://numpy.org/images/numpy-image.jpg" },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png" },
      { name: "Jupyter", logo: "https://i0.wp.com/softwareengineeringdaily.com/wp-content/uploads/2018/07/jupyter-logo-featured-image.png?fit=600%2C315&ssl=1" },
      { name: "Pytest", logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1657098680857/FoZEEuklb.png?auto=compress,format&format=webp" },
      { name: "NLTK", logo: "https://miro.medium.com/v2/resize:fit:1400/1*-dNH8WI8Oy3etClaRvRCgw.png" },
      { name: "SpaCy", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/SpaCy_logo.svg/2560px-SpaCy_logo.svg.png" },
      { name: "Hugging Face", logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo-with-title.png" },
      { name: "Seaborn", logo: "https://seaborn.pydata.org/_images/logo-wide-lightbg.svg" },
      { name: "Matplotlib", logo: "https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png" }
    ]
  },
  {
    category: "DevOps / Tools",
    items: [
      { name: "Jira", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/2560px-Jira_Logo.svg.png" },
      { name: "Jenkins", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jenkins_logo_with_title.svg/1280px-Jenkins_logo_with_title.svg.png" },
      { name: "PostgreSQL", logo: "https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png" },
      { name: "Airflow", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png" },
      { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png" },
      { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Docker-svgrepo-com.svg/640px-Docker-svgrepo-com.svg.png" },
      { name: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/640px-Kubernetes_logo_without_workmark.svg.png" }

    ]
  },
  {
    category: "OS / Frameworks",
    items: [
      { name: "Linux", logo: "https://1000logos.net/wp-content/uploads/2017/03/Symbol-Linux.jpg" },
      { name: "Windows", logo: "https://pentagram-production.imgix.net/ea053844-c063-4130-9425-4a193f82e1e3/ps_windows_01.jpg?crop=edges&fit=crop&h=630&rect=67%2C364%2C1665%2C1040&w=1200" },
      { name: "Spring", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/2560px-Spring_Framework_Logo_2018.svg.png" },
      { name: "Hibernate", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Hibernate_logo_a.png" },
      { name: "Django", logo: "https://www.djangoproject.com/m/img/logos/django-logo-positive.png" }
    ]
  },
  {
    category: "Visualization Tools",
    items: [
      { name: "Tableau", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tableau_Logo.png/640px-Tableau_Logo.png" }
    ]
  }
];

const SkillsDisplay = () => {
  return (
    <div className="skills-display-container">
  <h2>Technical Skills</h2>
  
  <div className="skills-grid">
    {skills.map((skillCategory, index) => (
      <div className="skill-card" key={index}>
        <div className="skill-card-content">
          <h3 className="skill-category-name">
            {skillCategory.category}
          </h3>
          
          <div className="skill-items-grid">
            {skillCategory.items.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <div className="skill-logo">
                  <img
                    src={skill.logo} // Use the actual logo URL here
                    alt={`${skill.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default SkillsDisplay;
