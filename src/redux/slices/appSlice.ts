import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

export interface User {
    id: number;
    name: string;
}

export interface AppState {
    theme: 'light' | 'dark';
    users: User[];
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
    error: string | null;
}

const initialState: AppState = {
    theme: 'light',
    users: [],
    status: 'idle',
    error: null,
};

export const fetchUsers = createAsyncThunk<User[]>('app/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return await response.json();
});

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.status = 'fulfilled';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error?.message || 'Unknown error';
            });
    },
});

export const {toggleTheme} = appSlice.actions;
export default appSlice.reducer;