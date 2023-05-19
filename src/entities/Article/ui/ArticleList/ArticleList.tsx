import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from 'entities/Article';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = ({
    className, articles, isLoading, view = ArticleView.BIG,
}: ArticleListProps) => {
    if (isLoading) {
        return (
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
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            key={article.id}
            article={article}
            view={view}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length
                ? articles.map(renderArticle)
                : null}
        </div>
    );
};
