import Axios from "axios";

export const httpClient = Axios.create({
  baseURL: '/api',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});
