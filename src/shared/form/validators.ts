export const validateEmail = (email: string) => {
  const value = email.trim();

  if (!value.length) {
    return 'Email is required';
  }

  const isCorrect = value
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

  return isCorrect ? null : 'Please enter a valid e-mail';
};

export const validatePassword = (password: string) => {
  const value = password.trim();

  if (!value.length) {

    return 'Password is required';
  }
  if (password.length < 8) {
    return 'Password must have at least 8 charters';
  }
  const isCorrect = value
    .toLowerCase()
    .match(/[a-zA-Z0-9]/);

  return isCorrect ? null : 'You can only use number and latin letters';
}
