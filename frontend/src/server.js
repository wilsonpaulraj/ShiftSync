import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:8080",
});

const addUser = (email, password) => {
  return server.post("/users", { email, password });
};

const getUser = (email) => {
  return server.get("/users", {
    params: { email },
  });
};

export { addUser, getUser };
