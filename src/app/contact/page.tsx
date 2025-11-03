"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: Integrate backend/email API here
  };

  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Company Info */}
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Info</h2>

            <div className="space-y-5 text-gray-700">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <p>+91 70907 03720, +94 77355 1411</p>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">India Office:</p>
                  <p>
                    ANKIOM SOFT INDIA LLP, #2322, 3rd FLOOR, BLOCK No.II, JANAPRIYA HANUMAREDDY COMPLEX (ARDENTE OFFICE ONE),
                    Sy.No.5, HOODI VILLAGE, K.R.PURAM HOBLI, BANGALORE SOUTH TALUK and BANGALORE, PIN: 560048, KARNATAKA, INDIA.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold">Sri Lanka Office:</p>
                  <p>#36, Barnes Place, Colombo 07, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <p>info@ankiom.com</p>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                title="Ankiom Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.012894570222!2d77.716!3d12.998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e9e36f5b81%3A0xa8a3a79cbec21c3a!2sAnkiom%20Soft%20India%20LLP!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                loading="lazy"
                className="rounded-xl border border-gray-200"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
