import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  values: {
    profession: 'Профессия',
    difficult: 'Сложность',
  },
  openedMenus: {
    profession: false,
    difficult: false,
  },
};

const filterCoursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    openTargetMenu(state, action) {
        console.log('open')
      const id = action.payload;
      const menusStateArray = Object.entries(state.openedMenus);
      const menusStateArrayWithOpenedMenu = menusStateArray.map(
        ([key, value]) => (key === id ? [key, !value] : [key, false]),
      );
      const newState = menusStateArrayWithOpenedMenu.reduce(
        (acc, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {},
      );
      state.openedMenus = newState;
    },
    changeValue(state, action) {
      const { type, id } = action.payload;
      state.values[type] = id;
      state.openedMenus = {
        profession: false,
        difficult: false,
      };
    },
  },
});
export const { changeValue, openTargetMenu } = filterCoursesSlice.actions;
export default filterCoursesSlice.reducer;
