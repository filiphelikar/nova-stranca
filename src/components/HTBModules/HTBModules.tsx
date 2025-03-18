"use client";

import "./HTBModules.css"
import React, { useEffect, useState } from "react";
import { useTextRender } from "../../utils/useTextRender";

const HTBModules = () => {
  const [content, setContent] = useState<{ cards: string[] } | null>(null);
  const [subHeading, _, refSubHeading] = useTextRender("Hack The Box Academy:", 60);

  useEffect(() => {
    const fetchHTB = async () => {
      const res = await fetch("/api/htb");
      const data = await res.json();

      setContent(data)
    };

    fetchHTB();
  }, []);

  if (!content) return null

  return (
    <div className="main-htb">
      <h2 ref={refSubHeading} >{subHeading}</h2>
      <div className="container-htb">
        {content.cards ? content.cards.map((current, index) => (
          <div style={{ width: "fit-content", height: "fit-content" }} key={index} dangerouslySetInnerHTML={{ __html: current }} />
        )) : ""}
      </div>
    </div>
  );
};

export default HTBModules;
