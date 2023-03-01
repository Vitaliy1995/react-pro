import React, { memo } from 'react';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgetsx/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => (
    <AppLink
        to={item.path}
        theme={AppLinkTheme.SECONDARY}
        className={cls.item}
    >
        <item.Icon className={cls.icon} />
        <span className={classNames(cls.link, { [cls.collapsedLink]: collapsed })}>{item.text}</span>
    </AppLink>
));
