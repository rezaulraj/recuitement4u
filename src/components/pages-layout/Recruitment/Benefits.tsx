import React from "react";
import Image from "next/image";
import Benefits1 from "../../../../public/images/benefits1.jpg";
import Benefits2 from "../../../../public/images/benefits2.jpg";
import Benefits3 from "../../../../public/images/benefits3.jpg";
import Benefits4 from "../../../../public/images/benefits4.jpg";
import Benefits5 from "../../../../public/images/benefits5.jpg";
import Benefits6 from "../../../../public/images/benefits6.jpg";
import { useTranslations } from "next-intl";

export default function Benefits() {
  const t = useTranslations("recruitmentcard");
  const benefits = [
    {
      id: 1,
      title: t("benefits.benefit1.title"),
      description: t("benefits.benefit1.desc"),
      image: Benefits1,
    },
    {
      id: 2,
      title: t("benefits.benefit2.title"),
      description: t("benefits.benefit2.desc"),
      image: Benefits2,
    },
    {
      id: 3,
      title: t("benefits.benefit3.title"),
      description: t("benefits.benefit3.desc"),
      image: Benefits3,
    },
    {
      id: 4,
      title: t("benefits.benefit4.title"),
      description: t("benefits.benefit4.desc"),
      image: Benefits4,
    },
    {
      id: 5,
      title: t("benefits.benefit5.title"),
      description: t("benefits.benefit5.desc"),
      image: Benefits5,
    },
    {
      id: 6,
      title: t("benefits.benefit6.title"),
      description: t("benefits.benefit6.desc"),
      image: Benefits6,
    },
  ];

  return (
    <section className="py-12 container mx-auto px-4">
      <h1 className="text-[40px] font-bold text-center text-black mb-12">
        {t("benefits.title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-start text-left">
              <Image
                src={benefit.image}
                alt={benefit.title}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h2 className="text-xl text-black font-semibold mb-2">
                {benefit.title}
              </h2>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
