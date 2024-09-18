import axios from "axios";

const API = "http://localhost:8080";

export const login = async (email: string, password: string) => {
  const res = await axios({
    url: `${API}/auth/login`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    data: {
      email: email,
      password: password,
    },
  });

  return res;
};
