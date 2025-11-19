import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselApi } from "@/components/ui/carousel";
import NoSelector from "@/components/common/Noselector";
import dynamic from "next/dynamic";
import { memo } from "react";
import Napal from "../../../../public/images/Nepal.webp";
import Phillipine from "../../../../public/images/Phillipine.webp";
import Qater from "../../../../public/images/Uae & Qatar.webp";
import India from "../../../../public/images/India.webp";
import { useTranslations } from "next-intl";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  {
    ssr: false,
  }
);

// Use in both components
const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const RecruitmentCenters = () => {
  const t = useTranslations("recruitmentcenter");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const centers = [
    {
      country: t("center1.country"),
      image: India,
      description: t("center1.centerdesc"),
    },
    {
      country: t("center2.country"),
      image: Phillipine,
      description: t("center2.centerdesc"),
    },
    {
      country: t("center3.country"),
      image: Napal,
      description: t("center3.centerdesc"),
    },
    {
      country: t("center4.country"),
      image: Qater,
      description: t("center4.centerdesc"),
    },
  ];
  // Memoize CarouselSlide component
  const CarouselSlide = memo(({ center }: { center: (typeof centers)[0] }) => (
    <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 cursor-grab active:cursor-grabbing">
      <Card className="border-none h-full transition-all duration-300 hover:bg-primary group">
        <CardContent className="p-6">
          <NoSelector>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={center.image}
                alt={center.country}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110 pointer-events-none"
              />
            </div>
          </NoSelector>
          <NoSelector className="mt-6 space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-black transition-colors duration-300 group-hover:text-white">
              {center.country}
            </h3>
            <p className="text-black text-sm leading-relaxed line-clamp-4 transition-colors duration-300 group-hover:text-white/90">
              {center.description}
            </p>
          </NoSelector>
        </CardContent>
      </Card>
    </CarouselItem>
  ));

  CarouselSlide.displayName = "CarouselSlide";

  const AUTO_PLAY_INTERVAL = 5000;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);

    const timer = setInterval(() => api.scrollNext(), AUTO_PLAY_INTERVAL);

    return () => {
      api.off("select", handleSelect);
      clearInterval(timer);
    };
  }, [api]);

  const carouselItems = useMemo(
    () =>
      centers.map((center) => (
        <CarouselSlide key={center.country} center={center} />
      )),
    [CarouselSlide, centers]
  );

  return (
    <section className="py-16 sm:py-20 lg:py-40 overflow-hidden">
      {!isLoading && (
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-8 sm:mb-12 lg:mb-20"
            initial="initial"
            animate="animate"
            variants={pageVariants}>
            <MotionDiv
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary"
              initial="initial"
              animate="animate"
              variants={itemVariants}>
              {t("title")}
            </MotionDiv>
            <MotionDiv
              className="text-black max-w-2xl mx-auto mt-4"
              initial="initial"
              animate="animate"
              variants={itemVariants}>
              {t("description")}
            </MotionDiv>
          </MotionDiv>

          <div className="relative px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setApi}
              className="w-full">
              <CarouselContent>{carouselItems}</CarouselContent>
            </Carousel>

            <div className="flex justify-center gap-2 mt-8">
              {centers.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    current === index
                      ? "bg-primary scale-125"
                      : "bg-gray-300 hover:bg-primary/50"
                  )}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecruitmentCenters;
