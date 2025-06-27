import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FormField, SubmitButton } from ".";
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
        <SubmitButton isSubmitting={isSubmitting} />

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
