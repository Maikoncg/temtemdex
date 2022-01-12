import Axios from "axios";

const TemtemApi = Axios.create({
  baseURL: 'https://temtem-api.mael.tech/api'
});

export default TemtemApi;
