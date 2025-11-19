"use client";

import Hero from "@/components/pages-layout/Home/Hero";
import CardHome from "@/components/pages-layout/Home/CardHome";
import HomeEmploy from "@/components/pages-layout/Home/HomeEmploy";
import AgencySection from "@/components/pages-layout/Home/AgencySection";

import Solution from "@/components/pages-layout/Home/Solution";
import Brand from "@/components/pages-layout/Home/Brand";
import RecruitmentCenters from "@/components/pages-layout/Home/RecruitmentCenters";
import Process from "@/components/pages-layout/Home/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      <CardHome />
      <HomeEmploy />
      <AgencySection />
      <Solution />
      <Brand />
      <RecruitmentCenters />
      <Process />
    </main>
  );
}
