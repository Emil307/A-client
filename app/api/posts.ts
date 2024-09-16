import axios from "axios";

const API = "http://localhost:8080";

export async function fetchPosts() {
  try {
    const data = await axios({
      url: `${API}/posts/`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    });

    return data.data;
  } catch (e) {
    throw new Error("Failed to fetch posts.");
  }
}
