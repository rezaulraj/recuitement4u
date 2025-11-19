import Image from "next/image";
import React, { JSX } from "react";

type TextParagraph = {
  type: "text";
  content: string;
};

type ImageParagraph = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
};

type HtmlParagraph = {
  type: "html";
  content: string;
};

export type ParagraphItem = TextParagraph | ImageParagraph | HtmlParagraph;

interface BlogContentProps {
  paragraphs: ParagraphItem[];
}

export function BlogContent({ paragraphs }: BlogContentProps): JSX.Element {
  return (
    <div className="max-w-3xl mt-10 mx-auto space-y-6">
      {paragraphs.map((item, index) => {
        if (item.type === "text") {
          return (
            <p
              key={index}
              className="text-lg text-primary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          );
        }

        if (item.type === "image") {
          return (
            <div key={index} className="my-8">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority={index === 0}
                />
              </div>
              {item.caption && (
                <p className="mt-2 text-sm text-center text-gray-600">
                  {item.caption}
                </p>
              )}
            </div>
          );
        }

        if (item.type === "html") {
          return (
            <div
              key={index}
              className="space-y-2 my-4 text-lg text-primary"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          );
        }

        return null;
      })}
    </div>
  );
}
