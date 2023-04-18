import axios from "axios";
// here  = instance: AxiosInstance
let instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", //its a commonn format everything need this if you wanna serach anything u need to write after this
});
export default instance;
