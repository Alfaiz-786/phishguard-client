import axios from "axios";

const API = "https://phishguard-server-ro9d.onrender.com/api/analyze";

export const analyzeEmail = async (email) => {
  const response = await axios.post(API, {
    email,
  });

  return response.data;
};
