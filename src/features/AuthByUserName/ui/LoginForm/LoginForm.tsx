import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                value={value}
                onChange={onChange}
                className={cls.input}
                type="text"
                placeholder="Введите логин"
                autofocus
            />
            <Input
                className={cls.input}
                type="text"
                placeholder="Введите пароль"
            />
            <Button className={cls.loginBtn}>Войти</Button>
        </div>
    );
};
