import axios from 'axios';

const BASE_URL = 'https://639b116c31877e43d6811d3e.mockapi.io/events';

const fetchAllEvents = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

const fetchEventById = async id => {
  const response = await axios.get(BASE_URL, { params: { id } });
  return response.data;
};

const deleteEventById = async id => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

const eventsApi = { fetchAllEvents, fetchEventById, deleteEventById };

export default eventsApi;
