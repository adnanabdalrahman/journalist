const BASEURL = "http://localhost:3000/posts";

// get posts
export const getPosts = async () => {
  const response = await fetch(BASEURL);
  if (!response.ok) {
    throw new Error("somtehing went wrong");
  }
  return response.json();
};

// get one Post
export const getPost = async (id) => {
  const response = await fetch(`${BASEURL}/${id}`);
  if (!response.ok) {
    throw new Error("somtehing wen wrong");
  }
  return response.json();
};

//update Post
export const updatePost = async (id, post) => {
  try {
    const res = await fetch(`${BASEURL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });

    if (!res.ok) {
      throw new Error("somtehing went wrong");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// create Post
export const createPost = async (post) => {
  try {
    const res = await fetch(BASEURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });

    if (!res.ok) {
      throw new Error("somtehing went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

// delete Post
export const deletePost = async (id) => {
  const response = await fetch(`${BASEURL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("somtehing went wrong");
  }
};
