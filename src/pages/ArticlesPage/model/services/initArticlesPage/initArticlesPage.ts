import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { getArticlesPageIsInit } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

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
