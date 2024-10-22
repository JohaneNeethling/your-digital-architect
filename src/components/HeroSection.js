import React from "react"; // Import React
import { Container } from "react-bootstrap"; // Import Bootstrap Container for layout
import "./HeroSection.css"; // Import CSS for styling

const HeroSection = () => (
  <Container
    className="container" // CSS class for the container
    style={{
      height: "80vh", // Set height of the container
      display: "flex", // Use flexbox for layout
      flexDirection: "column", // Arrange children in a column
      justifyContent: "center", // Center children vertically
      alignItems: "center", // Center children horizontally
      fontFamily: 'Poppins", sans-serif', // Font family for text
      background: "none", // No background
      padding: "5rem 1rem", // Padding around the container
    }}
  >
    <h2
      className="animated-text pulsing-text" // CSS classes for animation
      style={{
        color: "white", // Text color
        fontSize: "2.2rem", // Font size
        fontWeight: 600, // Font weight
        opacity: 1, // Opacity
        margin: 0, // Remove default margin
        alignSelf: "flex-start", // Align to the start of the flex container
        width: "100%", // Full width
        textAlign: "left", // Align text to the left
        fontFamily: "Cambria", // Font family for this text
        letterSpacing: "0.1rem", // Spacing between letters
        zIndex: 1, // Stack order
      }}
    >
      LET'S BUILD YOUR
    </h2>
    <div className="digital-home">
      {" "}
      {/* Container for the main heading */}
      <h1
        className="expandable-text" // CSS class for expandable effect
        style={{
          fontSize: "10vw", // Responsive font size based on viewport width
          fontWeight: "bold", // Font weight
          opacity: 1, // Opacity
          textAlign: "center", // Center align text
          letterSpacing: "10px", // Spacing between letters
          color: "#79aeeb", // Text color
          transition: "transform 0.3s ease", // Transition effect for transformation
          fontFamily:
            "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", // Font family for this text
          zIndex: 1, // Stack order
        }}
      >
        DIGITAL HOME
      </h1>
    </div>
    <h2
      className="animated-text pulsing-text" // CSS classes for animation
      style={{
        color: "white", // Text color
        fontSize: "2.2rem", // Font size
        fontWeight: 600, // Font weight
        opacity: 1, // Opacity
        margin: 0, // Remove default margin
        alignSelf: "flex-end", // Align to the end of the flex container
        width: "100%", // Full width
        textAlign: "right", // Align text to the right
        fontFamily: "Cambria", // Font family for this text
        letterSpacing: "0.3rem", // Spacing between letters
        zIndex: 1, // Stack order
        marginRight: "2rem", // Right margin
      }}
    >
      TOGETHER
    </h2>
  </Container>
);

export default HeroSection; // Export the HeroSection component
