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
    // const response = await api.post("/servey", payload);
    const data = {
      dashboardData: {
        lastServeyFactor: 23,
        canSubmitNewSurvey: true,
        averageResultFactor: 10,
        totalServey: 6,
      },
    };
    dispatch({ type: "DASHBOARD_DATA", payload: data });
    return data;
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
        `${process.env.REACT_APP_API_URL}/auth/refreshToken`,
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
