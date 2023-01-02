import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
    roomId: null;
} 

const initialState: InitialStateProps = {
    roomId: null
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        enterRoom: (state, action) => {
            state.roomId = action.payload.roomId
        }
    }
})

export const {enterRoom} = roomSlice.actions
export default roomSlice.reducer