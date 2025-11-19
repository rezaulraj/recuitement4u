"use client";
import Hero from "@/components/pages-layout/Recruitment/ReHero";
import Whatsdo from "@/components/pages-layout/Recruitment/ReWhatsdo";
import Benefits from "@/components/pages-layout/Recruitment/Benefits";
import Ourprocess from "@/components/pages-layout/Recruitment/Ourprocess";
import IndustriesWork from "@/components/pages-layout/Recruitment/IndustriesWork";

export default function Page() {
  return (
    <main>
      <Hero />
      <Whatsdo />
      <Benefits />
      <Ourprocess />
      <IndustriesWork />
    </main>
  );
}
