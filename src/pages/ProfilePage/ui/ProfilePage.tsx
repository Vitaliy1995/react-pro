import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducers } from 'entities/Profile';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducerList = {
    profile: profileReducers,
};

const ProfilePage = ({ className }: ProfilePageProps) => (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.ProfilePage, {}, [className])} />
    </DynamicModuleLoader>
);

export default ProfilePage;
