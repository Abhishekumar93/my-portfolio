export const capitalizeText = (text: string) => {
  if (!text) return null;

  return text.replace(/-/g, " ").replace(/_/g, " ");
};
