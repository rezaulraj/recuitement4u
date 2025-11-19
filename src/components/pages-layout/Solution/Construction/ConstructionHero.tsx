import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionContent from "@/components/common/SolutionContent";
import SolutionDetails from "@/components/common/SolutionDetails";
import { useTranslations } from "next-intl";
import React from "react";

export default function ConstructionHero() {
  const t = useTranslations("solutionconstruction");
  const paragraph = t.raw("constructionarticle.peragraphs");
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
        imageSrc="/images/construction1.jpg"
        title={t("constructionarticle.title")}
        highlightedText={t("constructionarticle.boldtext")}
        paragraphs={paragraph}
      />
      <SolutionDetails
        imageSrc="/images/construction2.jpg"
        title={t("constructiondetails.title")}
        paragraphs={t("constructiondetails.desc")}
      />
      <div className="w-full flex items-center  justify-center px-4">
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
