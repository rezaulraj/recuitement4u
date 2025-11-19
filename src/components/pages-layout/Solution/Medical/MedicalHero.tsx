import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionContent from "@/components/common/SolutionContent";
import SolutionDetails from "@/components/common/SolutionDetails";
import { useTranslations } from "next-intl";

export default function MedicalHero() {
  const t = useTranslations("solutionmedical");
  const paragraphs = t.raw("medicalarticle.peragraphs") as string[];

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
        imageSrc="/images/medical1.jpg"
        title={t("medicalarticle.title")}
        highlightedText={t("medicalarticle.boldtext")}
        paragraphs={paragraphs}
      />
      <SolutionDetails
        imageSrc="/images/medical2.jpg"
        title={t("medicaldetails.title")}
        paragraphs={t("medicaldetails.desc")}
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
