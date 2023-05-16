import React, { memo } from 'react';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from 'widgetsx/Sidebar/model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const isUser = useSelector(getUserAuthData);

    if (item.authOnly && !isUser) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={cls.item}
        >
            <item.Icon className={cls.icon} />
            <span className={classNames(cls.link, { [cls.collapsedLink]: collapsed })}>{item.text}</span>
        </AppLink>
    );
});
