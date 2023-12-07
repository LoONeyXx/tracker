import { configureStore } from '@reduxjs/toolkit';
import filterCoursesSlice from './filterCoursesSlice';
import coursesSlice from './coursesSlice';
import userSlice from './userSlice';
import changeTargetSlice from './changeTargetSlice';
const store = configureStore({
  reducer: {
    filterCourses: filterCoursesSlice,
    courses: coursesSlice,
    user: userSlice,
    changeTarget: changeTargetSlice,
  },
});

export default store;
