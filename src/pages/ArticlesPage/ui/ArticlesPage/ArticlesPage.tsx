import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleList } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleList articles={[]} />
    </div>
);

export default memo(ArticlesPage);
