import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "ALL",
  reducers: {
    setFilter: () => {
      const value = prompt("Enter filter: ALL / COMPLETED / PENDING");
      return value || "ALL";
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
