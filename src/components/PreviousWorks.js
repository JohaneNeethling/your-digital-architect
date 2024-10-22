import Card from "react-bootstrap/Card"; // Import Card component from React Bootstrap
import ListGroup from "react-bootstrap/ListGroup"; // Import ListGroup component from React Bootstrap
import { motion } from "framer-motion"; // Import motion for animations
import "./PreviousWorks.css"; // Import CSS for styling
import NeetLogo from "./images/NeetLogo1.png"; // Import image for Neethling Ingenieurs
import Jean from "./images/JeanAndre.jpg"; // Import image for Jean-Andre du Plessis
import { Button } from "react-bootstrap"; // Import Button component from React Bootstrap

function MyWorks() {
  // Array containing data for each card
  const cardData = [
    {
      title: "Neethling Ingenieurs", // Title for the first project
      text: "We had a fantastic experience working with Johane at Neethling Development. They designed a visually stunning and functional website for our steel construction company, perfectly capturing our brand and showcasing our projects. Johane was professional, attentive, and dedicated to ensuring our satisfaction. Since launching the site, we've seen a noticeable increase in inquiries.",
      image: NeetLogo, // Image for the first project
      listItems: ["Mr. JPJ Neethling - Owner & CEO"], // List of associated individuals
      link: "https://neethling-ingenieurs.onrender.com/", // Link to the project
    },
    {
      title: "CV of Jean-Andre du Plessis", // Title for the second project
      text: "I couldn't be happier with the online CV designed by Johane. It truly captures my professional journey and highlights my skills in a way that stands out. The layout is both modern and user-friendly, making it easy for potential employers to navigate. Johane's attention to detail and creativity made the whole process enjoyable. I highly recommend her services to anyone looking to elevate their professional presence online.",
      image: Jean, // Image for the second project
      listItems: ["Mr. Jean-Andre du Plessis - Young Professional"], // List of associated individuals
      link: "https://cv-of-jean-andre.onrender.com", // Link to the project
    },
  ];

  return (
    <div className="card-container">
      {" "}
      {/* Container for the cards */}
      {cardData.map(
        (
          item,
          index // Map through cardData to create cards
        ) => (
          <motion.div
            key={index} // Unique key for each card
            initial={{ opacity: 0, scale: 0.5 }} // Initial animation state
            animate={{ opacity: 1, scale: 1 }} // Animation to apply when in view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Transition properties
            whileHover={{ scale: 1.05, rotate: 3 }} // Animation on hover
            className="card-wrapper" // Wrapper class for styling
          >
            <Card className="card">
              {" "}
              {/* Bootstrap card component */}
              <motion.div className="card-img-top">
                {" "}
                {/* Animated image container */}
                <Card.Img variant="top" src={item.image} />{" "}
                {/* Project image */}
              </motion.div>
              <Card.Body>
                <Card.Title className="cardTitle">{item.title}</Card.Title>{" "}
                {/* Card title */}
                <Card.Text>{item.text}</Card.Text> {/* Description text */}
                <div className="button-container">
                  <a href={item.link} rel="noopener noreferrer" target="_blank">
                    {" "}
                    {/* Link to project */}
                    <Button className="peak-button" type="button">
                      {" "}
                      {/* Button to sneak a peak */}
                      Sneak A Peak
                    </Button>
                  </a>
                </div>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {" "}
                {/* List group for associated individuals */}
                {item.listItems.map(
                  (
                    listItem,
                    index // Map through listItems
                  ) => (
                    <ListGroup.Item className="listItem" key={index}>
                      {" "}
                      {/* Individual list item */}- {listItem}
                    </ListGroup.Item>
                  )
                )}
              </ListGroup>
            </Card>
          </motion.div>
        )
      )}
    </div>
  );
}

export default MyWorks; // Export the MyWorks component
