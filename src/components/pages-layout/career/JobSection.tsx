"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiClock,
  FiDollarSign,
  FiUsers,
  FiShare2,
  FiBriefcase,
  FiCalendar,
  FiUser,
  FiAward,
  FiFilter,
  FiX,
  FiUpload,
  FiFile,
} from "react-icons/fi";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaRegCopy,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
interface Job {
  SL_No: number;
  Date: string;
  JobCategory: string;
  Country: string;
  Title: string;
  Vacancies: number;
  Industry: string;
  CandidatesOrigin: string;
  Description: string;
  JobType: string;
  Shift: string;
  Gender: string;
  Salary: string;
  Experience: string;
  Requirements: string;
  Status: string;
}

type JobCategory = "all" | "HandsOn_Jobs" | "Administrative_Job";

interface ApplyFormProps {
  job: Job;
  onClose: () => void;
}

const ApplyForm: React.FC<ApplyFormProps> = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Application submitted:", {
      ...formData,
      cvFile,
      job: job.Title,
    });
    setIsSubmitting(false);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Apply for {job.Title}
            </h2>
            <p className="text-gray-600 mt-1">
              {job.Industry} • {job.Country}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FiX className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Job Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Position:</span>
                <p className="font-medium text-gray-500">{job.Title}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Location:</span>
                <p className="font-medium text-gray-500">{job.Country}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Salary:</span>
                <p className="font-medium text-gray-500">{job.Salary}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Experience:</span>
                <p className="font-medium text-gray-500">{job.Experience}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#70C8BC] focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#70C8BC] focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#70C8BC] focus:border-transparent transition-all"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload CV/Resume *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#70C8BC] transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="cv-upload"
                  required
                />
                <label htmlFor="cv-upload" className="cursor-pointer">
                  <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">
                    {cvFile ? cvFile.name : "Click to upload your CV"}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    PDF, DOC, DOCX (Max 5MB)
                  </p>
                </label>
              </div>
              {cvFile && (
                <div className="flex items-center gap-2 mt-2 text-green-600">
                  <FiFile className="w-4 h-4" />
                  <span className="text-sm">{cvFile.name}</span>
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter
              </label>
              <textarea
                rows={4}
                value={formData.coverLetter}
                onChange={(e) =>
                  setFormData({ ...formData, coverLetter: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#70C8BC] focus:border-transparent transition-all"
                placeholder="Tell us why you're the perfect candidate for this position..."
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#70C8BC] hover:bg-[#5ab0a5] text-white rounded-xl font-semibold py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);

  const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
      // Romania: "🇷🇴",
      // Serbia: "🇷🇸",
      // Germany: "🇩🇪",
      // France: "🇫🇷",
      // Italy: "🇮🇹",
      // Spain: "🇪🇸",
      // UK: "🇬🇧",
      USA: "🇺🇸",
      // UAE: "🇦🇪",
      // Qatar: "🇶🇦",
    };
    return flags[country] || "🌍";
  };

  const shareJob = (platform: string) => {
    const jobUrl = `${window.location.origin}/jobs/${job.SL_No}`;
    const text = `Check out this job: ${job.Title} at ${job.Country}`;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        jobUrl
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(jobUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        jobUrl
      )}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(
        text + " " + jobUrl
      )}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank");
    setShowShareMenu(false);
  };

  const copyLink = async () => {
    const jobUrl = `${window.location.origin}/jobs/${job.SL_No}`;
    await navigator.clipboard.writeText(jobUrl);
    setShowShareMenu(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#70C8BC] to-[#5ab0a5] rounded-xl flex items-center justify-center">
                <FiBriefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#70C8BC] transition-colors">
                  {job.Title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-2xl">
                    {getCountryFlag(job.Country)}
                  </span>
                  <span className="text-gray-600 font-medium">
                    {job.Country}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FiShare2 className="w-5 h-5 text-gray-500" />
              </button>

              {showShareMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute right-0 top-12 bg-white rounded-xl shadow-2xl border border-gray-200 p-3 z-10 min-w-[160px]"
                >
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <button
                      onClick={() => shareJob("facebook")}
                      className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex flex-col items-center gap-1"
                    >
                      <FaFacebook className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-700">Facebook</span>
                    </button>
                    <button
                      onClick={() => shareJob("twitter")}
                      className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex flex-col items-center gap-1"
                    >
                      <FaTwitter className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-gray-700">Twitter</span>
                    </button>
                    <button
                      onClick={() => shareJob("linkedin")}
                      className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex flex-col items-center gap-1"
                    >
                      <FaLinkedin className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-700">LinkedIn</span>
                    </button>
                    <button
                      onClick={() => shareJob("whatsapp")}
                      className="p-2 bg-green-50 hover:bg-green-100 rounded-lg transition-colors flex flex-col items-center gap-1"
                    >
                      <FaWhatsapp className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-gray-700">WhatsApp</span>
                    </button>
                  </div>
                  <button
                    onClick={copyLink}
                    className="w-full p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <FaRegCopy className="w-3 h-3 text-gray-600" />
                    <span className="text-xs text-gray-700">Copy Link</span>
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{job.Description}</p>
          <h4 className="text-gray-700 font-bold text-lg">
            Candidates Origin:
          </h4>
          <div className="inline-flex ">
            <p className="text-gray-600 leading-relaxed bg-[#70C8BC]/20 px-4 py-2 rounded-full font-semibold text-lg">
              {job.CandidatesOrigin}
            </p>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-3">
              <FiDollarSign className="w-5 h-5 text-[#70C8BC]" />
              <div>
                <p className="text-sm text-gray-500">Salary</p>
                <p className="font-semibold text-gray-900">{job.Salary}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiUsers className="w-5 h-5 text-[#70C8BC]" />
              <div>
                <p className="text-sm text-gray-500">Vacancies</p>
                <p className="font-semibold text-gray-900">
                  {job.Vacancies} positions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiClock className="w-5 h-5 text-[#70C8BC]" />
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-semibold text-gray-900">{job.Experience}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiUser className="w-5 h-5 text-[#70C8BC]" />
              <div>
                <p className="text-sm text-gray-500">Gender</p>
                <p className="font-semibold text-gray-900">{job.Gender}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              {job.Industry}
            </span>
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              {job.JobType}
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              {job.Shift}
            </span>
            {job.JobCategory === "Featured_Jobs" && (
              <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium flex items-center gap-1">
                <FiAward className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FiCalendar className="w-4 h-4" />
              Posted {new Date(job.Date).toLocaleDateString()}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowApplyForm(true)}
              className="bg-[#70C8BC] hover:bg-[#5ab0a5] text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Apply Now
            </motion.button>
          </div>
        </div>
      </motion.div>

      {showApplyForm && (
        <ApplyForm job={job} onClose={() => setShowApplyForm(false)} />
      )}
    </>
  );
};

const JobCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-32"></div>
              <div className="h-3 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="space-y-1 flex-1">
                <div className="h-3 bg-gray-200 rounded w-16"></div>
                <div className="h-3 bg-gray-200 rounded w-12"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-6 bg-gray-200 rounded-full w-16"
            ></div>
          ))}
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="h-3 bg-gray-200 rounded w-20"></div>
          <div className="h-10 bg-gray-200 rounded-xl w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default function JobSection() {
  const t = useTranslations("career");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<JobCategory>("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories: { key: JobCategory; label: string; description: string }[] =
    [
      {
        key: "all",
        label: t("sectiontab1"),
        description: t("sectionptab1"),
      },
      {
        key: "HandsOn_Jobs",
        label: t("sectiontab2"),
        description: t("sectionptab2"),
      },
      {
        key: "Administrative_Job",
        label: t("sectiontab3"),
        description: t("sectionptab3"),
      },
    ];

  const sampleJobs: Job[] = [
    {
      SL_No: 1,
      Date: "2025-11-11T18:00:00.000Z",
      JobCategory: "HandsOn_Jobs",
      Country: "Romania",
      Title: "Electrician",
      Vacancies: 5,
      Industry: "Construction",
      CandidatesOrigin: "Any Nationality",
      Description:
        "Installs and maintains electrical wiring and systems safely. Responsible for troubleshooting electrical issues and ensuring compliance with safety standards.",
      JobType: "Full-time",
      Shift: "Day Shift",
      Gender: "Male",
      Salary: "€700–€900",
      Experience: "1-2 Years",
      Requirements: "Need to sit Interview",
      Status: "Active",
    },
    {
      SL_No: 2,
      Date: "2025-11-10T18:00:00.000Z",
      JobCategory: "HandsOn_Jobs",
      Country: "Serbia",
      Title: "Car Painter",
      Vacancies: 3,
      Industry: "Automotive",
      CandidatesOrigin: "Any Nationality",
      Description:
        "Prepares and paints car surfaces with precision. Expertise in color matching and surface preparation techniques.",
      JobType: "Full-time",
      Shift: "Day Shift",
      Gender: "Male",
      Salary: "€500–€750",
      Experience: "1-2 Years",
      Requirements: "Need Work Video",
      Status: "Active",
    },
  ];

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [jobs, activeCategory]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxSihU_-lx49-gr1h4oe6w1H621Nxy2QHfMEx87gGGQKzfvwyQ3V3TMOxx9ypsR_JFdow/exec?site=Divine_Group"
      );
      const data = await response.json();
      setJobs(data || []);
      console.log("data", data);
      // Using sample data for demo
      //   await new Promise((resolve) => setTimeout(resolve, 1500));
      //   setJobs(sampleJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      // Fallback to sample data
      setJobs(sampleJobs);
    } finally {
      setLoading(false);
    }
  };

  const filterJobs = () => {
    if (activeCategory === "all") {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter((job) => job.JobCategory === activeCategory));
    }
    setVisibleCount(6);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleJobs = filteredJobs.slice(0, visibleCount);
  const hasMore = visibleJobs.length < filteredJobs.length;

  return (
    <section id="open-positions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("sectionh1")}
            <span className="text-[#70C8BC]"> {t("sectionh2")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("sectionp")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeCategory === category.key
                    ? "bg-[#70C8BC] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-gray-600 text-lg">
                {
                  categories.find((cat) => cat.key === activeCategory)
                    ?.description
                }
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <JobCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <AnimatePresence>
                {visibleJobs.map((job, index) => (
                  <JobCard key={job.SL_No} job={job} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {hasMore && (
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={loadMore}
                  className="bg-white border border-[#70C8BC] text-[#70C8BC] px-8 py-3 rounded-xl font-semibold hover:bg-[#70C8BC] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Load More Jobs
                </motion.button>
              </div>
            )}

            {filteredJobs.length === 0 && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <FiFilter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-600 mb-2">
                  {t("notFound")}
                </h3>
                <p className="text-gray-500">{t("notFoundp")}</p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
