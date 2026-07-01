export const getVisitorSourceUrl = () => {
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}/api/visitor-source`;
  }
  return process.env.NEXT_PUBLIC_API_BASE_URL
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/visitor-source`
    : 'http://localhost:4000/api/visitor-source';
};
