type ValidationRule = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean;
};

type ValidationError = {
  [key: string]: string;
};

export const formValidation = {
  validate: (values: { [key: string]: any }, rules: { [key: string]: ValidationRule }): ValidationError => {
    const errors: ValidationError = {};

    Object.keys(rules).forEach((field) => {
      const value = values[field];
      const rule = rules[field];

      if (rule.required && !value) {
        errors[field] = 'This field is required';
      }

      if (value && rule.minLength && value.length < rule.minLength) {
        errors[field] = `Minimum length is ${rule.minLength}`;
      }

      if (value && rule.maxLength && value.length > rule.maxLength) {
        errors[field] = `Maximum length is ${rule.maxLength}`;
      }

      if (value && rule.pattern && !rule.pattern.test(value)) {
        errors[field] = 'Invalid format';
      }

      if (value && rule.custom && !rule.custom(value)) {
        errors[field] = 'Invalid value';
      }
    });

    return errors;
  },

  isEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isPassword: (password: string): boolean => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  }
};