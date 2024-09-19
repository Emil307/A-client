import axios from "axios";
import { getCookie } from "@/app/lib/coockies";

const API = process.env.NEXT_PUBLIC_API_URL;

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

export async function createPost(text: string, predecessorId?: number) {
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
      predecessorId: predecessorId,
    },
  });

  return data.data;
}
