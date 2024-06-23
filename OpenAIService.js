import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',  // Proxy server URL
});

export const analyzeText = async (text) => {
  try {
    const response = await API.post('/analyze-emotion', { text });
    return response.data;
  } catch (error) {
    console.error('Error analyzing text:', error);
    return { error: 'Failed to analyze text' };
  }
};
