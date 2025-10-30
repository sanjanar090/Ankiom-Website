"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface EmailData {
  from: string;
  subject: string;
  date: string;
}

export default function Contacts() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [lastEmail, setLastEmail] = useState<EmailData | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(" Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message || "✅ Message sent successfully!");

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        // 🕐 Hide message after 3 seconds
        setTimeout(() => setStatus(""), 3000);
      }
    } catch {
      setStatus("⚠️ Something went wrong.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const fetchLastEmail = async () => {
    try {
      const res = await fetch("/api/lastEmail");
      const data = await res.json();
      if (data.success) setLastEmail(data.lastEmail);
      else setLastEmail(null);
    } catch (err) {
      console.error("Error fetching last email:", err);
      setLastEmail(null);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-white py-20 px-4 border-none shadow-none"
    >
     

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to transform your business with AI and IoT?
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: faEnvelope, title: "Email", text: "hello@Ankiom.ai" },
              { icon: faPhone, title: "Phone", text: "+1 (555) 123-4567" },
              { icon: faLocationDot, title: "Location", text: "San Francisco, CA" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-5 border border-gray-100"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
            />

            <button
              type="submit"
              className="px-8 py-2.5 bg-gradient-to-r text-[13px] from-[#2563eb] via-[#3b82f6] to-[#06b6d4] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300"
            >
              Send Message
            </button>

            {status && (
              <p
                className={`text-center text-sm mt-2 transition-all duration-300 ${
                  status.includes("✅")
                    ? "text-green-600"
                    : status.includes("⚠️")
                    ? "text-red-600"
                    : "text-blue-600"
                }`}
              >
                {status}
              </p>
            )}

            {lastEmail && (
              <div className="mt-4 text-gray-800 bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Last Email</h4>
                <p><strong>From:</strong> {lastEmail.from}</p>
                <p><strong>Subject:</strong> {lastEmail.subject}</p>
                <p>
                  <strong>Date:</strong> {new Date(lastEmail.date).toLocaleString()}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
