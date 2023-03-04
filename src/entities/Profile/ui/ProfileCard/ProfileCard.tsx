import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

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
