import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET() {
  const urls = [
    "https://academy.hackthebox.com/achievement/1743957/18",
    "https://academy.hackthebox.com/achievement/1743957/31",
    "https://academy.hackthebox.com/achievement/1743957/41",
    "https://academy.hackthebox.com/achievement/1743957/19",
    "https://academy.hackthebox.com/achievement/1743957/34",
    "https://academy.hackthebox.com/achievement/1743957/81",
    "https://academy.hackthebox.com/achievement/1743957/75",
    "https://academy.hackthebox.com/achievement/1743957/110",
    "https://academy.hackthebox.com/achievement/1743957/144",
    "https://academy.hackthebox.com/achievement/1743957/54",
    "https://academy.hackthebox.com/achievement/1743957/35"

  ];

  try {
    const responses = await Promise.all(
      urls.map(async (url) => {
        const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
        if (!res.ok) throw new Error(`Failed to fetch ${url}`);

        const html = await res.text();
        const $ = cheerio.load(html);

        $(".card img").each((_, img) => {
          const src = $(img).attr("src");
          if (src && src.startsWith("/")) {
            $(img).attr("src", `https://academy.hackthebox.com${src}`);
          }
        });

        return $(".card").first().prop("outerHTML");
      })
    );

    return NextResponse.json({ cards: responses });
  } catch (error) {
    return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
  }
}

