const checkInputValidation = value => {
  return !/^(?!\.)[a-zA-Z0-9.]+.*$/.test(value);
};

export default checkInputValidation;
