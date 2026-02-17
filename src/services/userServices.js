const BASEURL = "http://localhost:3000/users";

// get users
export const getUsers = async () => {
  const response = await fetch(BASEURL);
  if (!response.ok) {
    throw new Error("somtehing went wrong");
  }
  return response.json();
};

// get one User
export const getUser = async (id) => {
  const response = await fetch(`${BASEURL}/${id}`);
  if (!response.ok) {
    throw new Error("somtehing wen wrong");
  }
  return response.json();
};

//update User
export const updateUser = async (id, user) => {
  try {
    const res = await fetch(`${BASEURL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      throw new Error("somtehing went wrong");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// create User
export const createUser = async (user) => {
  try {
    const res = await fetch(BASEURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      throw new Error("somtehing went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

// delete User
export const deleteUser = async (id) => {
  const response = await fetch(`${BASEURL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("somtehing went wrong");
  }
};
