"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w20/gb.png" },
  { code: "bg", name: "Български", flag: "https://flagcdn.com/w20/bg.png" },
  { code: "bs", name: "Bosanski", flag: "https://flagcdn.com/w20/ba.png" },
  { code: "sr", name: "Српски", flag: "https://flagcdn.com/w20/rs.png" },
  { code: "hr", name: "Hrvatski", flag: "https://flagcdn.com/w20/hr.png" },
  { code: "ro", name: "Română", flag: "https://flagcdn.com/w20/ro.png" },
  { code: "ru", name: "Русский", flag: "https://flagcdn.com/w20/ru.png" },
  { code: "sl", name: "Slovenščina", flag: "https://flagcdn.com/w20/si.png" },
  { code: "sk", name: "Slovenčina", flag: "https://flagcdn.com/w20/sk.png" },
  { code: "el", name: "Ελληνικά", flag: "https://flagcdn.com/w20/gr.png" }, // Greek
  { code: "la", name: "Latina", flag: "https://flagcdn.com/w20/va.png" }, // Latin (Vatican flag as a close symbol)
] as const;

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isChanging, setIsChanging] = useState(false);

  // Get the current language from the URL
  const currentLang = pathname.split("/")[1];
  const activeLang =
    languages.find((l) => l.code === currentLang) || languages[0];

  const handleLanguageChange = async (
    lang: (typeof languages)[number]["code"]
  ) => {
    if (lang === currentLang || isChanging) return;

    setIsChanging(true);
    try {
      const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "") || "/";
      router.push(`/${lang}${pathWithoutLang}`);

      // Force a full page reload to ensure all translations load properly
      window.location.href = `/${lang}${pathWithoutLang}`;
    } catch (error) {
      console.error("Language change failed:", error);
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={isChanging}>
        <button
          className="flex items-center gap-2 bg-white text-primary px-3 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition disabled:opacity-50"
          disabled={isChanging}>
          <Image
            src={activeLang.flag}
            alt={`${activeLang.name} flag`}
            width={20}
            height={16}
            className="object-cover rounded-sm"
          />
          <span>{activeLang.name}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px] z-[1000]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              lang.code === currentLang && "opacity-50 cursor-not-allowed"
            )}
            disabled={lang.code === currentLang || isChanging}>
            <Image
              src={lang.flag}
              alt={`${lang.name} flag`}
              width={20}
              height={16}
              className="object-cover rounded-sm"
            />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
