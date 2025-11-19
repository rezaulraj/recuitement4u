// HrBenefits.tsx
import React from "react";
import {
  FileText,
  BarChart2,
  Lightbulb,
  User,
  DollarSign,
  ThumbsUp,
} from "lucide-react";
import FeatureCard from "../../common/FeatureCard";
import { useTranslations } from "next-intl";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HrBenefits: React.FC = () => {
  const t = useTranslations("hrconsulting");
  const features: FeatureItem[] = [
    {
      icon: <FileText size={40} />,
      title: t("benefits.benefit1.title"),
      description: t("benefits.benefit1.desc"),
    },
    {
      icon: <BarChart2 size={40} />,
      title: t("benefits.benefit2.title"),
      description: t("benefits.benefit2.desc"),
    },
    {
      icon: <Lightbulb size={40} />,
      title: t("benefits.benefit3.title"),
      description: t("benefits.benefit3.desc"),
    },
    {
      icon: <User size={40} />,
      title: t("benefits.benefit4.title"),
      description: t("benefits.benefit4.desc"),
    },
    {
      icon: <DollarSign size={40} />,
      title: t("benefits.benefit5.title"),
      description: t("benefits.benefit5.desc"),
    },
    {
      icon: <ThumbsUp size={40} />,
      title: t("benefits.benefit6.title"),
      description: t("benefits.benefit6.desc"),
    },
  ];
  return (
    <section className="bg-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-black mb-12">
        {t("benefits.title")}
      </h1>
      <p className=" text-[26px] text-center mb-12 text-primary">
        {t("benefits.desc")}
      </p>
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HrBenefits;
