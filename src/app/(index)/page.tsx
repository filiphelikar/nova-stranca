import React from 'react'
import HomePage from './HomePage'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filip Helikar | Home",
  description: "Home Filip Helikar",
};

const Page = () => {
  return (
    <>
      <HomePage />
    </>
  )
}

export default Page


