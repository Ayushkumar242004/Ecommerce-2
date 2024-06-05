import axios from "axios";

export const API_BASE_URL = "http://localhost:5454";
const jwt = localStorage.getItem("jwt");

console.log("JWT Token:", jwt); // Log JWT token

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  },
});