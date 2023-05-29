import React, { useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChange: (val: TabItem) => void;
}

export const ArticleTypeTabs = ({ className, value, onChange }: ArticleTypeTabsProps) => {
    const typeTabs = useMemo<TabItem[]>(() => ([
        {
            value: ArticleType.ALL,
            content: 'Все',
        },
        {
            value: ArticleType.IT,
            content: 'IT',
        },
        {
            value: ArticleType.SCIENCE,
            content: 'Наука',
        },
    ]), []);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onChange}
        />
    );
};
