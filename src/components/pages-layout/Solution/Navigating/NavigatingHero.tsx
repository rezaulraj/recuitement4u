import React from "react";
import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionDetails from "@/components/common/SolutionDetails";
import SolutionContent from "@/components/common/SolutionContent";
import { useTranslations } from "next-intl";

export default function NavigatingHero() {
  const t = useTranslations("solutionsnavigating");
  const paragraphs = t.raw("navigatearticale.peragraphs") as string[];

  const Content = [
    {
      title: t("content1.title"),
      paragraphs: t("content1.pera"),
    },
    {
      title: t("content2.title"),
      paragraphs: t("content2.pera"),
    },
    {
      title: t("content3.title"),
      paragraphs: t("content3.pera"),
    },
  ];
  return (
    <section className="py-12 container">
      <SolutionArticale
        imageSrc="/images/navigating1.jpg"
        title={t("navigatearticale.title")}
        highlightedText={t("navigatearticale.boldtext")}
        paragraphs={paragraphs}
      />
      <SolutionDetails
        imageSrc="/images/navigating2.jpg"
        title={t("navigatedetails.title")}
        paragraphs={t("navigatedetails.desc")}
      />
      <div className="w-full flex items-center justify-center px-4">
        <div className="grid grid-cols-1 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Content.map((item, index) => (
            <div key={index} className={`text-center px-4`}>
              <SolutionContent
                title={item.title}
                paragraphs={item.paragraphs}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
