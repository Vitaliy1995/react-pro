import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard, ProfilePageHeader } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return <Text text="Нет пользователя" />;
    }

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <VStack gap="16">
                <ProfilePageHeader />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
