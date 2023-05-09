import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData, Profile, updateProfileData } from 'entities/Profile';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { Article } from 'entities/Article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducers } = articleDetailsSlice;
