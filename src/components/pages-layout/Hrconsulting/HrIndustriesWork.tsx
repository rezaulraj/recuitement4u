import {
  Globe,
  DollarSign,
  ShoppingCart,
  Shield,
  Phone,
  BrainCog,
  Cpu,
  Presentation,
  Gamepad,
  Plane,
  GraduationCap,
  Stethoscope,
  Shirt,
} from "lucide-react";
import { IndustryBadge } from "@/components/common/IndustryBadge";
import { useTranslations } from "next-intl";

const industries = [
  { label: "Web3", icon: <Globe size={18} /> },
  { label: "FinTech", icon: <DollarSign size={18} /> },
  { label: "E-commerce & Retail", icon: <ShoppingCart size={18} /> },
  { label: "Cybersecurity", icon: <Shield size={18} /> },
  { label: "Telecom", icon: <Phone size={18} /> },
  { label: "AI & Machine Learning", icon: <BrainCog size={18} /> },
  { label: "Hardware & IoT", icon: <Cpu size={18} /> },
  { label: "MarkTech", icon: <Presentation size={18} /> },
  { label: "Gaming, VR & AR", icon: <Gamepad size={18} /> },
  { label: "Travel", icon: <Plane size={18} /> },
  { label: "Edtech", icon: <GraduationCap size={18} /> },
  { label: "Medtech & Pharma", icon: <Stethoscope size={18} /> },
  { label: "Lifestyle & fashion", icon: <Shirt size={18} /> },
];

export default function HrIndustriesWork() {
  const t = useTranslations("hrconsulting");
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
