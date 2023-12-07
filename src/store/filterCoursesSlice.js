import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  filtredProps: {
    type: 'Тип',
    level: 'Сложность',
    duration: 'Длительность',
    price: 'Стоимость',
  },
  openedMenus: {
    type: false,
    level: false,
    duration: false,
    price: false,
  },
  countFilter: 0,
};

const filterCoursesSlice = createSlice({
  name: 'filterCourses',
  initialState,
  reducers: {
    closeAllMenus() {
      state.openedMenus = {
        type: false,
        level: false,
        duration: false,
        price: false,
      };
    },
    getLenghtFilters(state) {
      const defaultKeys = Object.values(initialState.filtredProps);
      const currentFilters = Object.values(state.filtredProps);
      const countFilter = currentFilters.filter(
        key => !defaultKeys.includes(key),
      );
      state.countFilter = countFilter.length;
    },
    resetFilters(state) {
      state.openedMenus = initialState.openedMenus;
      state.filtredProps = initialState.filtredProps;
    },
    openMenu(state, action) {
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
    changeFilter(state, action) {
      const { type, id } = action.payload;
      state.filtredProps[type] = id;
      state.openedMenus = {
        type: false,
        level: false,
        duration: false,
        price: false,
      };
    },
  },
});
export const {
  changeFilter,
  closeAllMenus,
  openMenu,
  resetFilters,
  getLenghtFilters,
} = filterCoursesSlice.actions;
export default filterCoursesSlice.reducer;
