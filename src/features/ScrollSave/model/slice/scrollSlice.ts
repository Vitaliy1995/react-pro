import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { ScrollSchema } from '../types/ScrollSchema';

const initialState: ScrollSchema = {
    scroll: {},
};

const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string; position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
    /* extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
                // action.payload.username;
                // action.payload.id;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addDefaultCase((state, action) => {});
    }, */
});

export const { actions: scrollActions } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
