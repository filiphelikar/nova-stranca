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

  const [buttonText, fullBtnText, refButton] = useTextRender("Odeslat", 90)

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data:FormValues) => {
    console.log("form submited", data)
}

  return (
    <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="email">E-mail</label> <br />
      <input
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
          }
        })}
      />
      <br />
      <p className="error">{errors.email?.message}</p>
      <br />
      <label htmlFor="message">Zpráva</label> <br />
      <input
        type="message"
        id="message"
        {...register("message", {
          required: {
            value: true,
            message: "zpráva je poviná",
          },
        })}
      />
      <br />
      <p className="error">{errors.message?.message}</p>
      <br />
      <button ref={refButton} style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {buttonText}
        </span>
        <span style={{ opacity: 0, visibility: 'hidden', whiteSpace: 'nowrap' }}>
          {fullBtnText}
        </span>
    </button>

    </form>
  );
};

export default ContactForm;
