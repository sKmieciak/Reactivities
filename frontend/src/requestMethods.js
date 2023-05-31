import axios from "axios";

const BASE_URL = "http://localhost:3001/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzY4NzA0MmIxOTJmOTJmNWQ5OWJjZSIsImlhdCI6MTY4MTk3NzU4MCwiZXhwIjoxNjg5NzUzNTgwfQ.zDblRQH3yJb9SWwrhqfW4BRK5d2XUdXBVwZOHSZeM9M";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
