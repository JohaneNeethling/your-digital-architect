import React, { useEffect, useRef } from "react"; // Import React and hooks
import "./ImJohane.css"; // Import custom styles for the component
import ProfilePic from "./images/JohaneNeethling.jpeg"; // Import profile picture
import { Button } from "react-bootstrap"; // Import Bootstrap button component
import { Link } from "react-router-dom"; // Import Link for client-side routing

function Johane() {
  const profileContainerRef = useRef(null); // Create a reference for the profile container

  // UseEffect hook to set up the Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    const elements =
      profileContainerRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []); // Empty dependency array to run the effect only on mount

  return (
    <>
      <div className="johaneDiv">
        <div className="profileContainer" ref={profileContainerRef}>
          <img
            src={ProfilePic} // Profile picture
            alt="Johane Neethling" // Alt text for the image
            className="profilePic animate-on-scroll" // Class for styling and animation
          />
          <p className="profileBio animate-on-scroll">
            {" "}
            {/* Profile bio */}
            <div className="introText">Hi, I'm Johane.</div>{" "}
            {/* Introduction text */}
            As a passionate web developer and proud recipient of a coding
            bursary, I am dedicated to mastering the art of digital creation.{" "}
            {/* Bio text */}
            Currently at the top of my class with a 99% average, I thrive on
            challenges and continuously seek to expand my knowledge in web
            development. My journey allows me to design and build digital homes
            that are not only visually appealing but also functional and
            user-friendly. Feel free to check out my previous works, or even my
            report card at{" "}
            <a
              href="https://www.hyperiondev.com/" // Link to HyperionDev
              rel="noopener noreferrer" // Prevents the new page from accessing the window object
              target="_blank" // Opens link in a new tab
            >
              HyperionDev
            </a>
            !
          </p>
          {/* Button linking to report card */}
          <a
            href="https://www.hyperiondev.com/portfolio/JN24060015073/"
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Prevents the new page from accessing the window object
          >
            <Button className="report-button animate-on-scroll">
              My Report Card
            </Button>
          </a>
          {/* Link to previous works page */}
          <Link to="/mywork">
            <Button className="portfolio-button animate-on-scroll">
              Previous Works
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Johane; // Export the Johane component
