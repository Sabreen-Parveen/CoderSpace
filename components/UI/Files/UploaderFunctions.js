export function makeForm(formData) {
  const form = new FormData();
  form.append("subId", formData.subId);
  form.append("files", formData.file);
  form.append("clientName", formData.clientName);
  return form;
}
