import OutBenefits from "@/components/pages-layout/Outstaffing/OutBenefits";
import OutHero from "@/components/pages-layout/Outstaffing/OutHero";
import OutIndustriesWork from "@/components/pages-layout/Outstaffing/OutIndustriesWork";
import OutStack from "@/components/pages-layout/Outstaffing/OutStack";
import OutWhatDo from "@/components/pages-layout/Outstaffing/OutWhatDo";
export default function Page() {
  return (
    <main>
      <OutHero />
      <OutWhatDo />
      <OutIndustriesWork/>
      <OutStack/>
      <OutBenefits/>
    </main>
  );
}
