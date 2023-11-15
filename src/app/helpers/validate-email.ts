export const validateEmail = (email: string) => {
  const reg = /^\w+\@\w+\.\w+$/i;
  return !!email.match(reg);
};
