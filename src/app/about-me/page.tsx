import React from 'react'
import AboutMe from './AboutMe'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filip Helikar | About Me",
  description: "Abot Me Filip Helikar",
};

const Page = () => {
  return (
    <>
    <AboutMe />
    </>
  )
}

export default Page
