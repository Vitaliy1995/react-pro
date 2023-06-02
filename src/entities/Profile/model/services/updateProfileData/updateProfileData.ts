import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';
import { ValidateProfileError, Profile } from '../../types/profile';
import { validateProfileData } from '../../services/validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const formData = getProfileData(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

            return response.data;
        } catch (e) {
            console.log((e as Error)?.message);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
