const BASEURL = "http://localhost:3000/posts";
import axios from "axios";

// get posts
export const getPosts = async () => {
  const response = await axios.get(BASEURL);
  return response.data;
};

// get one Post
export const getPost = async (id) => {
  const response = await axios.get(`${BASEURL}/${id}`);
  return response.data;
};

// update Post
export const updatePost = async (id, data, token) => {
  try {
    const res = await axios.put(`${BASEURL}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// create Post
export const createPost = async (data, token) => {
  try {
    // Send post request with authorization header
    await axios.post(BASEURL, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    // Log error if request fails
    console.log(error);
  }
};

// delete Post
export const deletePost = async (id, token) => {
  await axios.delete(`${BASEURL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
