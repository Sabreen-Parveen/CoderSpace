export function isBackendError(error) {
  return error.response?.data && error.isAxiosError;
}

export function handleBackendError(error) {
  const errorData = error.response.data;
  return {
    message: errorData.message,
    code: errorData.code,
  };
}
