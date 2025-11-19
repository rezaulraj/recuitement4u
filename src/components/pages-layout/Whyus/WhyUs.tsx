"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslations } from "next-intl";
import whyUsBanner from "../../../../public/images/why-us-banner.jpg";

export default function WhyUs() {
  const t = useTranslations("whyus");

  const sectionRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      title: t("article1.title"),
      description: t("article1.pera"),
    },
    {
      title: t("article2.title"),
      description: t("article2.pera"),
    },
    {
      title: t("article3.title"),
      description: t("article3.pera"),
    },
    {
      title: t("article4.title"),
      description: t("article4.pera"),
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Animate image slightly upward before pin
      if (leftContentRef.current) {
        gsap.to(leftContentRef.current.querySelector(".whyus-image"), {
          y: -60,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom", // Starts before section fully appears
            end: "top top", // Ends when section reaches top
            scrub: true,
          },
        });
      }

      // Pin after animation completes
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftContentRef.current,
        pinSpacing: true, // <-- changed
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mm.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden bg-white py-20 min-h-[100vh]">
      <div className="container max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row">
        {/* Fixed Left Image */}
        <div
          ref={leftContentRef}
          className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 overflow-hidden">
          <div className="whyus-image relative w-full h-[calc(100vh-80px)] rounded-lg overflow-hidden">
            <Image
              src={whyUsBanner}
              alt="why-us-banner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Scrollable Right Content */}
        <div ref={rightContentRef} className="lg:w-1/2 space-y-16">
          <div className="whyus-item">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-700">{t("description")}</p>
          </div>

          {benefits.map((benefit, index) => (
            <div key={index} className="whyus-item">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-[32px] font-semibold text-black mb-4">
                  {index + 1}. {benefit.title}
                </h3>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
