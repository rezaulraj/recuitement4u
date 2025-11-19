"use client";
import React from "react";
import CardArticale from "@/components/common/CardArticale";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function BehindArticale() {
  const t = useTranslations("behindthebrand");
  const router = useRouter();
  const handleButtonClick = (path: string) => {
    router.push(path);
  };
  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <h2 className="text-4xl text-black md:text-4xl sm:text-2xl font-bold text-center mb-12">
        {t("articlesection.title")}
      </h2>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-10">
        <CardArticale
          onClick={() => handleButtonClick("/recruitment-blog-1")}
          title={t("articlesection.value1.title")}
          imageSrc="/images/articale1.jpg"
        />
        <CardArticale
          onClick={() => handleButtonClick("/recruitment-blog-2")}
          title={t("articlesection.value2.title")}
          imageSrc="/images/articale2.jpg"
        />
        <CardArticale
          onClick={() => handleButtonClick("/recruitment-blog-3")}
          title={t("articlesection.value3.title")}
          imageSrc="/images/articale3.jpg"
        />
      </div>
    </section>
  );
}
