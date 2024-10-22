import React, { useRef, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const textRef = useRef();
  const formRef = useRef();
  const [textVisible, setTextVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  // Check if the element is in view
  const isInView = (ref) => {
    const rect = ref.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (isInView(textRef)) {
        setTextVisible(true);
      }
      if (isInView(formRef)) {
        setFormVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm(
        "service_g8mimka",
        "template_jqx1kx9",
        form.current,
        "CIpOqlUdF4dfWwyxR"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          resetForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="marquee">
        <div className="marquee-text">
          SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY
          HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO! SAY HELLO!
          {/* Marquee text content */}
        </div>
      </div>

      <Container className="my-5">
        <div className="flex-container">
          <motion.p
            ref={textRef}
            className="contactText"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: textVisible ? 1 : 0,
              y: textVisible ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            Ready to transform your ideas into digital masterpieces? I’m always
            on the lookout for exciting collaborations and inspiring
            conversations. I’d love to hear from you!
          </motion.p>

          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {() => (
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: formVisible ? 1 : 0,
                  scale: formVisible ? 1 : 0.9,
                }}
                transition={{ duration: 0.5 }}
              >
                <Form className="contact-form" ref={form}>
                  <Field
                    placeholder="Your Name"
                    className="form-control mb-3"
                    type="text"
                    name="name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                  <Field
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="form-control mb-3"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Your Message"
                    className="form-control mb-3"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-danger"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button className="submit-button" type="submit">
                      Send
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

export default ContactForm;
