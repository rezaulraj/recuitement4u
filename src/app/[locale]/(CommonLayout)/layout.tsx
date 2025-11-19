"use client";
import React, { useState, useEffect, useCallback, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import Navbar from "@/components/common/Navbar";
import { cn } from "@/lib/utils";
import ArrowUpButton from "@/components/common/ArrowUpButton";
import Footer from "@/components/common/Footer";
import LoadingScreen from "@/components/common/LoadingScreen";

const CustomCursor = dynamic(() => import('@/components/common/CustomCursor'), {
  ssr: false
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [shouldShowContent, setShouldShowContent] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const startTransition = useCallback(() => {
    setShouldShowContent(false);
    setIsLoading(true);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      const contentTimeout = setTimeout(() => {
        setShouldShowContent(true);
      }, 300);
      return () => clearTimeout(contentTimeout);
    }, 800);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (isMounted && pathname) {
      startTransition();
    }
  }, [pathname, searchParams, startTransition, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen w-full overflow-hidden bg-background">
      <Navbar />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className={cn(
        "w-full min-h-[calc(100vh-5rem)]",
        !shouldShowContent && "opacity-0"
      )}>
        <AnimatePresence mode="wait">
          {shouldShowContent && (
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <main className="flex-grow pt-20 container mx-auto text-primary-foreground">
                <CustomCursor />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2,
                    ease: "easeOut"
                  }}
                >
                  {children}
                </motion.div>
                <ArrowUpButton />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LayoutContent>{children}</LayoutContent>
    </Suspense>
  );
};

export default Layout;
