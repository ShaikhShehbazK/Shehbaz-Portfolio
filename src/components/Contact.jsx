import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tnkagkv", "template_8bekcnp", form.current, {
        publicKey: "10wIsJEHVe6tcHh8j",
      })
      .then(
        () => {
          toast.success("Your message has been sent");
        },
        (error) => {
          toast.error("Something went wrong", error);
        }
      );
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-24 bg-gradient-to-b from-gray-50 to-white shadow-lg rounded-2xl"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-8 border-b pb-4">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>

        <div className="w-full flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-2xl bg-orange-100 rounded-xl shadow-lg p-8 space-y-6"
          >
            <h2 className="text-3xl font-bold text-emerald-600 mb-6">
              Send Your Message
            </h2>

            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="from_name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500 transition duration-200 bg-white"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                name="from_email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500 transition duration-200 bg-white"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                rows={4}
                name="message"
                placeholder="Enter your message here..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500 transition duration-200 resize-none bg-white"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
