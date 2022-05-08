import axios from "axios";

const API_URL = "http://localhost:8080"

export async function login(username, password) {
   const response = await axios.post(API_URL + "/api/login", { username, password })

   if (response.data.token)
      localStorage.setItem("token", JSON.stringify(response.data.token));

   return response;
}

export async function registration(username, password, mail) {
   const response = await axios.post(API_URL + "/api/signup", { username, password, mail })

   if (response.data.token)
      localStorage.setItem("token", JSON.stringify(response.data.token));

   return response.data.token
}

export async function logout() {
   localStorage.removeItem("token")
}
