import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title="Форма авторизации" />

                {error && <Text text={error} theme={TextTheme.ERROR} />}

                <Input
                    value={username}
                    onChange={onChangeUsername}
                    className={cls.input}
                    type="text"
                    placeholder="Введите логин"
                    autofocus
                />
                <Input
                    className={cls.input}
                    value={password}
                    onChange={onChangePassword}
                    type="text"
                    placeholder="Введите пароль"
                />
                <Button
                    className={cls.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    Войти
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
