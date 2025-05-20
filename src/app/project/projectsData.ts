
export type Technologies = "angular" | "react" | "next" | "svelte" | "electron" | "html" | "css" | "tailwind" | "firebase" | "pwa" | "ts" | "js"

interface Project {
   title: string;
    textKey: string;
    github: string;
    live: string;
    image?: string;
    tech: Technologies[];
    imageBefore?: string;
    isBeforeAfter?: boolean;
    imageAfter?: string;
}

export const projects: Project[] = [
  {
    title: "Streaks-app",
    textKey: "infoStreaks",
    github: "https://github.com/filiphelikar/streaks-app",
    live: "https://streaks-app-lake.vercel.app/",
    image: "/img/streaks-app.png",
    tech: ["angular", "pwa", "ts", "html", "tailwind"],
  },
  {
    title: "Blog",
    textKey: "infoBlog",
    github: "https://github.com/filiphelikar/my-blog",
    live: "https://blog.filiphelikar.cz/",
    image: "/img/blog.png",
    tech: ["next", "react", "ts", "html", "tailwind"],
  },
  {
    title: "Fullstack Animal Bazar",
    textKey: "infoAnimalBazar",
    github: "https://github.com/filiphelikar/AnimalBazar-Be/",
    live: "https://github.com/filiphelikar/AnimalBazar-Fe/",
    image: "/img/animal-bazar.png",
    tech: ["react", "ts", "html", "css"],
  },
  {
    title: "Bitcoin Private Key Range Calculator",
    textKey: "infoCalc",
    github: "https://github.com/filiphelikar/privatekeyrange",
    live: "https://github.com/filiphelikar/privatekeyrange",
    image: "/img/key_range.png",
    tech: ["svelte", "js", "html", "css"],
  },
  {
    title: "Local Chat",
    textKey: "infoLocal",
    github: "https://github.com/filiphelikar/local-chatting-app",
    live: "https://github.com/filiphelikar/local-chatting-app",
    image: "/img/local_chat.png",
    tech: ["react", "ts", "firebase", "html", "css"],
  },
  {
    title: "Photo by Filip",
    textKey: "infoPhoto",
    github: "https://filiphelikar.github.io/filiphelikar/",
    live: "https://filiphelikar.github.io/filiphelikar/",
    image: "/img/photo_page.png",
    tech: ["js", "html", "css"],
  },
  {
    title: "Portfolio Page",
    textKey: "infoProject",
    github: "https://github.com/filiphelikar/nova-stranca",
    live: "https://github.com/filiphelikar/nova-stranca",
    image: "/img/portfolio_page.png",
    tech: ["next", "react", "ts", "html", "css"],
  },
  {
    title: "Nvidia Desktop",
    textKey: "infoNvidia",
    github: "https://github.com/filiphelikar/nvidia-ui",
    live: "https://github.com/filiphelikar/nvidia-ui",
    imageBefore: "/img/Nvidia_Desktop-before.png",
    imageAfter: "/img/Nvidia_Desktop-after.png",
    tech: ["electron", "react", "ts", "html", "css"],
    isBeforeAfter: true,
  },
];
