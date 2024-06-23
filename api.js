import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',  // Change this URL if your back-end is hosted elsewhere
});

export default API;
