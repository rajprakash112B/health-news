import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsdata.io/api/1/news';

export const fetchHealthNews = async (query = '') => {
  try {
    const params = {
      category: 'health',
      country: 'in',  
      language: 'en', 
      apiKey: API_KEY,
    };

    if (query) {
      params.q = query;
    }

    const response = await axios.get(BASE_URL, { params });
    console.log('Fetched news data:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    return { results: [] };
  }
};
