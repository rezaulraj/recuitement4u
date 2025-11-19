"use client";
import ContactHeader from "@/components/pages-layout/Contact/ContactHeader";
// import CustomBanner from "@/components/pages-layout/Contact/CustomBanner";
// import Location from "@/components/pages-layout/Contact/Location";
// import Banner from "@/components/pages-layout/Company/Banner";
import { ContactForm } from "@/components/pages-layout/Contact/ContactForm";
import ContactMap from "@/components/pages-layout/Contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <ContactHeader />
      <ContactForm />
      <ContactMap />
      {/* Uncomment if you want to use the custom banner and location components */}
      {/* <CustomBanner
        text="Recruitment-4u is here for you and ready to answer all your questions."
        variant="primary"
      />
      <Location />
      <Banner text="Together, we are transforming the labor market for the better." /> */}
    </main>
  );
}
