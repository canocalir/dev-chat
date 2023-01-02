import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateProps {
    isOpen: boolean;
    name: string;
}

const initialState: InitialStateProps = {
    isOpen: false,
    name: ''
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        openModal: (state) => {
            state.isOpen = !state.isOpen
        },
        selectName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export const {openModal, selectName} = modalSlice.actions
export default modalSlice.reducer