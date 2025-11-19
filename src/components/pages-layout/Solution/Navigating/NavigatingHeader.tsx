"use client";
import React from "react";
import { useRouter } from "next/navigation";
import SolutionHeader from "@/components/common/SolutionHeader";
import { useTranslations } from "next-intl";
export default function NavigatingHeader() {
  const t = useTranslations("solutionsnavigating");
  const router = useRouter();
  const handleButtonClick = (path: string) => {
    router.push(path);
  };
  return (
    <section className="py-12 container ">
      <SolutionHeader
        title={t("title")}
        description={t("description")}
        onClick={() => handleButtonClick("/contact")}
      />
    </section>
  );
}
