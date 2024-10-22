import React from "react"; // Import React
import { Navbar, Nav } from "react-bootstrap"; // Import Navbar and Nav components from React Bootstrap
import { Link } from "react-router-dom"; // Import Link component from React Router
import "./NavigationBar.css"; // Import CSS for styling

// Style object for the brand name in the navbar
const navbarBrandStyle = {
  color: "#79aeeb", // Brand text color
  fontWeight: "bold", // Font weight
  fontSize: "2rem", // Font size
  transition: "color 0.3s ease", // Transition effect for color change
  padding: "10px 15px", // Padding around the brand
  marginLeft: "10px", // Left margin
  borderRadius: "5px", // Rounded corners
  borderColor: "#79aeeb", // Border color
  borderWidth: "3px", // Border width
  borderStyle: "solid", // Solid border style
};

const NavigationBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      {" "}
      {/* Navbar container with custom class */}
      <Navbar.Brand as={Link} to="/" style={navbarBrandStyle}>
        {" "}
        {/* Brand name linked to home */}
        The Digital Architect
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
      {/* Toggle button for mobile view */}
      <Navbar.Collapse id="basic-navbar-nav">
        {" "}
        {/* Collapsible part of the navbar */}
        <Nav className="ms-auto">
          {" "}
          {/* Navigation links container, aligned to the right */}
          <Nav.Link as={Link} to="/" className="nav-link">
            {" "}
            {/* Link to home */}
            Home
          </Nav.Link>{" "}
          <a
            href="https://www.hyperiondev.com/portfolio/JN24060015073/" // Link to report card
            rel="noopener noreferrer" // Prevents the new page from accessing the window object
            target="_blank" // Opens link in a new tab
            className="nav-link" // CSS class for styling
          >
            Report Card
          </a>
          <Nav.Link as={Link} to="/mywork" className="nav-link">
            {" "}
            {/* Link to previous works */}
            Previous Works
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">
            {" "}
            {/* Link to contact page */}
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/aboutme" className="nav-link">
            {" "}
            {/* Link to about me page */}
            About Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar; // Export the NavigationBar component
