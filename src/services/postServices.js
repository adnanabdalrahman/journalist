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

//update Post
export const updatePost = async (id, post) => {
  try {
    const res = await axios.put(`${BASEURL}/${id}`, post, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// create Post
export const createPost = async (post) => {
  try {
    await axios.post(BASEURL, post, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
};

// delete Post
export const deletePost = async (id) => {
  await axios.delete(`${BASEURL}/${id}`);
};
