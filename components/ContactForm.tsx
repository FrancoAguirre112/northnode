"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser"; // Import the correct EmailJS browser SDK

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(""); // <-- Add state for subject
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // e.g., "success", "error", "loading", ""
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default page reload

    // Basic validation including subject
    if (!name || !email || !subject || !message) {
      // <-- Add subject check
      setStatus("Por favor rellene todos los campos.");
      // Clear status message after a few seconds (optional)
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    setIsLoading(true);
    setStatus("loading"); // Indicate loading state

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are loaded
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not set properly.");
      setStatus("Configuration error. Cannot send email.");
      setIsLoading(false);
      return;
    }

    // Prepare the template parameters object
    // Ensure these keys match the variables in your EmailJS template
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Your Name/Company Name", // Or whoever the email is addressed to in the template
      subject: subject, // <-- Add subject state here (matches {{subject}} in template)
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success"); // Set status to success
        setName(""); // Clear form fields
        setEmail("");
        setSubject(""); // <-- Clear subject field
        setMessage("");
        // Optionally clear success message after a few seconds
        setTimeout(() => setStatus(""), 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("error"); // Set status to error
        // Optionally clear error message after a few seconds
        setTimeout(() => setStatus(""), 4000);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading regardless of outcome
      });
  };

  // Determine status message and color
  let statusMessage = "";
  let statusColorClass = "";

  if (status === "success") {
    statusMessage = "Gracias por contactarnos!";
    statusColorClass = "text-green-600";
  } else if (status === "error") {
    statusMessage = "Por favor intenta nuevamente";
    statusColorClass = "text-red-600";
  } else if (status === "loading") {
    statusMessage = "Enviando...";
    statusColorClass = "text-gray-600";
  } else if (status) {
    // Handle initial validation message or other statuses
    statusMessage = status;
    statusColorClass = "text-red-600";
  }

  return (
    <div className="py-24 text-[#333a52] rounded-lg shadow-md px-96 bg-[#0d1018]">
      <h2 className="text-2xl font-semibold mb-20 text-left text-white">
        Contactanos
      </h2>
      <form onSubmit={handleSubmit} noValidate id="contacto">
        {/* Add noValidate to rely on JS validation/status */}
        {/* Name Field */}
        <section className="flex justify-between gap-10">
          <div className="mb-4 w-1/3">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              className="shadow appearance-none border-b border-[#3f465f] placeholder-[#3f465f] py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          {/* Email Field */}
          <div className="mb-4 w-1/3">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="shadow appearance-none border-b border-[#3f465f] placeholder-[#3f465f] py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          {/* Subject Field - New */}
          <div className="mb-4 w-1/3">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Asunto"
              className="shadow appearance-none border-b border-[#3f465f] placeholder-[#3f465f] py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border w-full"
              value={subject}
              onChange={(e) => setSubject(e.target.value)} // <-- Update subject state
              required
              aria-required="true"
            />
          </div>
        </section>

        {/* Message Field */}
        <div className="mb-6">
          <textarea
            id="message"
            name="message"
            placeholder="Escribinos tu mensaje"
            className="shadow appearance-none border-b border-[#3f465f] placeholder-[#3f465f] w-full py-1 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            aria-required="true"
          />
        </div>
        {/* Submit Button */}
        <div className="flex items-center justify-between self-start">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/4 transition duration-150 ease-in-out ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
        {/* Status Message Area */}
        {statusMessage && (
          <p
            className={`mt-4 text-center text-sm font-medium ${statusColorClass}`}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
