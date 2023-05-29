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
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, { dispatch, getState }) => {
        const isInit = getArticlesPageIsInit(getState());

        if (!isInit) {
            const order = searchParams.get('order') as SortOrder;
            const sort = searchParams.get('sort') as ArticleSortField;
            const search = searchParams.get('search');
            const type = searchParams.get('type') as ArticleType;

            if (order) {
                dispatch(articlesPageActions.setOrder(order));
            }
            if (sort) {
                dispatch(articlesPageActions.setSort(sort));
            }
            if (search) {
                dispatch(articlesPageActions.setSearch(search));
            }
            if (type) {
                dispatch(articlesPageActions.setType(type));
            }

            dispatch(articlesPageActions.initState());

            dispatch(fetchArticlesList({}));
        }
    },
);
