import { NextRequest, NextResponse } from "next/server";
import { getAllArticles, getAllEnglishArticles } from "@/lib/articles";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang");

  try {
    let articles;
    if (lang === "en") {
      articles = getAllEnglishArticles();
    } else {
      articles = getAllArticles();
    }

    return NextResponse.json({
      success: true,
      articles: articles,
      count: articles.length,
      lang: lang || "tr"
    });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
