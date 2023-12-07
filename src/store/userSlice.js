import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiAuth from '../services/AuthApi';

export const signup = createAsyncThunk(
  'user/signup',
  async ({ email, password, username }) => {
    console.log(email, password, username);
    const response = await apiAuth.registration({ email, password, username });
    return response;
  },
);

const initialState = {
  name: '',
  isLogged: false,
  currentProfession: 'UI/UX дизайнер',
  currentLevel: 'Junior',
  currentMatch: '92%',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [signup.pending]: (state, action) => {
      console.log('start');
    },
    [signup.fulfilled]: (state, action) => {
      console.log('end', action.payload);
    },
    [signup.rejected]: (state, action) => {
      console.log('Что то пошло не так');
    },
  },
  reducers: {
    loginUser(state, action) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
    setUser(state, action) {
      state.name = action.payload.name || state.name;
      state.currentProfession =
        action.payload.profession || state.currentProfession;
      state.currentLevel = action.payload.currentLevel || state.currentLevel;
      state.currentMatch = action.payload.currentMatch || state.currentMatch;
    },
  },
});
export const { loginUser, logout, setUser } = userSlice.actions;
export default userSlice.reducer;
