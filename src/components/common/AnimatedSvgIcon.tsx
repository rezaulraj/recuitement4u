import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSvgIconProps {
  iconSrc: string;
  className?: string;
}

const AnimatedSvgIcon: React.FC<AnimatedSvgIconProps> = ({
  iconSrc,
  className,
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(iconSrc);
        if (!response.ok) {
          throw new Error(`Failed to load SVG: ${response.statusText}`);
        }

        let svg = await response.text();
        if (!svg.includes("<svg")) {
          throw new Error("Invalid SVG content");
        }

        // Enhanced SVG cleanup
        svg = svg
          .replace(/<style[^>]*>[\s\S]*?<\/style>/g, "")
          .replace(/style="[^"]*"/g, "")
          .replace(/class="[^"]*"/g, "")
          .replace(/fill="[^"]*"/g, "")
          .replace(/stroke="[^"]*"/g, "")
          .replace(/stroke-width="[^"]*"/g, "")
          .replace(
            /(<(?:path|circle|line|polyline|rect)[^>]*?)(\/?>)/g,
            '$1 vector-effect="non-scaling-stroke"$2'
          );

        setSvgContent(svg);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load SVG");
      }
    };

    fetchSvg();
  }, [iconSrc]);

  if (error) {
    console.error("SVG loading error:", error);
    return null;
  }

  if (!svgContent) {
    return null;
  }

  return (
    <div className={cn("relative w-full h-full animated-svg-wrapper", className)}>
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        dangerouslySetInnerHTML={{
          __html: svgContent.replace(
            /<svg/,
            '<svg class="w-full h-full animated-svg" style="stroke: hsl(var(--primary-2)); stroke-width: 1.25;"'
          ),
        }}
      />
      <style jsx>{`
        .animated-svg-wrapper :global(.animated-svg path),
        .animated-svg-wrapper :global(.animated-svg circle),
        .animated-svg-wrapper :global(.animated-svg line),
        .animated-svg-wrapper :global(.animated-svg polyline),
        .animated-svg-wrapper :global(.animated-svg rect) {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          fill: none;
          animation: animated-svg-draw 2s ease-in-out forwards;
          stroke: hsl(var(--primary-2));
        }

        @keyframes animated-svg-draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        .animated-svg-wrapper :global(.animated-svg) {
          isolation: isolate;
        }

        .animated-svg-wrapper :global(.animated-svg *) {
          stroke-width: 1.25;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke: hsl(var(--primary-2));
        }
      `}</style>
    </div>
  );
};

export default AnimatedSvgIcon;
