import { FooterSection } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { MissionSection } from "@/components/sections/mission";
import { PreviousWorkSection } from "@/components/sections/previous-work";
import { ProjectOverviewSection } from "@/components/sections/project-overview";
import { TeamSection } from "@/components/sections/team";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <TeamSection />
      <ProjectOverviewSection />
      <PreviousWorkSection />
      <FooterSection />
    </>
  );
}

