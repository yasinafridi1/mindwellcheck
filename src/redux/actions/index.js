import axios from "axios";
import { removeToken, setToken } from "../../Utils/tokenutils";
import api from "./axiosInstance";
import { errorToast } from "../../Utils/Toast";

export const signup = async (payload) => {
  try {
    const response = await api.post("/auth/register", payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const signIn = (payload) => async (dispatch) => {
  try {
    const response = await api.post(`/auth/login`, payload);
    setToken(response.data);
    dispatch({ type: "LOGIN", payload: response.data });
    dispatch({ type: "DASHBOARD_DATA", payload: response.data });
    return response;
  } catch (error) {
    errorToast(error?.response?.data?.message || "Something went wrong");
    console.error(error);
  }
};

export const submitAddictionServey = (payload) => async (dispatch) => {
  try {
    const response = await api.post("/servey", payload);
    dispatch({ type: "DASHBOARD_DATA", payload: response.data });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const otherServeyData = (payload, serveyName) => async (dispatch) => {
  try {
    const response = await api.post(
      `/servey/other?surveyName=${serveyName}`,
      payload
    );
    dispatch({ type: "ADD_NEW_SERVEY_DATA", payload: response?.data });
    return { serveyName, serveyFactor: response?.data?.data?.serveyFactor };
  } catch (error) {
    throw error;
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await api.get("/auth/logout");
    removeToken();
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "REMOVE_DASHBOARD" });
  } catch (error) {
    console.error(error);
    errorToast("Cannot logout");
  }
};

export const checkLogin = () => async (dispatch) => {
  const refreshToken = localStorage.getItem("us_refresh");
  try {
    if (refreshToken) {
      const response = await axios.post(
        `https://mindwellcheck-okxyujzn.b4a.run/api/v1/auth/refreshToken`,
        {
          refreshToken: JSON.parse(refreshToken),
        }
      );
      setToken(response.data);
      dispatch({ type: "LOGIN", payload: response.data });
      dispatch({ type: "DASHBOARD_DATA", payload: response.data });
      return response.data;
    }
    throw new Error("Logout");
  } catch (error) {
    throw error;
  }
};
