import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  taskView: false,
  taskDescription: false,
  descriptionKey: null,
  descriptionValue: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASK_VIEW":
      return { ...state, taskView: action.payload };
    case "SET_DESCRIPTION_VIEW":
      return {
        ...state,
        taskDescription: action.payload.value,
        descriptionKey: action.payload.key,
        descriptionValue: action.payload.keyValue,
      };
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  rootReducer, // You can add more reducers here as your app grows
});

export default combinedReducers;
