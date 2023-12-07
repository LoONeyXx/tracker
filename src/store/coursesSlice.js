import { createSlice } from '@reduxjs/toolkit';
import { intialCards } from '../constants/constants';
const initialState = {
  coursesList: intialCards,
  filtredCards: [],
  isFiltredMode: false,
};

const filterCoursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    getFiltredCards(filter) {
      let newList = [];
      if (filter.level) {
        newList = state.coursesList.filter(
          cours => cours.level === filter.level,
        );
      }
      if (filter.type) {
        newList = state.coursesList.filter(
          cours => cours.type === filter.type,
        );
      }
      if (filter.duration) {
        newList = state.coursesList.filter(
          cours => cours.level === filter.level,
        );
      }
      if (filter.price) {
      }
    },
  },
});
export const {} = filterCoursesSlice.actions;
export default filterCoursesSlice.reducer;
