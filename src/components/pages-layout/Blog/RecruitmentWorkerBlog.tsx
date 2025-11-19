import React from "react";
import { BlogContent, ParagraphItem } from "@/components/common/BlogContent";
import BlogHeaderCard from "@/components/common/BlogHeaderCard";
import BlogImg from "../../../../public/images/articale3.jpg";
import Author from "../../../../public/images/valueman1.jpg";
import { useTranslations } from "next-intl";

export default function RecruitmentWorkerBlog() {
  const t = useTranslations("blogthree");

  const paragraphs = t.raw("blog.paragraphs") as ParagraphItem[]; // ✅ force type

  return (
    <section className="container py-12 px-4 sm:px-6 bg-white">
      <BlogHeaderCard
        category={t("category")}
        date={t("date")}
        title={t("title")}
        authorName="Vasco"
        authorImg={Author} // or use a real image path
        coverImg={BlogImg} // or use a real image path
      />
      <BlogContent paragraphs={paragraphs} />
    </section>
  );
}
