"use client";
import React from "react";
import TeamCard from "@/components/common/TeamCard";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function BehindOurTeam() {
  const router = useRouter();
  const t = useTranslations("behindthebrand");
  const HandileClick = (path: string) => {
    router.push(path);
  };
  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[45px] text-black md:text-4xl font-bold text-center mb-12">
          {t("teamsction.title")}
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <TeamCard
            name={t("teamsction.team1.name")}
            onClick={() => HandileClick("/position/team1")}
            // title={t("teamsction.team1.position")}
            description={t("teamsction.team1.description")}
            btnText={t("teamsction.team1.btnText")}
          />
          <TeamCard
            name={t("teamsction.team2.name")}
            onClick={() => HandileClick("/position/team2")}
            btnText={t("teamsction.team2.btnText")}
            description={t("teamsction.team2.description")}
          />
          <TeamCard
            name={t("teamsction.team3.name")}
            onClick={() => HandileClick("/position/team3")}
            btnText={t("teamsction.team3.btnText")}
            description={t("teamsction.team3.description")}
          />
          <TeamCard
            name={t("teamsction.team4.name")}
            onClick={() => HandileClick("/position/team4")}
            btnText={t("teamsction.team4.btnText")}
            description={t("teamsction.team4.description")}
          />
          <TeamCard
            name={t("teamsction.team5.name")}
            onClick={() => HandileClick("/position/team5")}
            btnText={t("teamsction.team5.btnText")}
            description={t("teamsction.team5.description")}
          />
          <TeamCard
            name={t("teamsction.team6.name")}
            onClick={() => HandileClick("/position/team6")}
            btnText={t("teamsction.team6.btnText")}
            description={t("teamsction.team6.description")}
          />
          <TeamCard
            name={t("teamsction.team7.name")}
            onClick={() => HandileClick("/position/team7")}
            btnText={t("teamsction.team7.btnText")}
            description={t("teamsction.team7.description")}
          />
          <TeamCard
            name={t("teamsction.team8.name")}
            onClick={() => HandileClick("/position/team8")}
            btnText={t("teamsction.team8.btnText")}
            description={t("teamsction.team8.description")}
          />

          <TeamCard
            name={t("teamsction.team9.name")}
            onClick={() => HandileClick("/position/team9")}
            btnText={t("teamsction.team9.btnText")}
            description={t("teamsction.team9.description")}
          />
          <TeamCard
            name={t("teamsction.team10.name")}
            onClick={() => HandileClick("/position/team10")}
            btnText={t("teamsction.team10.btnText")}
            description={t("teamsction.team10.description")}
          />
        </div>
      </div>
    </section>
  );
}
