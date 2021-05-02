export const checkEmailValidity = (email: string | undefined) => {
  if (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
};
