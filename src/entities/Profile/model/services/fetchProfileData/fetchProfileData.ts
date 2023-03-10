import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (e) {
            console.log((e as Error)?.message);
            return rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
