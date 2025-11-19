import {
  Users,
  FlaskConical,
  ShieldCheck,
  Headphones,
  GitBranch,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function OutWhatDo() {
  const t = useTranslations("outstaffing");
  const services = [
    {
      title: t("whatsdo.card1.title"),
      description: t("whatsdo.card1.desc"),
      icon: <Users size={70} className="text-primary" />,
    },
    {
      title: t("whatsdo.card2.title"),
      description: t("whatsdo.card2.desc"),
      icon: <GitBranch size={70} className="text-primary" />,
    },
    {
      title: t("whatsdo.card3.title"),
      description: t("whatsdo.card3.desc"),
      icon: <FlaskConical size={70} className="text-primary" />,
    },
    {
      title: t("whatsdo.card4.title"),
      description: t("whatsdo.card4.desc"),
      icon: <ShieldCheck size={70} className="text-primary" />,
    },
    {
      title: t("whatsdo.card5.title"),
      description: t("whatsdo.card5.desc"),
      icon: <Headphones size={70} className="text-primary" />,
    },
  ];

  return (
    <section className="bg-[#F8F8F8] mx-auto py-12">
      <h1 className="text-[52px] font-bold text-center text-black mb-12">
        {t("whatsdo.title")}
      </h1>
      <p className="text-[26px] text-center mb-12 text-primary">
        {t("whatsdo.description")}
      </p>
      <div className="container pb-20 mx-auto px-4">
        {/* Top row - 3 boxes */}
        <div className="flex flex-col md:flex-row mt-10 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Bottom row - 2 centered boxes */}
        <div className="flex justify-center mt-10">
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl">
            {services.slice(3, 5).map((service, index) => (
              <ServiceCard key={index + 3} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="flex-1 flex flex-col justify-between border-r-4 border-white p-6 rounded-lg bg-white hover:shadow-lg transition-shadow">
      <div>
        <div className="flex justify-center md:justify-start">
          {service.icon}
        </div>
        <div className="mt-6 md:mt-10">
          <h4 className="text-black text-2xl md:text-[30px] font-bold">
            {service.title}
          </h4>
          <p className="text-lg md:text-[20px] text-black font-normal mt-4">
            {service.description}
          </p>
        </div>
      </div>
      {/* <button className="text-lg md:text-[20px] mt-5 text-primary font-bold underline text-left hover:text-primary-dark transition-colors">
        More details
      </button> */}
    </div>
  );
};
