import axios from "axios";

const API = "http://localhost:5000/api/analyze";

export const analyzeEmail = async (email) => {
  const response = await axios.post(API, {
    email,
  });

  return response.data;
};
