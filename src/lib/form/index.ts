// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toFormData = (data: any): FormData => {
  if (data instanceof FormData) {
    return data;
  }
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  return formData;
};
