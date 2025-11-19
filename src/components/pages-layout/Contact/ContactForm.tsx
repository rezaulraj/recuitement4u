"use client";
// import { toast } from "sonner";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCirclePlus,
  PhoneCall,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactCard from "@/components/common/ContactCard";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
export const ContactForm = () => {
  const t = useTranslations("contactform");
  const t1 = useTranslations("contactus");
  const pathname = usePathname(); // e.g. /en/contact
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    const locale = pathname.split("/")[1]; // 'en'
    e.preventDefault();
    setIsFormSubmitted(true);
    try {
      const res = await fetch(`/${locale}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully");

        setFormData({
          company: "",
          name: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to send message");
    } finally {
      setIsFormSubmitted(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    // Update form data based on input type
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div className="w-full py-6 sm:py-8 lg:py-10 relative">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5 max-xl:col-span-12">
            <div className=" border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 bg-white ">
              <h5 className="text-2xl sm:text-3xl font-bold text-black">
                {t1("letscontact")}
              </h5>
              <div className="mt-6 sm:mt-8 space-y-4">
                <ContactCard
                  label="Mobile"
                  text="+40 730982342"
                  icon={<Phone className="w-10 h-10 text-primary" />}
                />
              </div>
              <div className="mt-6 sm:mt-8 space-y-4">
                <ContactCard
                  label="Office Phone"
                  text="+40 730982342"
                  icon={<PhoneCall className="w-10 h-10 text-primary" />}
                />
              </div>
              <div className="mt-6 sm:mt-8 space-y-4">
                <ContactCard
                  label="Whats App"
                  text="+40 730982342"
                  icon={
                    <MessageCirclePlus className="w-10 h-10 text-primary" />
                  }
                />
              </div>
              <div className="mt-6 sm:mt-8 space-y-4">
                <ContactCard
                  label="E-mail"
                  text="HRhub@Recruitment4u.co"
                  icon={<Mail className="w-10 h-10 text-primary" />}
                />
              </div>
              <div className="mt-6 sm:mt-8 space-y-4">
                <ContactCard
                  label="Head Office"
                  text="Str. Sg. Constantin Moise 5 D BUCURESTI, Loc. SECTORUL 6"
                  icon={<MapPin className="w-10 h-10 text-primary" />}
                />
              </div>
            </div>
          </div>
          <div className="col-span-7 max-xl:col-span-12">
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
                        type: "text",
                      },
                      { id: "country", label: t("country"), type: "text" },
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
                        htmlFor="message"
                        className="block text-sm font-medium text-black mb-1.5 sm:mb-2">
                        {t("message")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm sm:text-base text-black"
                      />
                    </div>
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
    </div>
  );
};
