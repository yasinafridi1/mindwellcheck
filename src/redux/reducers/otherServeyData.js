const initialState = {
  data: [],
};

const otherServeyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SERVEY_DATA":
      return {
        ...state,
        data: payload.serveyData,
      };
    case "ADD_NEW_SERVEY_DATA":
      const existingIndex = state.data.findIndex(
        (item) => item.serveyName === payload.data.serveyName
      );

      return {
        ...state,
        data:
          existingIndex >= 0
            ? state.data.map((item, index) =>
                index === existingIndex ? payload.data : item
              )
            : [...state.data, payload.data],
      };
    default:
      return state;
  }
};

export default otherServeyReducer;
