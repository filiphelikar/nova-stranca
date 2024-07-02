import React from 'react'
import Contact from './Contact'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filip Helikar | Contact",
  description: "Contact Filip Helikar",
};

const Page = () => {
  return (
    <>
      <Contact />
    </>
  )
}

export default Page
