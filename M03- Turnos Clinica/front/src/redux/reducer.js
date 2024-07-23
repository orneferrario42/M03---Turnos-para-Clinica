import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    appointments: []

};

export const todoSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        addAppointment: (state, action) => {
            state.appointments = action.payload
        },
    }
});

export const { setUser, addAppointment,  } = todoSlice.actions;