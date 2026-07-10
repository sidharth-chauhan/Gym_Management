import axios from "axios";


console.log(process.env.EXPO_PUBLIC_BACKEND_API);


const api =axios.create({
  baseURL: process.env.EXPO_PUBLIC_BACKEND_API ,
  headers:{
    "Content-Type": "application/json"
  }
})

export default api;