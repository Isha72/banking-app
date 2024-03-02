import { myAxios } from "./Helper";

export const register = (user) => {
  return myAxios
    .post("/api/users/register", user)
    .then((response) => response.data)
    .catch(error => console.error(`There was an error registering the user: ${error}`));
};

export const login = (user) => {
  return myAxios
    .post("/api/users/login", user)
    .then((response) => response.data)
    .catch(error => console.error(`There was an error logging in the user: ${error}`));
};
