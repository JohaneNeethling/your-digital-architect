import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./SkillsSection.css";

function Johane() {
  const [visibleSkills, setVisibleSkills] = useState([]);

  const skills = [
    {
      title: "Full-Stack Development",
      desc: "I bring the complete package to web development, managing both the front-end and back-end of applications. Using technologies like React for dynamic interfaces, MongoDB for scalable data management, and Express to connect everything smoothly, I build robust web applications from the ground up.",
    },
    {
      title: "Responsive UI/UX Design",
      desc: "I craft visually appealing and user-friendly interfaces that adapt perfectly to any device. By leveraging HTML, CSS, and React, I ensure that every project is responsive, delivering a seamless experience whether you're on a desktop, tablet, or smartphone.",
    },
    {
      title: "RESTful API Development",
      desc: "Connecting the front end to the back end is my specialty. With Express and Mongoose, I develop fast, scalable, and secure RESTful APIs, ensuring that data flows efficiently between your interface and database, all while maintaining high performance and flexibility.",
    },
    {
      title: "Database Design and Management",
      desc: "Data is the backbone of any web application, and I make sure it's structured, stored, and accessed efficiently. With MongoDB, I design databases that not only scale with your application but are also optimized for performance, ensuring fast data retrieval and seamless integration.",
    },
    {
      title: "Version Control and Collaboration",
      desc: "I believe in clean, organized code, and teamwork. Using Git for version control, I manage and document changes efficiently, making sure that the codebase is always up-to-date. Collaborating through GitHub, I keep projects on track, whether I’m working solo or in a team.",
    },
    {
      title: "Problem-Solving and Debugging",
      desc: "Every web project comes with its challenges, and I’m skilled at tackling them head-on. From optimizing performance to fixing bugs and ensuring stability, my problem-solving mindset and debugging expertise help deliver smooth, high-quality applications.",
    },
  ];

  const handleScroll = () => {
    const skillsElements = document.querySelectorAll(".skill");
    const newVisibleSkills = [];

    skillsElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        newVisibleSkills.push(index);
      }
    });

    setVisibleSkills(newVisibleSkills);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="skills-container">
      <div className="skillsListContainer">
        <Row>
          {skills.map((skill, index) => (
            <Col xs={12} md={6} key={index}>
              <motion.div
                className="skill"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  visibleSkills.includes(index) ? { opacity: 1, y: 0 } : {}
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h5 className="myh5">{skill.title}</h5>
                <p
                  className="skillDesc"
                  style={{ borderTop: "2px solid white", paddingTop: "10px" }}
                >
                  {skill.desc}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Johane;
