import { useState } from "react";
import React from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://formspree.io/f/xpqdpebd",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully ✅");
        form.reset();
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="container">

        <h2 className="section-title text-center">
          Contact Me
        </h2>

        <p className="contact-description text-center">
          Feel free to reach out for frontend roles,
          internships, or collaborations.
        </p>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="row g-4">

            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="col-12">
              <textarea
                name="message"
                rows="5"
                className="form-control"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

          </div>

          <div className="text-center">
            <button type="submit">
              Send Message
            </button>
          </div>
        </form>

        <p className="contact-details text-center">
          📧 lokeshgujarathi0079@gmail.com
          &nbsp; | &nbsp;
          📍 India
        </p>

        <p className="status text-center">
          {status}
        </p>

      </div>
    </footer>
  );
}

export default Contact;