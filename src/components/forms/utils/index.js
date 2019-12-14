export const getDefaultFormValues = (formKey = '', formData = {}) => {
  return formData[formKey] ? { ...formData[formKey] } : {};
};
