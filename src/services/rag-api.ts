import axios from "axios";

const API_URL = "https://rag-api-production-4ec9.up.railway.app/query"; 

export const askRAG = async (query: string) => {
  const response = await axios.post(API_URL, {
    query,
  });

  return response.data.answer;
};
