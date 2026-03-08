const BASE_URL = "http://localhost:3000/posts";

// GET all posts
export const getPosts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

// GET single post
export const getPost = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

// CREATE post
export const createPost = async (post) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error; // rethrow if you want the caller to handle it
  }
};

// UPDATE post
export const updatePost = async (id, post) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });

  return res.json();
};

// DELETE post
export const deletePost = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
