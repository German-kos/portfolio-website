import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormField from "./form-field";

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  inquiryType?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    inquiryType: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const inquiryOptions = [
    { value: "freelance", label: "Freelance Project" },
    { value: "fulltime", label: "Full-time Position" },
    { value: "contract", label: "Contract Work" },
    { value: "consultation", label: "Consultation" },
    { value: "other", label: "Other" },
  ];

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Inquiry type validation
    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Block typing if message exceeds max length
    if (name === "message" && value.length > 1000) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log form data (replace with actual API call)
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        inquiryType: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information Row */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          {/* form-field Name replacement test */}
          <FormField
            label="Name or Company Name"
            name="name"
            type="text"
            value={formData.name}
            placeholder="Enter a name"
            onChange={handleInputChange}
            errorMessage={errors.name}
          />
          {/* form-field Email replacement test */}
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            placeholder="your.email@example.com"
            onChange={handleInputChange}
            errorMessage={errors.email}
          />
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          {/* form-field Subject replacement test */}
          <FormField
            label="Subject"
            name="subject"
            type="text"
            value={formData.subject}
            placeholder="What's this about?"
            onChange={handleInputChange}
            errorMessage={errors.subject}
          />

          {/* Project Information Row */}
          {/* Inquiry Type Field */}
          <div className="space-y-2">
            <label
              htmlFor="inquiryType"
              className="block font-medium text-gray-700 text-sm"
            >
              I'm looking for *
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border hover:cursor-pointer rounded-lg bg-white/70 backdrop-blur-sm transition-all duration-200 ${
                errors.inquiryType
                  ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
              } focus:outline-none focus:ring-2`}
            >
              <option value="">Select an option...</option>
              {inquiryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <AnimatePresence>
              {errors.inquiryType && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-600 text-sm"
                >
                  {errors.inquiryType}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Message Field - Full Width */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block font-medium text-gray-700 text-sm"
          >
            Message *
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-4 py-2 pb-8 border rounded-lg bg-white/70 backdrop-blur-sm transition-all duration-200 resize-none ${
                errors.message
                  ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
              } focus:outline-none focus:ring-2`}
              placeholder="Tell me about your project, timeline, budget, and what you're looking for..."
            />
            {/* Character counter inside the textarea */}
            <span
              className={`absolute bottom-2 right-3 text-xs pointer-events-none ${
                formData.message.length >= 20 ? "text-gray-400" : "text-red-400"
              }`}
            >
              {formData.message.length}/1000
            </span>
          </div>
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-600 text-sm"
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r hover:cursor-pointer from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg"
          }`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <div className="flex justify-center items-center space-x-2">
              <svg
                className="w-5 h-5 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Sending...</span>
            </div>
          ) : (
            "Send Message"
          )}
        </motion.button>

        {/* Success/Error Messages */}
        <AnimatePresence>
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-green-100 p-4 border border-green-300 rounded-lg"
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-medium text-green-800">
                  Message sent successfully!
                </p>
              </div>
              <p className="mt-1 text-green-700 text-sm">
                I'll get back to you within 24 hours.
              </p>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-red-100 p-4 border border-red-300 rounded-lg"
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-medium text-red-800">
                  Failed to send message
                </p>
              </div>
              <p className="mt-1 text-red-700 text-sm">
                Please try again or contact me directly.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ContactForm;
