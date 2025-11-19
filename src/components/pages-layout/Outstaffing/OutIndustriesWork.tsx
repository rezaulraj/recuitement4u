import { IndustryBadge } from "@/components/common/IndustryBadge";
import React from "react";
import {
  Globe,
  BrainCog,
  Lock,
  BrainCircuit,
  Gamepad2,
  Cloud,
  DollarSign,
  Presentation,
  Cpu,
} from "lucide-react";
import { useTranslations } from "next-intl";

const industries = [
  { label: "Web3", icon: <Globe size={18} /> },
  {
    label: "Cybersecurity and Information Security",
    icon: <Lock size={18} />,
  },
  { label: "AI & Machine Learning", icon: <BrainCircuit size={18} /> },
  { label: "Gaming, VR & AR", icon: <Gamepad2 size={18} /> },
  { label: "Cloud Computing", icon: <Cloud size={18} /> },
  { label: "AI & Machine Learning", icon: <BrainCog size={18} /> },
  { label: "FinTech", icon: <DollarSign size={18} /> },
  { label: "Hardware & IoT", icon: <Cpu size={18} /> },
  { label: "MarkTech", icon: <Presentation size={18} /> },
];
export default function OutIndustriesWork() {
  const t = useTranslations("outstaffing");
  return (
    <section className="py-16 px-4 bg-white text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-[32px] font-bold mb-10">{t("industries.title")}</h2>
        <div className="flex flex-wrap justify-center gap-4 gap-y-8">
          {industries.map((industry, i) => (
            <IndustryBadge
              key={i}
              label={industry.label}
              icon={industry.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
