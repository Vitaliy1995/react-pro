import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    getArticlesPageHasMore, getArticlesPageIsInit, getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, { dispatch, getState }) => {
        const isInit = getArticlesPageIsInit(getState());

        if (!isInit) {
            dispatch(articlesPageActions.initState());

            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
