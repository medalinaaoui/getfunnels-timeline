import axios from "axios";

export default axios.create({
  baseURL: "/api", // Next.js API route base URL
  headers: {
    "Content-Type": "application/json",
  },
});
