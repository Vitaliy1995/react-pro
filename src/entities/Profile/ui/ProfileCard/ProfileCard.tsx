import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
}

export const ProfileCard = ({
    className, data, error, isLoading,
}: ProfileCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text title="Some error" theme={TextTheme.ERROR} align={TextAlign.CENTER} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title="Профиль" />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>Редактировать</Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder="Имя"
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder="Фамилия"
                    className={cls.input}
                />
            </div>
        </div>
    );
};
