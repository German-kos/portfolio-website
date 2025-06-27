import type { FormDataInterface, FormErrors } from "../types";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData: FormDataInterface): FormErrors => {
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

  return newErrors;
};
