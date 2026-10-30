
"use client";
import React from "react";
import Link from "next/link";

import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white text-white flex items-center justify-center px-6 py-20">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 ">

        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <span className="text-red-500 font-semibold tracking-widest uppercase text-sm">
            Get in touch
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-black mt-4">
            Let's talk about
            <span className="text-red-500"> food.</span>
          </h1>

          <p className="text-zinc-400 mt-6 leading-7 max-w-md">
            Have a question, suggestion, or just want to say hello?
            We'd love to hear from you. Get in touch with our team!
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex items-center gap-4">
              <div className="bg-red-500/10 p-4 rounded-xl text-red-500">
                <FaPhone size={20} />
              </div>
              <div>
                <p className="text-zinc-400 text-sm">Phone</p>
                <p className="font-semibold text-zinc-800">+1 234 567 890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-red-500/10 p-4   rounded-xl text-red-500">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-zinc-400 text-sm">Email</p>
                <p className="font-semibold text-zinc-800">hello@restaurant.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-red-500/10 p-4 rounded-xl text-red-500">
                <FaLocationDot size={20} />
              </div>
              <div>
                <p className="text-zinc-400 text-sm">Location</p>
                <p className="font-semibold text-zinc-800">123 Food Street, New York</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className=" border shadow-amber-400 border-zinc-800 p-8 md:p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
          <p className="text-zinc-400 mb-8">
            We'd love to hear what you think.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-2 text-zinc-300">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full  border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-zinc-300">
                Your Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full  border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-zinc-300">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full  border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-zinc-300">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full  border border-zinc-700 rounded-xl px-4 py-3 outline-none resize-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1"
            >
              Send Message →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
