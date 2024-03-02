import { myAxios } from "./Helper";

export const register = (user) => {
  return myAxios
    .post("/api/users/register", user)
    .then((response) => response.data);
};
