import axios from "axios";
import { getCookie } from "@/app/lib/coockies";

const API = "http://localhost:8080";

export async function getPosts() {
  const data = await axios({
    url: `${API}/posts/`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
      Authorization: `Bearer ${getCookie("access")}`,
    },
  });

  return data.data;
}

export async function createPost(text: string) {
  const data = await axios({
    url: `${API}/posts/`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
      Authorization: `Bearer ${getCookie("access")}`,
    },
    data: {
      body: text,
    },
  });

  return data.data;
}
