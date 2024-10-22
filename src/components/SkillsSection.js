import React, { useEffect } from "react"; // Import React and useEffect hook
import { Row, Col } from "react-bootstrap"; // Import Bootstrap grid components
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion for animations
import { useInView } from "react-intersection-observer"; // To detect when elements are in view
import "./SkillsSection.css"; // Import custom styles for the skills section

function Johane() {
  // Animation variants for fade-in and sliding effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 }, // Initial state when not in view
    visible: { opacity: 1, y: 0 }, // Final state when in view
  };

  // Controls for scroll-triggered animations
  const controls = useAnimation(); // Animation controls from Framer Motion
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // Detect when 20% of the section is visible

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start animation when the section is in view
    }
  }, [controls, inView]); // Dependencies: controls and inView

  return (
    <div className="skills-container">
      <div className="skillsListContainer" ref={ref}>
        <Row>
          {/* List of skills with titles and descriptions */}
          {[
            {
              title: "Full-Stack Development",
              desc: "Proficient in both front-end and back-end technologies, ensuring seamless user experiences and robust functionality.",
            },
            {
              title: "Responsive Design",
              desc: "Expertise in creating visually appealing websites that adapt beautifully to any device, enhancing user engagement.",
            },
            {
              title: "JavaScript & React",
              desc: "Strong command of JavaScript and React for building dynamic, interactive web applications.",
            },
            {
              title: "HTML & CSS",
              desc: "Solid foundation in HTML and CSS for crafting clean, accessible, and well-structured code.",
            },
            {
              title: "Version Control with Git",
              desc: "Familiarity with Git for efficient collaboration and version management on projects.",
            },
            {
              title: "Client Collaboration",
              desc: "Strong communication skills to understand client needs and deliver tailored solutions.",
            },
          ].map((skill, index) => (
            <Col xs={12} md={6} key={index}>
              {" "}
              {/* Responsive grid layout */}
              <motion.div
                className="skill"
                initial="hidden" // Set initial animation state
                animate={controls} // Control the animation based on scroll
                variants={fadeIn} // Apply fade-in variants
                transition={{ duration: 0.5, delay: index * 0.1 }} // Animation duration and delay for staggered effect
                whileHover={{ scale: 1.05 }} // Hover effect for scaling up
              >
                <h5 className="myh5">{skill.title}</h5> {/* Skill title */}
                <p
                  className="skillDesc"
                  style={{ borderTop: "2px solid white", paddingTop: "10px" }} // Custom styling for description
                >
                  {skill.desc} {/* Skill description */}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Johane; // Export the Johane component
