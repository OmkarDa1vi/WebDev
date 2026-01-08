import { configureStore } from "@reduxjs/toolkit";
import { ticketSlicer } from "./ticketSlicer";

const store = configureStore({
    reducer: {
        ticket: ticketSlicer.reducer
    }
});
