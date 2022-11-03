import { createSlice } from '@reduxjs/toolkit';

const filtersReducer = createSlice({
  name: 'filters',
  initialState: { filter: '' },
  reducers: {
    onChangeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const { onChangeFilter } = filtersReducer.actions;
export default filtersReducer.reducer;
