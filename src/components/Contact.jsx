import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm();

  const form = useRef();
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Watch form values to show floating labels
  const watchedValues = watch();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_tnkagkv", "template_8bekcnp", form.current, {
        publicKey: "10wIsJEHVe6tcHh8j",
      })
      .then(
        () => {
          toast.success("Your message has been sent");
          setIsSubmitting(false);
        },
        (error) => {
          toast.error("Something went wrong", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-${(i % 4) + 1} ${
                6 + (i % 4)
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        name="Contact"
        className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 py-24"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            style={{
              animation: "fade-in-up 0.8s ease-out forwards",
            }}
          >
            Contact Me
          </h1>
          <div
            className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 rounded-full"
            style={{
              width: "0",
              animation: "expand 1s ease-out 0.5s forwards",
            }}
          ></div>
          <p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{
              animation: "fade-in-up 0.8s ease-out 0.2s forwards",
              opacity: 0,
            }}
          >
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20"
            style={{
              animation: "fade-in-up 0.8s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Send Your Message
            </h2>

            <div className="space-y-8">
              {/* Name Field */}
              <div className="relative group">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="from_name"
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-white placeholder-transparent focus:outline-none transition-all duration-300 peer ${
                    errors.name
                      ? "border-red-400 focus:border-red-400"
                      : focusedField === "name"
                      ? "border-cyan-400 focus:border-cyan-400 shadow-lg shadow-cyan-400/25"
                      : "border-white/30 hover:border-white/50"
                  }`}
                  placeholder="Enter your full name"
                />
                <label
                  className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                    watchedValues?.name || focusedField === "name"
                      ? "-top-3 text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"
                      : "top-4 text-white/70"
                  }`}
                >
                  Full Name
                </label>
                {/* Animated underline */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                    focusedField === "name" ? "w-full" : "w-0"
                  }`}
                ></div>
                {errors.name && (
                  <span
                    className="text-red-400 text-sm mt-2 block"
                    style={{ animation: "shake 0.5s ease-in-out" }}
                  >
                    This field is required
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="relative group">
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="from_email"
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-white placeholder-transparent focus:outline-none transition-all duration-300 peer ${
                    errors.email
                      ? "border-red-400 focus:border-red-400"
                      : focusedField === "email"
                      ? "border-purple-400 focus:border-purple-400 shadow-lg shadow-purple-400/25"
                      : "border-white/30 hover:border-white/50"
                  }`}
                  placeholder="Enter your email address"
                />
                <label
                  className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                    watchedValues?.email || focusedField === "email"
                      ? "-top-3 text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
                      : "top-4 text-white/70"
                  }`}
                >
                  Email Address
                </label>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    focusedField === "email" ? "w-full" : "w-0"
                  }`}
                ></div>
                {errors.email && (
                  <span
                    className="text-red-400 text-sm mt-2 block"
                    style={{ animation: "shake 0.5s ease-in-out" }}
                  >
                    This field is required
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="relative group">
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  name="message"
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-white placeholder-transparent focus:outline-none transition-all duration-300 resize-none peer ${
                    errors.message
                      ? "border-red-400 focus:border-red-400"
                      : focusedField === "message"
                      ? "border-pink-400 focus:border-pink-400 shadow-lg shadow-pink-400/25"
                      : "border-white/30 hover:border-white/50"
                  }`}
                  placeholder="Enter your message here..."
                />
                <label
                  className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                    watchedValues?.message || focusedField === "message"
                      ? "-top-3 text-sm bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent font-semibold"
                      : "top-4 text-white/70"
                  }`}
                >
                  Message
                </label>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 transition-all duration-300 ${
                    focusedField === "message" ? "w-full" : "w-0"
                  }`}
                ></div>
                {errors.message && (
                  <span
                    className="text-red-400 text-sm mt-2 block"
                    style={{ animation: "shake 0.5s ease-in-out" }}
                  >
                    This field is required
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Button content */}
                <div className="relative flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(90deg);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(270deg);
          }
        }
        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-35px) rotate(45deg);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
      `}</style>
    </div>
  );
}
