import React, { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Card, CardTheme } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

export interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = ({
    className, tabs, onTabClick, value,
}: TabsProps) => {
    const clickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    className={cls.tab}
                    onClick={clickHandler(tab)}
                >
                    {tab.value}
                </Card>
            ))}
        </div>
    );
};
