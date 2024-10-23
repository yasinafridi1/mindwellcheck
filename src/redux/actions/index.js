import axios from "axios";
import { setToken } from "../../Utils/tokenutils";
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
    return response;
  } catch (error) {
    errorToast(error?.response?.data?.message || "Something went wrong");
    console.error(error);
  }
};

export const checkLogin = () => async (dispatch) => {
  const refreshToken = localStorage.getItem("us_access");
  try {
    if (refreshToken) {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/refreshToken`,
        {
          refreshToken: JSON.parse(refreshToken),
        }
      );
      setToken(response.data);
      dispatch({ type: "LOGIN", payload: response.data });
      return response.data;
    }
    throw new Error("Logout");
  } catch (error) {
    throw error;
  }
};
