const getBackendBase = () => {
  const url = process.env.NEXT_PUBLIC_VISITOR_API_URL;
  return url ? url.replace(/\/$/, "") : "";
};

export const getVisitorSourceUrl = () => {
  const backend = getBackendBase();
  return backend ? `${backend}/api/visitor-source` : "/api/visitor-source";
};

export const getVisitorTestDocumentUrl = () => {
  const backend = getBackendBase();
  return backend ? `${backend}/api/visitor-test-document` : "/api/visitor-test-document";
};
