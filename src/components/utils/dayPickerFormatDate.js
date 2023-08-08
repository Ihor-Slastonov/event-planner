const dayPickerFormatDate = inputDate => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(inputDate);
  return date.toLocaleDateString('en-GB', options).replace(/\//g, '.');
};

export default dayPickerFormatDate;
