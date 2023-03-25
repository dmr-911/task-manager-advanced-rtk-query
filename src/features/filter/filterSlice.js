import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setProject: (state, action) => {
      const findItem = state.projects.find((f) => f == action.payload);
      if (findItem) {
        state.projects.filter((f) => f !== findItem);
      } else {
        state.projects.push(action.payload);
      }
    },
  },
});

export default filterSlice.reducer;
export const { setProject, setProjects } = filterSlice.actions;
