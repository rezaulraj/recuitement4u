import HrBenefits from "@/components/pages-layout/Hrconsulting/HrBenefits";
import Hero from "@/components/pages-layout/Hrconsulting/HrHero";
import HrIndustriesWork from "@/components/pages-layout/Hrconsulting/HrIndustriesWork";
import HrOurprocess from "@/components/pages-layout/Hrconsulting/HrOurprocess";
import HrWhatDo from "@/components/pages-layout/Hrconsulting/HrWhatDo";

export default function Page() {
  return (
    <main>
      <Hero />
      <HrWhatDo />
      <HrBenefits />
      <HrOurprocess />
      <HrIndustriesWork/>
    </main>
  );
}
