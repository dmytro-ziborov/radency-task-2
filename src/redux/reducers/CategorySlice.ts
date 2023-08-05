import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Category } from "../../models/Category";
import { RootState } from "../store";

interface InitState {
  items: Category[];
}

const initState: InitState = {
  items: [
    { id: 1, name: "Task", symbol: "cart-fill" },
    { id: 2, name: "Random Through", symbol: "lightbulb-fill" },
    { id: 3, name: "Idea", symbol: "lightning" },
  ],
};

const categorySlice = createSlice({
  name: "categories",
  initialState: initState,
  reducers: {},
});

const getCategoriesState = (state: RootState) => state.categories;
const selectCategoryId = (state: RootState, categoryId: number) => categoryId;

export const selectCategories = createSelector(
  [getCategoriesState],
  (state) => state.items
);

export const selectCategoryById = (categoryId: number) =>
  createSelector(
    [getCategoriesState, (state) => selectCategoryId(state, categoryId)],
    (state, categoryId) => state.items.find((item) => item.id === categoryId)
  );

export const categoryReducer = categorySlice.reducer;
