import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileData, Profile } from 'entities/Profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const formData = getProfileData(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            console.log((e as Error)?.message);
            return rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
