// pages/blog/recruiment-blog/page.tsx (or .tsx depending on your routing)
import React from "react";
import BlogHeaderCard from "@/components/common/BlogHeaderCard";
import Author from "../../../../public/images/valueman1.jpg";
import BlogImg from "../../../../public/images/articale1.jpg";
import { BlogContent, ParagraphItem } from "@/components/common/BlogContent";
import { useTranslations } from "next-intl";

export default function RecruimentBlog() {
  const t = useTranslations("blogone");

  const paragraphs = t.raw("blog.paragraphs") as ParagraphItem[]; // ✅ force type

  return (
    <section className="container py-12 px-4 sm:px-6 bg-white">
      <BlogHeaderCard
        category="Recruiting"
        date="July 2, 2023"
        title={t("title")}
        authorName="Vasco"
        authorImg={Author}
        coverImg={BlogImg}
      />
      <BlogContent paragraphs={paragraphs} /> {/* ✅ updated prop name */}
    </section>
  );
}
