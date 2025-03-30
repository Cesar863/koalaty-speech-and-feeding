import type React from 'react';

const emailRegex = (value: string) => !/^\S+@\S+\.\S+$/.test(value);
const phoneRegex = (value: string) =>
  !/^\d{10}$/.test(value.replace(/\D/g, ''));

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
  name: string,
  value: string,
  setStateAction: (action: React.SetStateAction<FormFieldsType>) => void,
) => {
  let error = '';

  if (!value.trim()) {
    error = 'This field is required.';
  } else {
    if (name === 'email' && emailRegex(value)) {
      error = 'Email is not valid, Please enter a valid email.';
    }

    if (name === 'phoneNumber' && phoneRegex(value)) {
      error =
        'Phone number is not valid, please enter a valid 10-digit phone number';
    }
  }

  setStateAction((prev) => ({ ...prev, [name]: error }));
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
