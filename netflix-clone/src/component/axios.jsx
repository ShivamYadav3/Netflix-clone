import axios from "axios";
// here  = instance: AxiosInstance
let instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;
