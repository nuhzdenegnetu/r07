import { createSlice } from '@reduxjs/toolkit';

type User = {
  id: number;
  name: string;
};

type AppState = {
  users: User[];
  theme: 'light' | 'dark';
};

const initialState: AppState = {
  users: [
    { id: 1, name: 'Іван' },
    { id: 2, name: 'Олена' },
  ],
  theme: 'light',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = appSlice.actions;
export default appSlice.reducer;