import axios from "axios";
import { setToken } from "../../Utils/tokenutils";

export const checkLogin = () => async (dispatch) => {
  const refreshToken = localStorage.getItem("ca_refresh");
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
