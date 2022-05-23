import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  categoryId: number;
  sort: {
    name: string;
    sortProperty: string;
  };
};

const initialState: InitialStateType = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
