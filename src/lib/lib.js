export const isEmailValid = (email) => {
  return email !== "" && email.includes("@");
};

export const isPasswordValid = (password) => {
  return password !== "" && password.length >= 6;
};

export const isConfirmPasswordValid = (password, confirmPassword) => {
  return password === confirmPassword;
};
