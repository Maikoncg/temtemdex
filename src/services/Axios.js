import Axios from "axios";

const api = Axios.create({
  baseURL: 'https://temtem-api.mael.tech/api'
});

export default api;
