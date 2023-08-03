import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../../models/Category";

interface InitState {
  items: Category[];
}

const initState: InitState = {
  items: [
    { id: 1, name: "Task", symbol: "car" },
    { id: 2, name: "Random Through", symbol: "lightbulb" },
    { id: 3, name: "Idea", symbol: "idea" },
  ],
};

const categorySlice = createSlice({
  name: "categories",
  initialState: initState,
  reducers: {},
});

export const categoryReducer = categorySlice.reducer;
