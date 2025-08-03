import type React from 'react';

const emailRegex = (value: string) => !/^\S+@\S+\.\S+$/.test(value);
const phoneRegex = (value: string) =>
  !/^\d{10}$/.test(value.replace(/\D/g, ''));
export const nameRegex = (value: string) => value.replace(/[^a-zA-Z\s]/g, '');

export const formFields = {
  name: '',
  phoneNumber: '',
  email: '',
  body: '',
};

export interface FormFieldsType {
  name: string;
  phoneNumber: string;
  email: string;
  body: string;
}

export const isEveryErrorCleared = (errors: FormFieldsType) =>
  Object.values(errors).every((error) => !error);

export const isEveryFieldFilled = (formValues: FormFieldsType) =>
  Object.values(formValues).every((value) => value.trim());

export const validateField = (
  key: string,
  value: string,
  setStateAction: (action: React.SetStateAction<FormFieldsType>) => void,
) => {
  let error = '';

  if (!value.trim()) {
    error = 'This field is required.';
  } else {
    if (key === 'email' && emailRegex(value)) {
      error = 'Email is not valid, Please enter a valid email.';
    }

    if (key === 'phoneNumber' && phoneRegex(value)) {
      error =
        'Phone number is not valid, please enter a valid 10-digit phone number';
    }
  }

  setStateAction((prev) => ({ ...prev, [key]: error }));
};

export const phoneNumberMask = (value: string) => {
  const digits = value.replace(/\D/g, '');

  if (digits.length <= 3) {
    return `(${digits}`;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

export const apiResponse = async (
  apiUrl: string,
  method: string,
  data: object,
) =>
  await fetch(apiUrl, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
