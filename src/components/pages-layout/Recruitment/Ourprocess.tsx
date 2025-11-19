import React from "react";
import Image from "next/image";
import OurLeft from "../../../../public/images/ourleft.jpg";
import OurRight from "../../../../public/images/ourright.jpg";
import { useTranslations } from "next-intl";

export default function OurProcess() {
  const t = useTranslations("recruitmentcard");
  const tasks = t.raw("ourprocess.card1.task") as string[];
  const processSteps = [
    {
      id: 1,
      title: t("ourprocess.card1.title"),
      duration: t("ourprocess.card1.time"),
      tasks: { tasks },
    },
    {
      id: 2,
      title: t("ourprocess.card2.title"),
      duration: t("ourprocess.card2.time"),
      tasks: { tasks },
    },
    {
      id: 3,
      title: t("ourprocess.card3.title"),
      duration: t("ourprocess.card3.time"),
      tasks: { tasks },
    },
  ];

  return (
    <section className="py-20 bg-[#05123F] w-screen ml-[-10vw] relative overflow-hidden">
      {/* Left image positioned at bottom */}
      <div className="absolute left-0 bottom-0">
        <Image
          src={OurLeft}
          alt="Decoration"
          width={400}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Right image positioned at top */}
      <div className="absolute right-0 top-0">
        <Image
          src={OurRight}
          alt="Decoration"
          width={200}
          height={300}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-[40px] text-white font-bold mb-4">
            {t("ourprocess.title")}
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            {t("ourprocess.desc")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg p-6 flex-1 max-w-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#05123F] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  {step.id}
                </div>
                <div className="">
                  <h2 className="text-xl text-black font-bold">{step.title}</h2>
                  <p className="text-black mt-2 font-normal bg-[#84D66F] rounded-full pl-2">
                    {step.duration}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {(step.tasks.tasks as string[]).map(
                  (task: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-green-500">✔</span>
                      <span className="text-black">{task}</span>
                    </li>
                  )
                )}
                {/* {step.tasks.map((task, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-green-500">✔</span>
                    <span className="text-black">
                      {task.replace("✔", "").trim()}
                    </span>
                  </li>
                ))} */}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
