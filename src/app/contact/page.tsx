"use client"
import React from 'react'
import { useTextRender } from '@/utils/useTextRender'
import styles from "./page.module.css"
import ContactForm from './_components/ContactForm'

const page = () => {
  const [heading, fullHeading, refHeading] = useTextRender("Contact:", 60)
  return (
    <section className={styles["main"]}>
      <h2 style={{minHeight: "29px"}} ref={refHeading} >{heading}</h2>
      <ContactForm />
      <div>
        instagram <br />
        email <br />
        pičovyny uprostřed a tak a nějakej border botom a top 90% center třeba
      </div>
    </section>
  )
}

export default page