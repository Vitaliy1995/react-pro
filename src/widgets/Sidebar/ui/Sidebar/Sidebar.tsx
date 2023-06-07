import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <nav
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
            data-testid="sidebar"
        >
            <VStack role="navigation" gap="8" className={cls.items}>
                {sidebarItemsList.map((el) => (
                    <SidebarItem
                        key={el.path}
                        item={el}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
        </nav>
    );
});
