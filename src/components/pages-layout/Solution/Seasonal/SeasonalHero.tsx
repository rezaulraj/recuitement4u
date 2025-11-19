import React from "react";
import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionDetails from "@/components/common/SolutionDetails";
import SolutionContent from "@/components/common/SolutionContent";
import { useTranslations } from "next-intl";

export default function SeasonalHero() {
  const t = useTranslations("solutionsseasonal");
  const paragraphs = t.raw("seasonalarticle.peragraphs") as string[];

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
        imageSrc="/images/seasonal1.jpg"
        title={t("seasonalarticle.title")}
        highlightedText={t("seasonalarticle.boldtext")}
        paragraphs={paragraphs}
      />
      <SolutionDetails
        imageSrc="/images/seasonal2.jpg"
        title={t("seasonaldetails.title")}
        paragraphs={t("seasonaldetails.desc")}
      />
      <div className="w-full flex items-center justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
