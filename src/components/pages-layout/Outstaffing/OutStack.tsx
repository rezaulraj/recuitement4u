"use client";

import { useState } from "react";
import Image from "next/image";

import Stack1 from "../../../../public/images/OutStack1.jpg";
import Stack2 from "../../../../public/images/OutStack2.jpg";
import Stack3 from "../../../../public/images/OutStack3.jpg";
import Stack4 from "../../../../public/images/OutStack4.jpg";
import { useTranslations } from "next-intl";

export default function OutStack() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const t = useTranslations("outstaffing");

  const data = [
    {
      title: t("outstack.box1.title"),
      image: Stack1,
      description: t("outstack.box1.desc"),
    },
    {
      title: t("outstack.box2.title"),
      image: Stack2,
      description: t("outstack.box2.desc"),
    },
    {
      title: t("outstack.box3.title"),
      image: Stack3,
      description: t("outstack.box3.desc"),
    },
    {
      title: t("outstack.box4.title"),
      image: Stack4,
      description: t("outstack.box4.desc"),
    },
    {
      title: t("outstack.box5.title"),
      description: t("outstack.box5.desc"),
    },
    {
      title: t("outstack.box6.title"),
      description: t("outstack.box6.desc"),
    },
    {
      title: t("outstack.box7.title"),
      description: t("outstack.box7.desc"),
    },
    {
      title: t("outstack.box8.title"),
      description: t("outstack.box8.desc"),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-center text-black mb-12">
        {t("outstack.title")}
      </h2>

      <div className="flex space-x-4 overflow-x-auto pb-4 max-w-full">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setSelectedIndex(index === selectedIndex ? null : index)
            }
            className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition">
            {item.image ? (
              selectedIndex === index ? (
                <div className="p-4 h-60 flex flex-col justify-center">
                  <h3 className="text-lg text-primary font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ) : (
                <>
                  <div className="p-5">
                    <div className="p-4">
                      <h3 className="text-lg text-primary font-semibold">
                        {item.title}
                      </h3>
                    </div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-t-2xl"
                    />
                  </div>
                </>
              )
            ) : (
              <div className="p-4  h-60 flex flex-col justify-center">
                <h3 className="text-lg text-primary font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
