import type { FormDataInterface } from "../types";

export const submitContactForm = async (
  formData: FormDataInterface
): Promise<void> => {
  // Simulate API call - replace with your actual endpoint later
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Log form data (replace with actual API call)
  console.log("Form submitted:", formData);
};
