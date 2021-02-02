import axios from 'axios';

export const client = axios.create({
  baseURL: '',
  // baseURL: 'http://10.0.2.2:5000/api/',
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const {response} = error;
    if (response.data.responseCode === 401) {
      return response;
    } else if (response.data.responseCode === 400) {
      return response;
    } else if (response.data.responseCode === 422) {
      return response;
    } else {
      return response;
    }

    return Promise.reject(error.response);
  },
);
