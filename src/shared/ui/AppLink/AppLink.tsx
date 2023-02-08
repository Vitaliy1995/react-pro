import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({ to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps }) => {
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};