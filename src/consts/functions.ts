export const checkEmailValidity = (email: any) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const passwordCheck = (pass: any, passConfirm: any) => {
  if (pass.length != 0 && passConfirm.length != 0 && pass === passConfirm) {
    return true;
  }
  return false;
};
