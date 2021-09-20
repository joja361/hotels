export const isEmailValid = (email) => {
  return email !== "" && email.includes("@");
};

export const isPasswordValid = (password) => {
  return password !== "" && password.length >= 6;
};
