"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  opacityEffect,
  fadeInX200Variants,
  fadeInNX200Variants,
} from "../../data/variants";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const isMobile = window.innerWidth <= 600;

  const form = useRef<HTMLFormElement>(null);

  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            setFormValues({
              user_name: "",
              user_email: "",
              message: "",
            });
            alert("Message sent successfully...");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div id="contact" className="contact">
      <div className="contact__title">
        <motion.h3
          initial="initial"
          whileInView="animate"
          variants={opacityEffect}
        >
          Contact
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeInX200Variants}
            className="underline"
          ></motion.div>
        </motion.h3>
      </div>
      <div className="contact__content">
        <motion.form
          action="https://formkeep.com/f/8be7ee9fa959"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
          method="POST"
          className="contact__form"
          ref={form}
          onSubmit={sendEmail}
          initial={!isMobile ? "initial" : {}}
          whileInView={!isMobile ? "animate" : {}}
          variants={fadeInX200Variants}
        >
          <motion.div
            className="contact__form-flex"
            variants={fadeInX200Variants}
          >
            <input
              type="text"
              name="user_name"
              className="contact__form-name"
              id="name"
              placeholder="Name"
              required={true}
              minLength={3}
              value={formValues.user_name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="user_email"
              className="contact__form-email"
              id="email"
              placeholder="Email"
              required={true}
              value={formValues.user_email}
              onChange={handleInputChange}
            />
          </motion.div>

          <motion.textarea
            variants={fadeInX200Variants}
            name="message"
            id="text"
            cols={10}
            rows={10}
            placeholder="Write here..."
            required={true}
            minLength={20}
            value={formValues.message}
            onChange={handleInputChange}
          ></motion.textarea>
          <motion.div className="contact__form-submit">
            <motion.input
              whileHover={{ backgroundColor: "#BFA181", color: "#000" }}
              type="submit"
              value="Send"
              className="contact__form-send"
            />
          </motion.div>
        </motion.form>

        <motion.div
          className="contact__info"
          initial={!isMobile ? "initial" : {}}
          whileInView={!isMobile ? "animate" : {}}
          variants={fadeInNX200Variants}
        >
          <motion.h4 variants={fadeInNX200Variants}>Get in touch:</motion.h4>
          <motion.div variants={fadeInNX200Variants}>
            <motion.p variants={fadeInNX200Variants}>Piotr Lubecki</motion.p>
            <motion.p variants={fadeInNX200Variants}>
              Email: pleksonlp@gmail.com
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
