const formatTime = inputTime => {
  if (!inputTime) return '';
  const [hours, minutes] = inputTime.split(':');

  let formattedTime = '';
  if (hours < 12) {
    formattedTime = `${hours}:${minutes} am`;
  } else {
    formattedTime = `${hours - 12}:${minutes} pm`;
  }

  return formattedTime;
};

export default formatTime;
