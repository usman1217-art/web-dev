"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xldoppde"); // ← your Formspree form ID

  return (
    <section className="min-h-screen bg-[#000814] text-white py-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ffc300]">Contact Us</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Get in touch for collaborations, inquiries, or luxury car insights. We’d love to hear from you.
        </p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        
        {/* Contact Form Section (Formspree Integrated) */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-5"
        >
          <h2 className="text-2xl font-semibold mb-2 text-[#ffc300]">Send a Message</h2>

          {state.succeeded ? (
            <p className="text-green-400 text-lg font-medium">✅ Thanks for reaching out! We’ll get back to you soon.</p>
          ) : (
            <>
  <label htmlFor="name" className="text-gray-300">
                Name
              </label>
              <input
                id="name"
                type="name"
                name="name"
                required
                className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />

              <label htmlFor="email" className="text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <label htmlFor="message" className="text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </>
          )}
        </form>
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-[#ffc300] border-b border-gray-700 pb-3">Our Details</h2>
          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" /> ‪+92 312 3031217‬
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-green-400" /> ua031860@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" /> Multan, Punjab, Pakistan
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8 text-2xl">
            <a href="#" className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
