import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard
                    isLoading
                />
                <CommentCard
                    isLoading
                />
                <CommentCard
                    isLoading
                />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text text="Нет комментариев" />}
        </VStack>
    );
};
