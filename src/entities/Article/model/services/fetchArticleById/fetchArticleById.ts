import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
                },
            });

            return response.data;
        } catch (e) {
            console.log((e as Error)?.message);
            return rejectWithValue('error');
        }
    },
);
