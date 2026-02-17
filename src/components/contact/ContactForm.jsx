"use client";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-5"
    >
      <h2 className="text-2xl font-semibold mb-3">✉ Send Message</h2>

      <input
        name="name"
        onChange={handleChange}
        placeholder="Your Name"
        className="input input-bordered w-full"
        required
      />

      <input
        name="email"
        onChange={handleChange}
        type="email"
        placeholder="Your Email"
        className="input input-bordered w-full"
        required
      />

      <textarea
        name="message"
        onChange={handleChange}
        placeholder="Your Message"
        className="textarea textarea-bordered w-full h-32"
        required
      />

      <button className="btn btn-primary w-full">Send Message</button>
    </form>
  );
};

export default ContactForm;
