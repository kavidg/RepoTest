// newsApi.ts
import axios from 'axios';

const API_KEY = '7953e0eed4a141a5b9647520d9ccecc8';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export const fetchNews = async (page: number) => {
  try {
    const response = await axios.get(`${NEWS_API_URL}&page=${page}`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};