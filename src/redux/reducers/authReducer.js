const initialState = {
  auth: true,
  userData: {
    fullName: "John Doe",
    email: "john.doe@example.com",
    role: "user",
  },
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        auth: true,
        userData: payload.userData,
      };
    case "LOGOUT": {
      return {
        auth: false,
        userData: null,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
