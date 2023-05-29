import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    getArticlesPageLimit, getArticlesPageNum,
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useSelector } from 'react-redux';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { ArticleType } from 'entities/Article/model/types/article';

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articleDetailsPage/fetchArticleRecommendations',
    async (args, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
                },
            });

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
