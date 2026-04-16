import axios from "axios";

const API = import.meta.env.VITE_API_URL + "/auth";

export const registerUser = async (data) => {
  const res = await axios.post(`${API}/register`, data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await axios.post(`${API}/login`, data);
  return res.data;
};

export const getProfile = async (token) => {
  const res = await axios.get(`${API}/profile/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
