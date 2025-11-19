"use client";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Menu, ChevronDown, Zap, Circle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useLocale, useTranslations } from "next-intl";
import logo from "../../../public/logo/Recruitment4u.svg";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const isPathActive = (pathname: string, href: string, locale: string) => {
  const cleanPathname = pathname
    .replace(new RegExp(`^/${locale}`), "")
    .replace(/\/$/, "");
  const cleanHref = href.replace(/\/$/, "");

  if (href === "/") {
    return cleanPathname === "" || cleanPathname === "/";
  }

  return cleanPathname.startsWith(cleanHref);
};

interface NavItem {
  label: string;
  href: string;
  dropdown?: Array<{
    label: string;
    href: string;
  }>;
  hasEffect?: boolean;
}

interface NavItemProps {
  item: NavItem;
  isActive: boolean;
}

const Navbar = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [opacity, setOpacity] = useState(1);
  const [showCareerEffect, setShowCareerEffect] = useState(false);
  const [hasSeenCareerEffect, setHasSeenCareerEffect] = useState(false);
  const effectIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const seenEffect = sessionStorage.getItem("careerEffectSeen");
    if (seenEffect === "true") {
      setHasSeenCareerEffect(true);
    }
  }, []);


  useEffect(() => {
    if (!hasSeenCareerEffect) {
      const initialTimer = setTimeout(() => {
        setShowCareerEffect(true);

        effectIntervalRef.current = setInterval(() => {
          setShowCareerEffect(true);
        }, 2000);
      }, 2000);

      return () => {
        clearTimeout(initialTimer);
        if (effectIntervalRef.current) {
          clearInterval(effectIntervalRef.current);
        }
      };
    }
  }, [hasSeenCareerEffect]);

  useEffect(() => {
    if (showCareerEffect) {
      const hideTimer = setTimeout(() => {
        setShowCareerEffect(false);
      }, 1500);

      return () => clearTimeout(hideTimer);
    }
  }, [showCareerEffect]);

  const handleCareerClick = () => {
    if (effectIntervalRef.current) {
      clearInterval(effectIntervalRef.current);
      effectIntervalRef.current = null;
    }
    setShowCareerEffect(false);
    setHasSeenCareerEffect(true);
    sessionStorage.setItem("careerEffectSeen", "true");
  };

  useEffect(() => {
    return () => {
      if (effectIntervalRef.current) {
        clearInterval(effectIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const newOpacity = Math.max(0.25, 1 - currentScrollY / 400);
      setOpacity(newOpacity);
    };

    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = undefined as unknown as NodeJS.Timeout;
      }, 50);
    };

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const navItems: NavItem[] = [
    { label: t("home"), href: "/" },
    { label: t("forCompanies"), href: "/for-companies" },
    {
      label: t("solutions"),
      href: "/solutions",
      dropdown: [
        {
          label: t("solutionsDropdown.immigrationLaws"),
          href: "/solutions/navigating-immigration-laws",
        },
        {
          label: t("solutionsDropdown.seasonalWorkers"),
          href: "/solutions/seasonal-workers",
        },
        {
          label: t("solutionsDropdown.constructionWorkers"),
          href: "/solutions/construction-workers",
        },
        {
          label: t("solutionsDropdown.medicalWorkers"),
          href: "/solutions/medical-workers",
        },
      ],
    },
    { label: t("whyUs"), href: "/why-us" },
    { label: t("behindthebrand"), href: "/behind-the-brand" },
    {
      label: t("career"),
      href: "/careers",
      hasEffect: true,
    },
    { label: t("contact"), href: "/contact" },
  ];

  const CareerPulseEffect = () => (
    <AnimatePresence>
      {showCareerEffect && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.2, opacity: 0 }}
          className="absolute -top-1 -right-1"
        >
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-3 h-3 bg-green-500 rounded-full border-2 border-white"
          />

          <motion.div
            animate={{
              scale: [1, 2, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full"
          />

          <motion.div
            animate={{
              rotate: [0, 180],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute -top-1 -right-1"
          >
            <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const CareerButtonWithEffect = ({ item, isActive }: NavItemProps) => (
    <motion.div
      key={item.label}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="relative"
    >
      <Link
        href={item.href}
        onClick={handleCareerClick}
        className={cn(
          "text-base lg:text-lg font-semibold transition-all duration-200 relative",
          "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full",
          "after:origin-left after:scale-x-0 after:bg-primary-secondary",
          "after:transition-transform after:duration-300 hover:after:scale-x-100",
          isActive
            ? "text-primary-secondary after:scale-x-100"
            : "text-white hover:text-primary-secondary"
        )}
      >
        {item.label}
        <CareerPulseEffect />
      </Link>
    </motion.div>
  );

  const RegularNavItem = ({ item, isActive }: NavItemProps) => (
    <motion.div
      key={item.label}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={item.href}
        className={cn(
          "text-base lg:text-lg font-semibold transition-all duration-200 relative",
          "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full",
          "after:origin-left after:scale-x-0 after:bg-primary-secondary",
          "after:transition-transform after:duration-300 hover:after:scale-x-100",
          isActive
            ? "text-primary-secondary after:scale-x-100"
            : "text-white hover:text-primary-secondary"
        )}
      >
        {item.label}
      </Link>
    </motion.div>
  );

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 text-white backdrop-blur-sm shadow-sm transition-all duration-300"
      )}
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <Link href="/" className="font-bold flex items-center">
            <div className="relative w-[100px] h-[40px] sm:w-[120px] sm:h-[40px] md:w-[180px] md:h-[80px] lg:w-[220px] lg:h-[100px]">
              <Image
                src={logo}
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => {
              const isActive = isPathActive(pathname, item.href, locale);

              if (item.dropdown) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <button
                          className={cn(
                            "relative text-base cursor-pointer lg:text-lg font-semibold transition-all duration-200 flex items-center gap-1",
                            isActive
                              ? "text-primary-secondary cursor-pointer"
                              : "text-white hover:text-primary-secondary"
                          )}
                        >
                          {item.label}
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      </motion.div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px] z-[1000] bg-white shadow-lg rounded-md">
                      {item.dropdown.map((subItem) => {
                        const isSubActive = isPathActive(
                          pathname,
                          subItem.href,
                          locale
                        );
                        return (
                          <DropdownMenuItem key={subItem.label} asChild>
                            <Link
                              href={subItem.href}
                              className={cn(
                                "block px-4 py-2 cursor-pointer w-full",
                                isSubActive
                                  ? "text-primary-secondary font-semibold"
                                  : "text-primary font-semibold hover:bg-gray-100"
                              )}
                            >
                              {subItem.label}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              if (item.hasEffect) {
                return (
                  <CareerButtonWithEffect
                    key={item.label}
                    item={item}
                    isActive={isActive}
                  />
                );
              }

              return (
                <RegularNavItem
                  key={item.label}
                  item={item}
                  isActive={isActive}
                />
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
          </div>

          <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-[60]">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2 hover:bg-white/10 relative"
                >
                  <Menu className="h-10 w-10 text-white" />
                  {!hasSeenCareerEffect && (
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                    />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col h-full w-[280px] sm:w-[350px] bg-primary text-white z-[1000]">
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>
                <div className="flex-1 overflow-y-auto">
                  <div className="flex justify-center mt-8 mb-6">
                    <div className="relative w-[120px] h-[40px]">
                      <Image
                        src="/logo/Recruitment4u.svg"
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  <SheetDescription className="text-sm text-center text-white mb-8">
                    We connect the right workers with the right employers.
                  </SheetDescription>

                  <div className="flex flex-col gap-6">
                    {navItems.map((item) => {
                      const isActive = isPathActive(
                        pathname,
                        item.href,
                        locale
                      );

                      if (item.dropdown) {
                        return (
                          <DropdownMenu key={item.label}>
                            <DropdownMenuTrigger asChild>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={cn(
                                  "text-base font-semibold cursor-pointer transition-all duration-200 flex items-center gap-1",
                                  isActive
                                    ? "text-primary-secondary"
                                    : "text-white cursor-pointer hover:text-primary-secondary"
                                )}
                              >
                                {item.label}
                                <ChevronDown className="h-4 w-4" />
                              </motion.button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[200px] bg-white shadow-lg rounded-md z-[1001]">
                              {item.dropdown.map((subItem) => {
                                const isSubActive = isPathActive(
                                  pathname,
                                  subItem.href,
                                  locale
                                );
                                return (
                                  <DropdownMenuItem key={subItem.label}>
                                    <Link
                                      href={subItem.href}
                                      className={cn(
                                        "block px-4 py-2 cursor-pointer w-full",
                                        isSubActive
                                          ? "text-primary-secondary cursor-pointer font-medium"
                                          : "text-primary cursor-pointer hover:bg-gray-100"
                                      )}
                                    >
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                );
                              })}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        );
                      }

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={
                            item.hasEffect ? handleCareerClick : undefined
                          }
                          className={cn(
                            "text-base font-semibold transition-all duration-200 relative",
                            "relative w-fit after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full",
                            "after:origin-left cursor-pointer after:scale-x-0 after:bg-primary-secondary",
                            "after:transition-transform after:duration-300 hover:after:scale-x-100",
                            isActive
                              ? "text-primary-secondary cursor-pointer after:scale-x-100"
                              : "text-white cursor-pointer hover:text-primary-secondary"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            {item.label}
                            {item.hasEffect && !hasSeenCareerEffect && (
                              <motion.div
                                animate={{
                                  scale: [1, 1.3, 1],
                                  rotate: [0, 180, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                }}
                              >
                                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              </motion.div>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="sticky bottom-0 pb-6 pt-4 bg-primary mt-auto border-t border-white/10">
                  <div className="flex flex-col gap-3">
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
