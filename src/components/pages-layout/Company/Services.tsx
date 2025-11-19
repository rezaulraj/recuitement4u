"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Wrench,
  Wheat,
  UtensilsCrossed,
  Construction,
  FileQuestion,
} from "lucide-react";
import { CardContainer, CardBody } from "@/components/ui/3d-card";
import { useTranslations } from "next-intl";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ServiceCard = ({ service }: { service: Service }) => (
  <CardBody
    className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg group 
    hover:shadow-xl transition-all duration-300 
    min-h-[160px] flex flex-col justify-start items-center text-center hover:bg-primary">
    {/* Icon Container - Added more margin bottom */}
    <div className="mb-5">
      <div
        className="p-4 bg-primary rounded-lg inline-block
        group-hover:bg-white transform transition-all duration-300">
        <service.icon
          className="w-6 h-6 text-primary-secondary group-hover:text-primary
          transition-colors duration-300"
        />
      </div>
    </div>

    {/* Title - Added more margin and padding */}
    <h3
      className="text-base md:text-lg font-semibold text-black group-hover:text-white 
      transition-colors duration-300 mb-4 px-6">
      {service.title}
    </h3>

    {/* Description - Added max-width and padding */}
    <p
      className="text-xs md:text-sm text-black leading-relaxed group-hover:text-white/90
      max-w-[300px] mx-auto px-4 transition-colors duration-300">
      {service.description}
    </p>
  </CardBody>
);

const Services = () => {
  const t = useTranslations("forcompanies");

  const services = [
    {
      title: t("service1.title"),
      description: t("service1.desc"),
      icon: Code2,
    },
    {
      title: t("service2.title"),
      description: t("service2.desc"),
      icon: Wrench,
    },
    {
      title: t("service3.title"),
      description: t("service3.desc"),
      icon: Wheat,
    },
    {
      title: t("service4.title"),
      description: t("service4.desc"),
      icon: UtensilsCrossed,
    },
    {
      title: t("service5.title"),
      description: t("service5.desc"),
      icon: Construction,
    },
    {
      title: t("service6.title"),
      description: t("service6.desc"),
      icon: FileQuestion,
    },
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const translateLeft = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const translateRight = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const translateMiddle = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const [firstColumn, secondColumn, thirdColumn] = [
    services.slice(0, 2),
    services.slice(2, 4),
    services.slice(4),
  ];

  return (
    <section
      className="py-8 md:py-16 lg:py-20 pb-32 md:pb-40 lg:pb-48 overflow-hidden"
      ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 text-primary">
            {t("ourservice.title")}
          </h1>
          <p className="text-base md:text-lg text-black max-w-2xl mx-auto px-4">
            {t("ourservice.desc")}
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {/* Left Column */}
          <motion.div style={{ y: translateLeft }} className="space-y-4">
            {firstColumn.map((service, idx) => (
              <CardContainer key={idx} className="w-full">
                <ServiceCard service={service} />
              </CardContainer>
            ))}
          </motion.div>

          {/* Middle Column */}
          <div className="space-y-4">
            {secondColumn.map((service, idx) => (
              <motion.div
                key={idx}
                style={{ y: translateMiddle }}
                className="transform-gpu">
                <CardContainer className="w-full">
                  <ServiceCard service={service} />
                </CardContainer>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <motion.div style={{ y: translateRight }} className="space-y-4">
            {thirdColumn.map((service, idx) => (
              <CardContainer key={idx} className="w-full">
                <ServiceCard service={service} />
              </CardContainer>
            ))}
          </motion.div>
        </div>

        {/* Mobile Layout */}
        {/* Update the mobile layout card styles */}
        <div className="md:hidden space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg p-4 shadow-md hover:bg-primary group">
              <div className="flex flex-col gap-3">
                <div className="flex items-start space-x-3">
                  <div className="p-3 bg-primary rounded-lg shrink-0 group-hover:bg-primary-secondary">
                    <service.icon className="w-5 h-5 text-primary-secondary group-hover:text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-black group-hover:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-black leading-relaxed group-hover:text-white/90">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
