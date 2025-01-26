"use client";
import React, { useEffect, useState } from "react";
import DP from "./dp.jpg";
import {
  Github,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  WhatsApp,
  PhoneCall,
  Mail,
  MapPin,
  Code,
  Terminal,
  Award,
  Zap,
  Database,
  Server,
} from "lucide-react";
import Image from "next/image";

const OmarPortfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  const socialLinks = [
    {
      icon: (
        <Github
          size={32}
          className="text-gray-400 hover:text-gray-500 transition-colors"
        />
      ),
      href: "https://github.com/cslomarfaruk",
    },
    {
      icon: (
        <Facebook
          size={32}
          className="text-sky-400 hover:text-sky-300 transition-colors"
        />
      ),
      href: "https://facebook.com/cslomarfaruk1",
    },
    {
      icon: (
        <PhoneCall
          size={32}
          className="text-green-400 hover:text-green-300 transition-colors"
        />
      ),
      href: "https://wa.me/+8801839467728",
    },
    {
      icon: (
        <Linkedin
          size={32}
          className="text-sky-400 hover:text-sky-300 transition-colors"
        />
      ),
      href: "https://linkedin.com/in/csl-omarfaruk",
    },
    {
      icon: (
        <Instagram
          size={32}
          className="text-pink-400 hover:text-pink-300 transition-colors"
        />
      ),
      href: "https://instagram.com/cslomarfaruk",
    },
    {
      icon: (
        <Twitter
          size={32}
          className="text-sky-400 hover:text-sky-300 transition-colors"
        />
      ),
      href: "https://x.com/cslomarfaruk",
    },
  ];

  const skills = [
    { name: "React.js", icon: <Code size={16} /> },
    { name: "Next.js", icon: <Terminal size={16} /> },
    { name: "Firebase", icon: <Zap size={16} /> },
    { name: "MongoDB", icon: <Database size={16} /> },
    { name: "MySQL", icon: <Server size={16} /> },
    { name: "Full-stack Dev", icon: <Award size={16} /> },
  ];

  const contactDetails = [
    { icon: <PhoneCall size={20} />, text: "+8801 839-467728" },
    { icon: <PhoneCall size={20} />, text: "+8801 796-127821" },
    { icon: <Mail size={20} />, text: "cslomarfaruk@gmail.com" },
    { icon: <MapPin size={20} />, text: "Sylhet, Bangladesh" },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-black"
          : "bg-gradient-to-br from-blue-50 to-blue-100"
      } flex items-center justify-center p-4 relative overflow-hidden`}
    >
      {/* Animated Background */}
      <div
        className={`absolute inset-0 opacity-20 ${
          isDarkMode ? "bg-grid-white/[0.05]" : "bg-grid-black/[0.05]"
        }`}
      ></div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4 bg-gray-800 dark:bg-white text-white dark:text-black p-2 rounded-full hover:scale-110 transition-transform"
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      <div
        className={`relative z-10 shadow-2xl rounded-2xl p-8 m-2 max-w-lg w-full transform hover:scale-[1.02] transition-transform duration-300 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        {" "}
        <div className="text-center">
          <div className="relative inline-block">
            <Image
              src={DP}
              height={48}
              width={48}
              alt="Omar Faruk - Full-Stack Web Developer working on a laptop"
              className="mx-auto size-48 rounded-full border-4 border-blue-500 object-cover mb-4 shadow-lg"
            />
            <div className="absolute bottom-4 right-0 bg-green-500 w-6 h-6 rounded-full animate-ping"></div>
          </div>

          <h1 className="text-3xl font-bold mb-2">Omar Faruk</h1>
          <p className="text-lg mb-4 opacity-80">
            Computer Science & Engineering Student
            <br />
            Sylhet Engineering College
          </p>

          <div className="flex justify-center space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div
            className={`rounded-xl p-4 mb-6 ${
              isDarkMode ? "bg-gray-700" : "bg-blue-50"
            }`}
          >
            <h2 className="text-xl font-semibold mb-3">Tech Skills</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors ${
                    isDarkMode
                      ? "bg-gray-600 text-gray-200 hover:bg-gray-500"
                      : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                  }`}
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`rounded-xl p-4 mb-6 ${
              isDarkMode ? "bg-gray-700" : "bg-blue-50"
            }`}
          >
            <h2 className="text-xl font-semibold mb-3">Contact Details</h2>
            <div className="space-y-2">
              {contactDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 opacity-90"
                >
                  {detail.icon}
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mb-6 opacity-80">
            Tech enthusiast passionate about web development, ready to
            collaborate on complex production-level projects.
          </p>

          <a
            href="mailto:cslomarfaruk@gmail.com"
            className={`inline-block px-6 py-3 rounded-full transition-colors font-semibold ${
              isDarkMode
                ? "bg-blue-600 text-white hover:bg-blue-500"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default OmarPortfolio;
