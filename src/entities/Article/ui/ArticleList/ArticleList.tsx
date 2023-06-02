import React, { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui/Text/Text';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = ({
    className, articles, isLoading, view = ArticleView.BIG, target,
}: ArticleListProps) => {
    const renderArticle = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            key={article.id}
            article={article}
            view={view}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title="Статьи не найдены" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length
                ? articles.map(renderArticle)
                : null}

            {isLoading && (
                <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                    {new Array(view === ArticleView.SMALL ? 9 : 3)
                        .fill(0)
                        .map((item, id) => (
                            <ArticleListItemSkeleton
                                className={cls.card}
                                key={id}
                                view={view}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};
