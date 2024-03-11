import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.sub
}

export const getDetailUser = (id, callback) => {
  axios
  .get(`https://fakestoreapi.com/users/${id}`)
  .then((res) => {
    callback(res.data);
  })
  .catch((err) => {
    console.log(err)
  })
};
