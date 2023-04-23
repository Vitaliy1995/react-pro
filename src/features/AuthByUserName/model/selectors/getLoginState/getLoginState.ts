import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from 'features/AuthByUserName';

export const getLoginState = (state: StateSchema): LoginSchema => state?.loginForm || {
    username: '',
    password: '',
    isLoading: false,
};
