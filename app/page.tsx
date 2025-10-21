"use client";

import { useState } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { FooterSection } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { MissionSection } from "@/components/sections/mission";
import { PreviousWorkSection } from "@/components/sections/previous-work";
import { ProjectOverviewSection } from "@/components/sections/project-overview";
import { TeamSection } from "@/components/sections/team";
import { type Language } from "@/data/content";

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("ko");

  return (
    <>
      <div className="container flex justify-end pt-10">
        <LanguageToggle language={language} onChange={setLanguage} />
      </div>
      <HeroSection language={language} />
      <MissionSection language={language} />
      <TeamSection language={language} />
      <ProjectOverviewSection language={language} />
      <PreviousWorkSection language={language} />
      <FooterSection language={language} />
    </>
  );
}
