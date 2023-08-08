const checkInputValidation = value => {
  return !/^(?!\.)[a-zA-Z0-9.\s]+.*$/.test(value);
};

export default checkInputValidation;
