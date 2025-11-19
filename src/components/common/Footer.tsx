import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Youtube,
} from "lucide-react";
import { FaTiktok, FaPinterestP } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const locations = [
    {
      country: t("location1.title"),
      address: t("location1.desc"),
    },
    {
      country: t("location2.title"),
      address: t("location2.desc"),
    },
    {
      country: t("location3.title"),
      address: t("location3.desc"),
    },
    {
      country: t("location4.title"),
      address: t("location4.desc"),
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/recruitment4u",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/recruitforu/",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/recruitment.4u/",
      label: "Instagram",
    },
    {
      icon: Twitter,
      href: "https://x.com/Recruitment4you",
      label: "X (Twitter)",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@recruitforu",
      label: "YouTube",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@recruitforu",
      label: "TikTok",
    },
    {
      icon: FaPinterestP,
      href: "https://www.pinterest.com/recruitment4u/",
      label: "Pinterest",
    },
  ];

  return (
    <footer className="bg-primary/5 py-8 sm:py-12 lg:py-16">
      {" "}
      {/* Changed from bg-white to bg-primary/5 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info & Social */}
          <div className="lg:col-span-4">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">
                  {t("title")}
                </h3>
                <div className="relative">
                  <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    {t("desc")}
                  </p>
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary-secondary rounded-full"></div>
                </div>
              </div>
              {/* Social Icons */}
              <div className="flex flex-wrap gap-4 pt-4 md:pt-6">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2.5 rounded-full transition-all transform",
                      "bg-transparent hover:bg-primary",
                      "text-primary",
                      "hover:text-primary-secondary",
                      "flex items-center justify-center"
                    )}
                    aria-label={social.label}>
                    <social.icon
                      className={cn(
                        "w-5 h-5 md:w-6 md:h-6",
                        "transition-colors duration-300"
                      )}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Locations Grid */}
          <div className="lg:col-span-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 md:mb-6 lg:mb-8">
              {t("title2")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-primary transition-all duration-300">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-1 group-hover:text-primary-secondary transition-all duration-300" />
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-black group-hover:text-white transition-all duration-300">
                      {location.country}
                    </h4>
                    <p className="text-black group-hover:text-white/90 text-xs md:text-sm lg:text-base leading-relaxed transition-all duration-300">
                      {location.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/10 mt-12 md:mt-16 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-xs md:text-sm lg:text-base text-black text-center md:text-left">
              {t("copyright")}
              {/* Copyright © {new Date().getFullYear()} Recruitment4u . All rights
              reserved. */}
            </div>
            {/* <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-black hover:text-primary-secondary transition-colors text-sm">
                Privacy Policy
              </Link>
              <span className="text-black/30">|</span>
              <Link
                href="/policy"
                className="text-black hover:text-primary-secondary transition-colors text-sm">
                Terms & Conditions
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
