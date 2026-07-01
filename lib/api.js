export const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const getVisitorSourceUrl = () => {
  return process.env.NEXT_PUBLIC_VISITOR_API_URL || `${apiBase}/api/visitor-source`;
};

export const getContactApiUrl = () => {
  return apiBase ? `${apiBase}/api/contact` : "/api/contact";
};
