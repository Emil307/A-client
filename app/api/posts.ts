import axios from "axios";

const API = "http://localhost:8080";

export async function getPosts() {
  const data = await axios({
    url: `${API}/posts/`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
  });

  return data.data;
}
