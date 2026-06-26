
import axios from "axios"

export const api = axios.create( { 
  baseURL: "https://catalogo-de-productos-abgr.onrender.com/api" ,
  withCredentials: true
} )