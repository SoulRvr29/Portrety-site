"use client";
import React from "react";
import { Element } from "react-scroll";
import { FaPhone, FaUpload } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Wiadomość wysłana");
      setFormData({ name: "", email: "", message: "" });
    } else {
      const result = await response.json();
      console.error("Error:", result.error);
      alert("Failed to send message: " + result.error);
    }
  };

  return (
    <Element name="Kontakt">
      <h2>Kontakt</h2>
      <div className="flex max-md:flex-col max-w-md mx-auto justify-center text-3xl max-sm:text-xl gap-8 p-8 max-sm:p-4">
        <div className="flex justify-center items-center border-2 rounded-xl py-2 px-3 gap-2 border-light-text dark:border-dark-accent max-sm:w-fit mx-auto">
          <FaPhone size={50} className="max-sm:size-7" />
          <p className="m-0 text-nowrap">(+48) 574 511 037</p>
        </div>
        <div className="flex justify-center items-center gap-2 border-2 rounded-xl py-2 px-3 border-light-text dark:border-dark-accent max-sm:w-fit mx-auto">
          <IoIosMail size={60} className="max-sm:size-8" />
          jchudecka@op.pl
        </div>
      </div>
      <form
        className="flex flex-col gap-3 p-4 max-w-3xl mx-auto"
        onSubmit={handleSubmit}
      >
        <span className="text-xl font-semibold">Formularz kontaktowy</span>
        <input
          className="rounded-md px-2 py-1 text-light-text dark:text-dark-text bg-light-accent-2 dark:bg-dark-bkg bg-opacity-60 border-2 border-light-accent dark:border-dark-accent placeholder:text-light-text dark:placeholder:text-dark-text dark:placeholder:text-opacity-70 placeholder:text-opacity-70 outline-none focus:border-light-accent-3 dark:focus:border-dark-accent-3"
          type="text"
          name="name"
          id="name"
          placeholder="Imię/Nazwisko"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="rounded-md px-2 py-1 text-light-text dark:text-dark-text bg-light-accent-2 dark:bg-dark-bkg bg-opacity-60 border-2 border-light-accent dark:border-dark-accent placeholder:text-light-text dark:placeholder:text-dark-text dark:placeholder:text-opacity-70 placeholder:text-opacity-70 outline-none focus:border-light-accent-3 dark:focus:border-dark-accent-3"
          type="email"
          name="email"
          id="email"
          placeholder="Adres email"
          required
          value={formData.email}
          pattern="^[\w._]+@[\w]+\.[\w]{2,}$"
          onChange={handleChange}
        />
        <textarea
          className="rounded-md px-2 py-1 text-light-text dark:text-dark-text bg-light-accent-2 dark:bg-dark-bkg bg-opacity-60 border-2 border-light-accent dark:border-dark-accent placeholder:text-light-text dark:placeholder:text-dark-text dark:placeholder:text-opacity-70 placeholder:text-opacity-70 outline-none focus:border-light-accent-3 dark:focus:border-dark-accent-3"
          name="message"
          id="message"
          placeholder="Treść wiadomości"
          required
          value={formData.message}
          onChange={handleChange}
          rows="5"
        ></textarea>
        <div className="flex items-start justify-between ">
          {/* <label
            htmlFor="file-upload"
            className="flex items-center gap-1 font-semibold border-2 rounded-md p-1  text-light-text dark:text-dark-text bg-light-accent-2 dark:bg-dark-bkg bg-opacity-60 border-light-accent dark:border-dark-accent hover:bg-light-accent hover:text-light-accent-2 hover:border-light-accent-2 dark:hover:bg-dark-text dark:hover:text-dark-accent dark:hover:border-dark-accent transition-colors cursor-pointer "
          >
            <FaUpload size={20} />

            <span>Dodaj zdjęcia</span>
          </label>
        <input className="sr-only" type="file" name="file" id="file" /> */}

          <button
            type="submit"
            className="flex items-center gap-2 text-xl text-light-accent-2 font-semibold uppercase border-2 rounded-md p-2 px-4 border-light-accent-2 bg-light-accent dark:bg-dark-accent dark:border-dark-text hover:bg-light-accent-2 hover:text-light-accent-3 hover:border-light-accent-3 dark:hover:bg-dark-bkg  dark:hover:text-dark-accent-2 dark:hover:border-dark-accent-2 transition-colors cursor-pointer "
          >
            <span>Wyślij</span>
          </button>
        </div>
      </form>
    </Element>
  );
};

export default Contact;
