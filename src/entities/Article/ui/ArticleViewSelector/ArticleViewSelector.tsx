import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import TileIcon from 'shared/assets/icons/tile.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { ArticleView } from 'entities/Article';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

export const ArticleViewSelector = ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const viewTypes = [
        {
            view: ArticleView.SMALL,
            icon: TileIcon,
        },
        {
            view: ArticleView.BIG,
            icon: ListIcon,
        },
    ];

    const onClickHandler = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClickHandler(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
};
