const sendTemporaryPasswordTemplate = ({ email, name, password }) => {
  const title = `Welcome aboard, ${name}`;
  const message = `Use this ${password} as temporory password to login Wesync.`;
  return `${title}-${message}`;
};

export { sendTemporaryPasswordTemplate };
