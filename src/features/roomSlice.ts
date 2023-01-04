import { createSlice } from "@reduxjs/toolkit";
import { RoomSliceProps } from "../common/types/types";

const initialState: RoomSliceProps = {
  roomId: null,
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = roomSlice.actions;
export default roomSlice.reducer;
