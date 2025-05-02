import axios from "axios";

const API = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const signup = (user) => API.post("/users/", user);
export const login = (credentials) => API.post("/auth/login", credentials);
export const getProfile = (token) =>
  API.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getAllProducts = () => API.get("/products");
export const getProductById = (id) => API.get(`/products/${id}`);

export default API;
