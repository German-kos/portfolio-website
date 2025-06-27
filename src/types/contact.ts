export interface FormDataInterface {
  name: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  inquiryType?: string;
  subject?: string;
  message?: string;
}
