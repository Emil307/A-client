import axios from "axios";
import { getCookie } from "@/app/lib/coockies";

const API = "http://localhost:8080";

export async function getUser(userId: number) {
  const data = await axios({
    url: `${API}/users/${userId}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
      Authorization: `Bearer ${getCookie("access")}`,
    },
  });

  return data.data;
}
