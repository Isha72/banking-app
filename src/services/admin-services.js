import { myAxios } from "./Helper";

export const register = (user) => {
  return myAxios
    .post("/api/admin/register", user)
    .then((response) => response.data)
    .catch(error => console.error(`There was an error registering the admin: ${error}`));
};

export const login = (user) => {
  return myAxios
    .post("/api/admin/login", user)
    .then((response) => response.data)
    .catch(error => console.error(`There was an error logging in the admin: ${error}`));
};
