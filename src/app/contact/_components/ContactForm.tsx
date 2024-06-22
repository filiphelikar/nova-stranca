"use client";
import React from "react";
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { useTextRender } from "@/utils/useTextRender";

type FormValues = {
  email: string;
  message: string;
};

const ContactForm = () => {
  const [buttonText, fullBtnText, refButton] = useTextRender("Odeslat", 120);
  const [inputLabel, fullInputLabel, refInputLabel] = useTextRender("E-mail:", 100)
  const [textareaLabel, fullTextareaLabel, refTextareaLabel] = useTextRender("Zpráva:", 100)

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("form submited", data);
  };

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
            message: "špatný formát emailu",
          },
          required: {
            value: true,
            message: "email je poviný",
          },
        })}
      />

      <label htmlFor="message" ref={refTextareaLabel}>{textareaLabel} <span style={{color: "red"}}>*</span></label>
      <p className={styles["error"]}>{errors.email?.message}</p>
      <textarea
        className={styles["textarea"]}
        id="message"
        {...register("message", {
          required: {
            value: true,
            message: "zpráva je poviná",
          },
        })}
      />

      <button className={styles["button"]} ref={refButton}>
        <span className={styles["button-text"]}>{buttonText}</span>
        <span className={styles["full-btn-text"]}>{fullBtnText}</span>
      </button>
      <p className={styles["error"]}>{errors.message?.message}</p>
    </form>
  );
};

export default ContactForm;
