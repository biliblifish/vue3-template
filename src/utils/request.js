import axios from 'axios';

const request = axios.create({
  timeout: 60000,
});

const requestMap = new Map();

request.interceptors.request.use((config) => {
  if (requestMap.get(config.url)) {
    console.log(1);
    requestMap.get(config.url).abort();
    requestMap.delete(config.url);
  }
  const cancelController = new AbortController();
  console.log(requestMap);
  config.signal = cancelController.signal;
  requestMap.set(config.url, cancelController);
  return config;
});

request.interceptors.response.use((response) => {
  requestMap.delete(response.config.url);
  return response;
});

export default request;
