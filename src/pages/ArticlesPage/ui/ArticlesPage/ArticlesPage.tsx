import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
        Articles page
    </div>
);

export default memo(ArticlesPage);
