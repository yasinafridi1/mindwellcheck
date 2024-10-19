import axios from "axios";
import { setToken } from "../../Utils/tokenutils";
import store from "../store";
// Create a new instance of axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Attach headers here
    const accessToken = localStorage.getItem("us_access");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${JSON.parse(accessToken)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      !error.config._isRetry
    ) {
      error.config._isRetry = true;

      try {
        const refresh_token = localStorage.getItem("us_refresh");
        if (refresh_token) {
          const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/refreshToken`,
            { refreshToken: JSON.parse(refresh_token) }
          );
          setToken(response.data); // Update tokens in local storage
          // Retry the original request with the new access token
          error.config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return axios(error.config);
        } else {
          store.dispatch({ type: "LOGOUT" });
        }
      } catch (error) {
        // Handle refresh token failure
        store.dispatch({ type: "LOGOUT" });
        throw error;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
