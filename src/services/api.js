import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

class Api {
  constructor() {
    if (!process.env.VUE_APP_API_URL) {
      throw new Error("API_URL is undefined");
    }

    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";

    Vue.axios.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(endpoint, params) {
    return Vue.axios.get(`/unsecure${endpoint}`, { params });
  }

  post(endpoint, params) {
    return Vue.axios.post(`/unsecure${endpoint}`, params);
  }

  update(endpoint, params) {
    return Vue.axios.put(`/unsecure${endpoint}`, params);
  }

  put(endpoint, params) {
    return Vue.axios.put(`/unsecure${endpoint}`, params);
  }

  delete(endpoint) {
    return Vue.axios.delete(`/unsecure${endpoint}`);
  }
}

const api = new Api();
export default api;
