"use client";

import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  onClose: () => void;
}
export default function ApplicationPopup({ onClose }: Props) {
  const t = useTranslations("behindthebrand.teamsction.applicationpopup");
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          title="Close"
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t("title")}</h2>

        <div className="space-y-4 text-gray-600">
          <p>
            {t("subtitle1")}{" "}
            <a className="font-semibold" href="mailto:career@Recruitment4u.co">
              career@Recruitment4u.online
            </a>{" "}
            <span>{t("subtitle2")}.</span>
          </p>
          <p>{t("desc1")}</p>
          <p className="text-sm text-gray-500">{t("desc2")}</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 cursor-pointer py-2 bg-primary-secondary text-primary  rounded-md hover:bg-primary hover:text-white duration-300">
            {t("btn")}
          </button>
        </div>
      </div>
    </div>
  );
}
