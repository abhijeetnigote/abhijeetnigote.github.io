import React, { useEffect, useState } from "react";
import profileImage from "../profile.jpg";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaAddressBook } from "react-icons/fa6";

export default function DigitalBusinessCard() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (/bot|crawler|spider|crawling/i.test(navigator.userAgent)) {
      document.body.innerHTML = "";
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center w-80">
        <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h1 className="text-xl font-bold mb-2 dark:text-white">Abhijeet Nigote</h1>
        <p className="text-gray-600 dark:text-gray-300">
          🎧&nbsp;Sound Designer | 🎸&nbsp;Guitar | 🎼&nbsp;Musician | 🏍️&nbsp;Bike | 🎮&nbsp;Gaming | 🌌&nbsp;Space
        </p>
        <div className="mt-4 space-y-3">
          <a href="./abhijeet_nigote.vcf"
            className="flex items-center justify-center w-full bg-green-600 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaAddressBook /> <span>Add Me to Contacts</span>
          </a>
          <a href="https://www.linkedin.com/in/abhijeet-nigote" target="_blank" className="flex items-center justify-center w-full bg-blue-700 dark:bg-blue-600 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaLinkedin /> <span>abhijeet-nigote</span>
          </a>
          <a href="https://www.instagram.com/abhijeetnigote_" target="_blank" className="flex items-center justify-center w-full bg-gradient-to-r from-pink-500 to-red-500 dark:from-pink-400 dark:to-red-400 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaInstagram /> <span>abhijeetnigote_</span>
          </a>
          <a href="https://wa.me/918319427734" target="_blank" className="flex items-center justify-center w-full bg-green-500 dark:bg-green-400 text-white py-2 rounded-xl shadow-md space-x-2">
            <FaWhatsapp /> <span>WhatsApp</span>
          </a>
          <hr />
          <a href="tel:+918319427734" className="flex items-center justify-center w-full text-orange-500 dark:text-orange-400">
            Call Me
          </a>
        </div>
      </div>
    </div>
  );
}
