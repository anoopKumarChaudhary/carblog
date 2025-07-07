"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CarCard from "../components/CarCard";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    alert(
      "✅ Your message has been submitted (but not really — no backend yet!)"
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div>
      {" "}
      <CarCard
        url={"./bmw15.jpg"}
        name={"BMW M5 CS"}
        content={
          "The BMW M5 CS is the most powerful M5 ever built, featuring a 4.4-liter twin-turbo V8 with 627 hp. This limited-edition sports sedan delivers blistering performance, exclusive styling, and track-tuned handling."
        }
      />{" "}
      <main className="min-h-screen bg-gradient-to-br from-black via-[#0c0c0c] to-black text-white px-6 pt-24 pb-20 md:px-16 lg:px-40 font-sans">
        <motion.h1
          className="text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Wed love to hear from you. Whether you have a question, feedback, or
          just want to say hello — drop us a message below!
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-[#181818] p-10 rounded-2xl shadow-lg border border-[#2c2c2c] space-y-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {["name", "email", "subject", "message"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-semibold mb-2 capitalize"
              >
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  rows={5}
                  placeholder={`Enter your ${field}`}
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full p-4 rounded-md bg-[#101010] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#f25252] resize-none transition"
                />
              ) : (
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={`Enter your ${field}`}
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full p-4 rounded-md bg-[#101010] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#f25252] transition"
                />
              )}
              {errors[field] && (
                <p className="text-red-400 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#f25252] hover:bg-[#e04343] text-white font-semibold text-lg py-3 rounded-md transition-all duration-200"
          >
            Send Message
          </motion.button>
        </motion.form>
      </main>
    </div>
  );
};

export default Contact;
