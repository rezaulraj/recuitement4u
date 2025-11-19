import React from "react";
import { UserCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HrWhatDo() {
  const t = useTranslations("hrconsulting");
  return (
    <section className="bg-[#F8F8F8] mx-auto py-12">
      <h1 className="text-[52px] text-center text-black font-bold">
        {t("whatsdo.title")}
      </h1>
      <div className="container max-w-[900px] pb-20 mx-auto">
        {/* Use flex for same height and wrap for responsiveness */}
        <div className="flex flex-col md:flex-row mt-10 gap-8">
          {/* Box 1 */}
          <div className="flex-1 flex flex-col justify-between bg-white p-6 rounded-lg shadow-md">
            <div>
              <UserCheck height={60} width={70} className="text-primary" />
              <div className="mt-10">
                <h4 className="text-black text-[30px] font-bold">
                  {t("whatsdo.card1.title")}
                </h4>
                <p className="text-[20px] text-black font-normal">
                  {t("whatsdo.card1.desc1")}
                </p>
                <p className="mt-5 text-primary text-[20px] font-normal">
                  {t("whatsdo.card1.desc2")}
                </p>
              </div>
            </div>
            {/* <button className="text-[20px] mt-5 text-primary font-bold underline text-left">
              More details
            </button> */}
          </div>

          {/* Box 2 */}
          <div className="flex-1 flex flex-col justify-between bg-white p-6 rounded-lg shadow-md">
            <div>
              <UserCheck height={60} width={70} className="text-primary" />
              <div className="mt-10">
                <h4 className="text-black text-[30px] font-bold">
                  {t("whatsdo.card2.title")}
                </h4>
                <p className="text-[20px] text-black font-normal">
                  {t("whatsdo.card2.desc1")}
                </p>
              </div>
            </div>
            {/* <button className="text-[20px] mt-5 text-primary font-bold underline text-left">
              More details
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
