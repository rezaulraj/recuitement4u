"use client";
import Image from "next/image";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import ForCompaniImg from "../../../../public/images/forcompanis.jpg";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

type FormData = {
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  agreeToContact: boolean;
};

export default function CompanyForm() {
  const t = useTranslations("contactform");

  const [formData, setFormData] = useState<FormData>({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    agreeToContact: false,
  });
  const pathname = usePathname(); // e.g. /en/contact
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    const locale = pathname.split("/")[1]; // 'en'
    e.preventDefault();
    setIsFormSubmitted(true); // Set form submission state
    try {
      const response = await fetch(`/${locale}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          formData: formData,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setIsFormSubmitted(false); // Reset form submission state on error
        toast.error(data.error || "Failed to submit form");
        throw new Error(data.error || "Failed to submit form");
      }

      // Reset form on success
      setFormData({
        company: "",
        email: "",
        name: "",
        phone: "",
        message: "",
        agreeToContact: false,
      });
      setIsFormSubmitted(false); // Reset form submission state
      toast.success("submitted successfully");
    } catch (error) {
      console.error("Submission error:", error);
      setIsFormSubmitted(false); // Reset form submission state on error
      toast.error("Failed to submit form");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div
        className={cn(
          "w-screen bg-primary ",
          "left-[50%] right-[50%] mx-[-50vw]",
          "relative -mt-24 px-0",
          "overflow-hidden"
        )}>
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <Image
            src={ForCompaniImg}
            alt="forcompanis"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      <div className="container mx-auto py-12 px-4 sm:px-6 relative">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 max-xl:col-span-12">
            <motion.div
              className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 overflow-hidden "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                    {t("title")}
                  </h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6">
                  <div className="space-y-4">
                    {[
                      { id: "company", label: t("companyname"), type: "text" },
                      { id: "name", label: t("name&surname"), type: "text" },
                      { id: "email", label: t("email"), type: "email" },
                      {
                        id: "phone",
                        label: t("phone"),
                        type: "tel",
                      },
                    ].map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="block text-sm font-medium text-black mb-1.5 sm:mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={String(
                            formData[field.id as keyof typeof formData]
                          )}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm sm:text-base text-black"
                          required
                        />
                      </div>
                    ))}

                    <div>
                      <label
                        htmlFor="note"
                        className="block text-sm font-medium text-black mb-1.5 sm:mb-2">
                        {t("message")}
                      </label>
                      <textarea
                        id="note"
                        name="note"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm sm:text-base text-black"
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreeToContact"
                      name="agreeToContact"
                      checked={formData.agreeToContact}
                      onChange={handleChange}
                      className="mt-1.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      required
                    />
                    <label
                      htmlFor="agreeToContact"
                      className="text-xs mt-1 sm:text-sm leading-relaxed text-black max-w-2xl">
                      {t("agre")}
                    </label>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-primary text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}>
                    {isFormSubmitted ? "Submitting..." : t("send")}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
