import React, { useEffect, useRef, useState } from "react"; // Import necessary React hooks
import "./Footer.css"; // Import custom styles for the footer
import { Link } from "react-router-dom"; // Import Link for client-side routing

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track footer visibility
  const footerRef = useRef(null); // Create a reference for the footer element

  useEffect(() => {
    // Store the footer element in a variable to prevent changes during cleanup
    const footerElement = footerRef.current;

    // Create an intersection observer to observe the footer's visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility state to true if the footer is in view
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the footer is visible
      }
    );

    // Observe the footer element if it exists
    if (footerElement) {
      observer.observe(footerElement);
    }

    // Cleanup function to unobserve the footer when the component unmounts
    return () => {
      if (footerElement) {
        observer.unobserve(footerElement); // Use the stored element for cleanup
      }
    };
  }, []); // Empty dependency array to run effect only on mount and unmount

  return (
    <footer className={`footer ${isVisible ? "fade-in" : ""}`} ref={footerRef}>
      {/* Add fade-in class if the footer is visible */}
      <div className="footer-content">
        <h2>Your Digital Architect</h2> {/* Footer heading */}
        <p>
          &copy; {new Date().getFullYear()} Johane Neethling. All rights
          reserved. {/* Current year and copyright notice */}
        </p>
        <div className="social-links">
          {/* Links to external and internal pages */}
          <a
            href="https://www.hyperiondev.com/portfolio/JN24060015073/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Report Card" // Accessibility label for the link
          >
            Report Card
          </a>
          <Link to="/mywork">Previous Works</Link>{" "}
          {/* Internal link to Previous Works */}
          <a
            href="https://github.com/JohaneNeethling"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub" // Accessibility label for the link
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/johane-neethling-474179321/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn" // Accessibility label for the link
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component
