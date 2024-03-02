import { myAxios } from "./Helper";

export const getAccount = (id) => {
  return myAxios
    .get(`/api/account/${id}`)
    .then((response) => response.data)
    .catch((error) =>
      console.error(
        `There was an error retrieving the account of ID ${id}: ${error}`
      )
    );
};

export const getTransactionHistory = (id) => {
  return myAxios
    .get(`/api/account/${id}/history`)
    .then((response) => response.data)
    .catch((error) =>
      console.error(
        `There was an error getting history of the account of ID ${id}: ${error}`
      )
    );
};

export const depositMoney = (id, bodyData) => {
  return myAxios
    .post(`/api/account/${id}/deposit`, bodyData)
    .then((response) => response.data)
    .catch((error) =>
      console.error(`There was an error depositing money: ${error}`)
    );
};

export const withdrawMoney = (id, bodyData) => {
  return myAxios
    .post(`/api/account/${id}/withdraw`, bodyData)
    .then((response) => response.data)
    .catch((error) =>
      console.error(`There was an error withdrawing money: ${error}`)
    );
};

export const fundTransfer = (senderAccountNumber, bodyData) => {
  return myAxios
    .post(`/api/account/${senderAccountNumber}/transfer`, bodyData)
    .then((response) => response.data)
    .catch((error) =>
      console.error(`There was an error in Fund Transfer: ${error}`)
    );
};
