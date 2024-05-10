export const checkEmail = (email) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

export const checkPassword = (password) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
};

export const checkFullName = (fullName) => {
  return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(fullName);
};

export const validateSignInDetails = (email, password) => {
  const isValidEmail = checkEmail(email);
  const isValidPassword = checkPassword(password);

  if (!isValidEmail) return "Enter a valid email address.";
  else if (!isValidPassword) return "Enter a valid password.";
  else return null;
};

export const validateSignUpDetails = (email, password, fullName) => {
  const isValidEmail = checkEmail(email);
  const isValidPassword = checkPassword(password);
  const isValidFullName = checkFullName(fullName);

  if (!isValidEmail) return "Enter a valid email address.";
  else if (!isValidPassword) return "Enter a valid password.";
  else if (!isValidFullName) return "Enter a valid full name.";
  else return null;
};
