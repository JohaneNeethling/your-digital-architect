import React from "react"; // Import React
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Route components for routing
import NavigationBar from "./components/NavigationBar"; // Import navigation bar component
import HeroSection from "./components/HeroSection"; // Import hero section component
import ImJohane from "./components/ImJohane"; // Import introduction component
import SkillsSection from "./components/SkillsSection"; // Import skills section component
import PreviousWorks from "./components/PreviousWorks"; // Import previous works component
import ContactForm from "./components/ContactForm"; // Import contact form component
import Footer from "./components/Footer"; // Import footer component

const App = () => {
  return (
    <Router>
      {" "}
      {/* Set up the Router for routing */}
      <div
        className="App"
        style={{
          backgroundColor: "#151515", // Set background color for the app
          minHeight: "100vh", // Ensure the minimum height covers the full viewport
        }}
      >
        <NavigationBar /> {/* Render the navigation bar */}
        <Routes>
          {" "}
          {/* Define routes for the application */}
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/mywork" element={<MyPreviousWorks />} />{" "}
          {/* Previous works route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact route */}
          <Route path="/aboutme" element={<About />} /> {/* About me route */}
        </Routes>
        <Footer /> {/* Render footer for consistency across pages */}
      </div>
    </Router>
  );
};

// Home component that renders the main sections of the home page
const Home = () => (
  <div>
    <HeroSection /> {/* Render the hero section */}
    <ImJohane /> {/* Render the introduction */}
    <SkillsSection /> {/* Render the skills section */}
    <ContactForm /> {/* Render the contact form */}
  </div>
);

// MyPreviousWorks component that renders previous works and contact form
const MyPreviousWorks = () => (
  <div>
    <PreviousWorks /> {/* Render previous works */}
    <ContactForm /> {/* Render the contact form */}
  </div>
);

// Contact component that renders the contact form
const Contact = () => (
  <div>
    <ContactForm /> {/* Render the contact form */}
  </div>
);

// About component that renders introduction, skills, and contact form
const About = () => (
  <div>
    <ImJohane /> {/* Render the introduction */}
    <SkillsSection /> {/* Render the skills section */}
    <ContactForm /> {/* Render the contact form */}
  </div>
);

export default App; // Export the App component
