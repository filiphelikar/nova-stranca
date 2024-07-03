"use client";
import React, { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { useTextRender } from "@/utils/useTextRender";
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/_GlobalRedux/store';

type FormValues = {
  email: string;
  message: string;
};

const ContactForm = () => {

  const lang = useSelector((state: RootState) => state.language.lang);
  const translations = useSelector((state: RootState) => state.language.translations[lang as keyof (typeof state.language.translations)])

  const [buttonText, fullBtnText, refButton] = useTextRender(translations.contactForm.buttonText, 120);
  const [inputLabel, _, refInputLabel] = useTextRender("E-mail:", 100)
  const [textareaLabel, __, refTextareaLabel] = useTextRender(translations.contactForm.textAreaLable, 100)
  const [message, setMessage] = useState<any>({message: "", class: "", display: 0})

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const send = async (data:any,) => {
  
    const payload = {
      access_key: "8d74fdac-e692-4bfc-b99d-0f6515cc8870",
      subject: "filiphelikar.cz",
      email: data.email,
      message: data.message
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) 
      })

      const result = await response.json()

      if (result.success) {
        setMessage({message: translations.contactForm.messageSuccess, class: "message-success", display: 1})

        setTimeout(() => {
          setMessage({ message: translations.contactForm.messageSuccess, class: "message-success", display: 0 });
        }, 2000); 
       
      } else {
        setMessage({message: translations.contactForm.messageNotSuccess, class: "message-error", display: 1})

        setTimeout(() => {
          setMessage({ message:translations.contactForm.messageNotSuccess, class: "message-error", display: 0 });
        }, 2000); 
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = (data: FormValues) => {
    send(data)
  }

  return (
    <form
      className={styles["form"]}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <label htmlFor="email" ref={refInputLabel}>{inputLabel} <span style={{color: "red"}}>*</span></label>

      <input
        className={styles["input"]}
        type="email"
        id="email"
        {...register("email", {
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
            message: "emailFormat",
          },
          required: {
            value: true,
            message: "emailRequired",
          },
        })}
      />

      <label htmlFor="message" ref={refTextareaLabel}>{textareaLabel} <span style={{color: "red"}}>*</span></label>
      <p className={styles["error"]}>{translations.contactForm[errors.email?.message as keyof (typeof translations.contactForm)]}</p>
      <textarea
        className={styles["textarea"]}
        id="message"
        {...register("message", {
          required: {
            value: true,
            message: "messageRequired",
          },
        })}
      />

      <button className={styles["button"]} ref={refButton}>
        <span className={styles["button-text"]}>{buttonText}</span>
        <span className={styles["full-btn-text"]}>{fullBtnText}</span>
      </button>
      <p className={styles["error"]}>{translations.contactForm[errors.message?.message as keyof (typeof translations.contactForm)]}</p>
      <p style={{opacity: message.display}} className={styles[message.class]}>{message.message}</p>  
    </form>
  );
};

export default ContactForm;
