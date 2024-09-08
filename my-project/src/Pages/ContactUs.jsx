import { useState } from "react";
import emailjs from "emailjs-com";

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
        "service_vm1mwci", // Replace with your EmailJS service ID
        "template_hxvu2z8", // Replace with your EmailJS template ID
        formData,
        "Mr Engineer" // Replace with your EmailJS user ID
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
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
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
    borderRadius: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    // boxShadow:'5px 5px 25px 4px rgba(0,0,0,0.87)',
    maxWidth: "900px",
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
    width: "95%",
    padding: "15px 20px",
    marginBottom: "20px",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    outline: "none",
    background: "rgba(255, 255, 255, 0.6)",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background 0.3s, box-shadow 0.3s",
  },
  textarea: {
    width: "95%",
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
    borderRadius: "30px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    boxShadow: "0 4px 6px rgba(0, 123, 255, 0.3)",
  },
};

export default ContactUs;
