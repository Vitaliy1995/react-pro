import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockProps) => (
    <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
            <Text
                key={paragraph}
                text={paragraph}
                className={cls.paragraph}
            />
        ))}
    </div>
));
