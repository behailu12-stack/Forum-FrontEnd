import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_base_url}/api/`,
});

export default instance;
