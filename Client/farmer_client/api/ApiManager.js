import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://10.0.2.2:5000/api',
  mode: 'cors',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;
