import ContactMapCard from "@/components/common/ContactMapCard";
import { useTranslations } from "next-intl";
export default function ContactMap() {
  const t = useTranslations("footer");
  return (
    <div id="offices">
      <ContactMapCard
        title={t("location1.title")}
        address={t("location1.desc")}
        // phone="+385 1 6064 420"
        // email="info.hr@dekra.com"
        hours="Workdays 08:30 – 16:30"
        mapEmbedUrl="https://maps.google.com/maps?width=600&height=400&hl=en&q=Str.%20Sg.%20Constantin%20Moise%205%20D%20BUCURESTI%2C%20Loc.%20SECTORUL%206&t=&z=14&ie=UTF8&iwloc=B&output=embed" // Use the correct embed link
        mapLink="https://www.google.com/maps/search/Str.+Sg.+Constantin+Moise+5+D+BUCURESTI,+Loc.+SECTORUL+6/@44.4294868,26.0369059,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" // Optional
      />
      <ContactMapCard
        title={t("location2.title")}
        address={t("location2.desc")}
        // phone="+385 1 6064 420"
        // email="info.hr@dekra.com"
        hours="Workdays 08:30 – 16:30"
        mapEmbedUrl="https://maps.google.com/maps?width=600&height=400&hl=en&q=The%20One%20Tower%2C%20Fl.24%2C%20DUBAI%2C%20UAE&t=&z=14&ie=UTF8&iwloc=B&output=embed" // Use the correct embed link
        mapLink="https://www.google.com/maps/place/The+One+Tower/@25.101272,55.1712551,17z/data=!3m2!4b1!5s0x3e5f6823542b71c7:0x8e9faf5dcfac2cda!4m6!3m5!1s0x3e5f6b717800ddc9:0x80e8763d2c32aea7!8m2!3d25.1012672!4d55.17383!16s%2Fm%2F043sbt6?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" // Optional
      />
      <ContactMapCard
        title={t("location3.title")}
        address={t("location3.desc")}
        // phone="+385 1 6064 420"
        // email="info.hr@dekra.com"
        hours="Workdays 08:30 – 16:30"
        mapEmbedUrl="https://maps.google.com/maps?width=600&height=400&hl=en&q=Global%20Business%20Center%2C%20Cornish%20Road%2C%20Doha%2C%20Qatar&t=&z=14&ie=UTF8&iwloc=B&output=embed" // Use the correct embed link
        mapLink="https://www.google.com/maps/place/Global+Business+Centre/@25.2792508,51.5492179,17z/data=!3m1!4b1!4m6!3m5!1s0x3e45c57a1e5989ad:0x735a51a8600ee447!8m2!3d25.279246!4d51.5517928!16s%2Fg%2F11c1qy6gws?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" // Optional
      />
      <ContactMapCard
        title={t("location4.title")}
        address={t("location4.desc")}
        // phone="+385 1 6064 420"
        // email="info.hr@dekra.com"
        hours="Workdays 08:30 – 16:30"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.7642831663998!2d24.05906107688834!3d49.80929903332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae95d17d9c567%3A0xde33b3705cfaafa1!2sViking%20Business%20Center!5e0!3m2!1sen!2sbd!4v1761308278802!5m2!1sen!2sbd" // Use the correct embed link
        mapLink="https://www.google.com/maps/place/Viking+Business+Center/@49.809299,24.0590611,17z/data=!3m1!4b1!4m6!3m5!1s0x473ae95d17d9c567:0xde33b3705cfaafa1!8m2!3d49.8092956!4d24.061636!16s%2Fg%2F11pwptj52r?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D" // Optional
      />
    </div>
  );
}
