import React from "react";
import HomePage from "./HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filip Helikar | Home",
  description: "Home Filip Helikar",
  other: {
    "google-site-verification": "MM4TstpXUw18nxudSmty14AZ5vI2ZzUqoeJAiciNxVc",
  },
};

const Page = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Page;
