import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormField } from ".";
import { validateForm } from "../../../utils";
import type { FormDataInterface, FormErrors } from "../../../types";
import { inquiryOptions } from "../../../data";
import { submitContactForm } from "../../../services";
import { FormSuccessMessage, FormErrorMessage } from ".";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataInterface>({
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

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await submitContactForm(formData);

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
            fieldType="input"
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
            fieldType="input"
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
            fieldType="input"
            value={formData.subject}
            placeholder="What's this about?"
            onChange={handleInputChange}
            errorMessage={errors.subject}
          />

          {/* Inquiry Type Field */}
          <FormField
            label="I'm looking for"
            name="inquiryType"
            type="select"
            fieldType="select"
            value={formData.inquiryType}
            selectOptions={inquiryOptions}
            onChange={handleInputChange}
            errorMessage={errors.inquiryType}
          />
        </div>

        {/* Message Field - Full Width */}
        <FormField
          label="Message"
          name="message"
          type="textarea"
          fieldType="textarea"
          value={formData.message}
          placeholder="Tell me about your project, timeline, budget, and what you're looking for..."
          onChange={handleInputChange}
          errorMessage={errors.message}
          formMessage={formData.message}
        />

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
          {submitStatus === "success" && <FormSuccessMessage />}
          {submitStatus === "error" && <FormErrorMessage />}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ContactForm;
