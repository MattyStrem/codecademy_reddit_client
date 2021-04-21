import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {

    }
})

export const selectCard = (state) => cardsSlice.cards.cards;
export default cardsSlice.reducer;
