import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from '../features/modalSlice'
import RoomReducer from '../features/roomSlice'

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
    room: RoomReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
