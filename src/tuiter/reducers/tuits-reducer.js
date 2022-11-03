import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.push({
                _id: (new Date()).getTime(),
                topic: action.payload.topic,
                userName: action.payload.userName,
                title: action.payload.title,
                time: action.payload.time,
                image: action.payload.image
            });
        },
        deleteTuit(state, action) {
            const index = action.payload
            state.splice(index, 1)
        },
        retrieveTuit(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            return tuit;
        },
        updateTuit(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            tuit.title = action.payload.title;
        }
    }
});

export const {createTuit, deleteTuit, retrieveTuit, updateTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;