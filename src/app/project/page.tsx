import React from 'react'
import Project from './Projects'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filip Helikar | Projects",
  description: "Projects Filip Helikar",
};

const Page = () => {
  return (
    <>
    <Project />
    </>
  )
}

export default Page
