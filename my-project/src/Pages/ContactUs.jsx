import { useState } from "react";
import emailjs from "emailjs-com";
import Layout from "../components/Layout";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "", // Replace with your EmailJS service ID
        "", // Replace with your EmailJS template ID
        formData,
        "" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Failed to send your message. Please try again.");
      });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Layout>
      <div style={styles.container}>
        <form
          style={styles.form}
          className="shadow-md rounded-md"
          onSubmit={handleSubmit}
        >
          <h2 style={styles.title}>CONTACT US</h2>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="Subjct"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            style={styles.textarea}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button style={styles.button} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    padding: "20px",
    backdropFilter: "blur(10px)",
  },
  form: {
    background: "rgba(250, 250, 250, 0.3)",
    padding: "40px 30px",
    maxWidth: "90%",
    width: "100%",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  },
  title: {
    fontSize: "29px",
    marginBottom: "25px",
    color: "rgb(71,71,71)",
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "15px 20px",
    marginBottom: "20px",
    border: "none",
    borderRadius: "3px",
    fontSize: "16px",
    outline: "none",
    background: "rgba(255, 255, 255, 0.6)",
    boxShadow: "inset 0 2px 2px rgba(0, 0, 0, 0.1)",
    transition: "background 0.3s, box-shadow 0.3s",
  },
  textarea: {
    width: "100%",
    padding: "15px 20px",
    marginBottom: "20px",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    outline: "none",
    background: "rgba(255, 255, 255, 0.6)",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background 0.3s, box-shadow 0.3s",
    minHeight: "120px",
    resize: "vertical",
  },
  button: {
    width: "100%",
    padding: "15px",
    backgroundColor: "rgb(0,198,200)",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    boxShadow: "0 4px 6px rgba(0, 123, 255, 0.3)",
  },
};

export default ContactUs;
