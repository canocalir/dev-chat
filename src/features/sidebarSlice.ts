import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapsed: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    collapseSidebar: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { collapseSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
