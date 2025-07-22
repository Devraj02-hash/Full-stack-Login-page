// utils to manage auth state using localStorage

export const setAuthUser = (username) => {
  localStorage.setItem("username", username);
};

export const getAuthUser = () => {
  return localStorage.getItem("username");
};

export const removeAuthUser = () => {
  localStorage.removeItem("username");
};
