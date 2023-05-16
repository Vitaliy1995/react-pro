import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { Comment } from 'entities/Comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text text="Нет комментариев" />}
        </div>
    );
};
