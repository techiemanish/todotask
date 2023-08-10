export const setTaskView = (value) => ({
    type: "SET_TASK_VIEW",
    payload: value,
  });
  
  export const setDescriptionView = (value, key, keyValue) => ({
    type: "SET_DESCRIPTION_VIEW",
    payload: {
      value,
      key,
      keyValue
    },
  });
  
  