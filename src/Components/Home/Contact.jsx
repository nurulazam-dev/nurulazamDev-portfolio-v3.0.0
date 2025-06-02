"use client";

import { init, sendForm } from "emailjs-com";
import { useState } from "react";
import swal from "sweetalert";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
init("ZQ_e_v_FCvn2tWGZZ");

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const formSubmit = (event) => {
    const form = document.querySelector("#contact-form");
    event.preventDefault();

    sendForm("service_5xq9ask", "template_nzyc51k", "#contact-form").then(
      (result) => {
        swal("Thank You!", "Your email was sent successfully", "success");
        form.reset();
      },
      (error) => {
        swal("Sorry!", "Your email was not sent. Please try again.", "error");
      }
    );
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6">
      <main className="w-full bg-white/90 backdrop-blur rounded-xl shadow-xl p-10 animate-fade-in-up">
        <div className="text-center mb-6">
          <h4 className="uppercase text-blue-600 font-semibold tracking-widest mb-2 animate-fade-in-down">
            Contact Me
          </h4>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fade-in-down">
            I Want To Hear From You
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Details */}
          <div className="md:w-2/5 w-full flex flex-col items-center justify-center animate-fade-in-left">
            <Image
              width={280}
              height={280}
              className="w-70 h-70 object-contain mb-1 drop-shadow-lg"
              src="https://i.ibb.co/wSXk8nP/contact-us.png"
              alt="Contact"
            />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow mb-1 text-center">
              Mohammad Nurul Azam
            </h2>
            <p className="font-semibold text-center text-gray-600 mb-2">
              Web Developer & YouTube Content Creator
            </p>

            <div className="text-gray-700 text-base mb-4">
              <p className="text-gray-600  mb-2">
                I am available for web design and development work. Don’t
                hesitate to reach out!
              </p>
              <div className="mb-1">
                <span className="font-semibold">Phone:</span> +8801881131834
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                nurulazam.dev@gmail.com
              </div>
            </div>
            <div className="text-center mb-2">
              <span className="text-base text-purple-700 font-bold tracking-wide">
                CONNECT WITH ME
              </span>
            </div>
            <div className="flex justify-center gap-4 ">
              <Link
                href="https://www.facebook.com/nurulazam.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon group transition"
              >
                <FaFacebookF className="text-blue-600 text-xl group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
              <Link
                href="https://www.instagram.com/nurulazam_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon group transition"
              >
                <FaInstagram className="text-pink-500 text-xl group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nurulazam-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon group transition"
              >
                <FaLinkedinIn className="text-blue-700 text-xl group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
              <Link
                href="https://twitter.com/nurulazam_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon group transition"
              >
                <FaTwitter className="text-blue-400 text-xl group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          {/* Contact Form */}
          <div className="md:w-3/5 w-full animate-fade-in-right">
            <form id="contact-form" onSubmit={formSubmit} className="space-y-7">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={data.fullName}
                    onChange={InputEvent}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition bg-blue-50/40"
                    placeholder="Your Name"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition bg-blue-50/40"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition bg-blue-50/40"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={data.subject}
                  onChange={InputEvent}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition bg-blue-50/40"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition bg-blue-50/40 resize-none"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded shadow-lg hover:from-blue-700 hover:to-purple-700 transition transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-left {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s both;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.7s both;
        }
        .animate-fade-in-left {
          animation: fade-in-left 1s both;
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s both;
        }
      `}</style>
    </section>
  );
};

export default Contact;
