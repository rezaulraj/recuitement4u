import React from "react";
import {
  Globe,
  BrainCircuit,
  Cloud,
  Banknote,
  Users,
  Phone,
  ShoppingBag,
  ShieldCheck,
  Cpu,
  Megaphone,
  Plane,
  Gamepad2,
  GraduationCap,
  Syringe,
  Shirt,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function IndustriesWork() {
  const t = useTranslations("recruitmentcard");
  const industries = [
    { name: "Web3", icon: <Globe />, color: "bg-green-300" },
    {
      name: "AI & Machine Learning",
      icon: <BrainCircuit />,
      color: "bg-teal-200",
    },
    { name: "Cloud Computing", icon: <Cloud />, color: "bg-pink-400" },
    { name: "FinTech", icon: <Banknote />, color: "bg-orange-400" },
    { name: "Crewing", icon: <Users />, color: "bg-red-400" },
    { name: "Telecom", icon: <Phone />, color: "bg-pink-500" },
    {
      name: "E-commerce & Retail",
      icon: <ShoppingBag />,
      color: "bg-blue-500",
    },
    { name: "Cybersecurity", icon: <ShieldCheck />, color: "bg-yellow-300" },
    { name: "Hardware & IoT", icon: <Cpu />, color: "bg-green-400" },
    { name: "MarkTech", icon: <Megaphone />, color: "bg-orange-500" },
    { name: "Travel", icon: <Plane />, color: "bg-yellow-400" },
    { name: "Gaming, VR & AR", icon: <Gamepad2 />, color: "bg-blue-600" },
    { name: "Edtech", icon: <GraduationCap />, color: "bg-pink-500" },
    { name: "Medtech & Pharma", icon: <Syringe />, color: "bg-teal-200" },
    { name: "Lifestyle & Fashion", icon: <Shirt />, color: "bg-green-200" },
  ];
  return (
    <section className="py-16 px-4 container mx-auto">
      <h1 className="text-4xl font-bold text-center text-black mb-12">
        {t("industries.title")}
      </h1>

      <div className=" max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${industry.color} text-black font-medium shadow-md`}>
              <span className="w-5 h-5">{industry.icon}</span>
              <span className="text-sm">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
