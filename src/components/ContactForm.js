import React, { useRef } from "react"; // Import React and useRef for referencing DOM elements
import { Formik, Form, Field, ErrorMessage } from "formik"; // Import Formik components for form handling
import * as Yup from "yup"; // Import Yup for form validation schema
import { Button, Container } from "react-bootstrap"; // Import Bootstrap components for styling
import emailjs from "@emailjs/browser"; // Import EmailJS for sending emails
import { motion, useInView } from "framer-motion"; // Import Framer Motion for animations
import "./ContactForm.css"; // Import custom styles for the contact form

const ContactForm = () => {
  const form = useRef(); // Create a reference for the form element
  const textRef = useRef(); // Reference for the text element to animate
  const formRef = useRef(); // Reference for the form element to animate

  // Check if the text element is in view for animations
  const isTextInView = useInView(textRef, { once: true });
  // Check if the form element is in view for animations
  const isFormInView = useInView(formRef, { once: true });

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"), // Name field is required
    email: Yup.string().email("Invalid email").required("Email is required"), // Email field is required and must be a valid email
    message: Yup.string().required("Message is required"), // Message field is required
  });

  // Function to send email using EmailJS
  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm(
        "service_g8mimka", // Your EmailJS service ID
        "template_jqx1kx9", // Your EmailJS template ID
        form.current, // The form element reference
        "CIpOqlUdF4dfWwyxR" // Your EmailJS user ID
      )
      .then(
        () => {
          console.log("SUCCESS!"); // Log success message
          resetForm(); // Reset the form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text); // Log error message if submission fails
        }
      );
  };

  return (
    <>
      {/* Marquee text for attention */}
      <div className="marquee">
        <div className="marquee-text">
          SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO!{" "}
          {/* Repeated marquee text */}
        </div>
      </div>

      {/* Container for the contact form */}
      <Container className="my-5">
        <div className="flex-container">
          {/* Animated introductory text */}
          <motion.p
            ref={textRef} // Reference to the text element for animation
            className="contactText"
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{
              opacity: isTextInView ? 1 : 0, // Fade in when in view
              y: isTextInView ? 0 : 20, // Slide up when in view
            }}
            transition={{ duration: 0.5 }} // Animation duration
          >
            Ready to transform your ideas into digital masterpieces? I’m always
            on the lookout for exciting collaborations and inspiring
            conversations. Whether you're a fellow architect in the digital
            realm, a visionary with a bold project, or someone who just wants to
            share a thought, I’d love to hear from you!{" "}
            {/* Introductory text content */}
          </motion.p>

          {/* Formik form for handling form state and validation */}
          <Formik
            initialValues={{ name: "", email: "", message: "" }} // Initial form values
            validationSchema={validationSchema} // Validation schema
            onSubmit={sendEmail} // Submit function
          >
            {() => (
              <motion.div
                ref={formRef} // Reference to the form element for animation
                initial={{ opacity: 0, y: 20 }} // Initial animation state
                animate={{
                  opacity: isFormInView ? 1 : 0, // Fade in when in view
                  y: isFormInView ? 0 : 20, // Slide up when in view
                }}
                transition={{ duration: 0.5 }} // Animation duration
              >
                {/* Form component */}
                <Form className="contact-form" ref={form}>
                  <Field
                    placeholder="Your Name" // Placeholder for name field
                    className="form-control mb-3" // Bootstrap styling
                    type="text"
                    name="name" // Field name
                  />
                  <ErrorMessage
                    name="name"
                    component="div" // Error message component
                    className="text-danger" // Error styling
                  />
                  <Field
                    name="email" // Field name for email
                    type="email" // Input type
                    placeholder="Your Email" // Placeholder for email field
                    className="form-control mb-3" // Bootstrap styling
                  />
                  <ErrorMessage
                    name="email"
                    component="div" // Error message component
                    className="text-danger" // Error styling
                  />
                  <Field
                    name="message" // Field name for message
                    as="textarea" // Input type
                    placeholder="Your Message" // Placeholder for message field
                    className="form-control mb-3" // Bootstrap styling
                  />
                  <ErrorMessage
                    name="message"
                    component="div" // Error message component
                    className="text-danger" // Error styling
                  />
                  {/* Submit button with animation on hover */}
                  <motion.div
                    whileHover={{ scale: 1.05 }} // Scale effect on hover
                    transition={{ duration: 0.3 }} // Animation duration
                  >
                    <Button className="submit-button" type="submit">
                      Send {/* Button text */}
                    </Button>
                  </motion.div>
                </Form>
              </motion.div>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
};

export default ContactForm; // Export the ContactForm component
