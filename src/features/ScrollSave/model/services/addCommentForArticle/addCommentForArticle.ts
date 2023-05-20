import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData, User, userActions } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getAddCommentFormText } from 'features/addCommentForm/model/selectors/addCommentFormSelectors';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { addCommentFormActions } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, {
        extra, dispatch, rejectWithValue, getState,
    }) => {
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error('No data');
            }

            dispatch(addCommentFormActions.setText(''));
            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
