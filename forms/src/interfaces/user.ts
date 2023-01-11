import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
    id: string;
    adfsId: string;
    name: {
        firstName: string;
        lastName: string;
    };
    displayName: string;
    unit: string;
    rank: string;
}

const initialState: Partial<IUser> = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_state, action: PayloadAction<IUser>) => {
            return action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
