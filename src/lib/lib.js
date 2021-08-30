export const emailValidator = (email) => {
  return email === "" || !email.includes("@");
};

export const passwordValidator = (password) => {
  return password === "" || password.length < 6;
};

export const passwordConfirmationValid = (password, confirm) => {
  return password !== confirm;
};
