import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { isLoading, error, data: articles } = useGetArticleRecommendationsListQuery(3);

    if (isLoading || error) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text title="Рекомендуем" />
            <ArticleList
                articles={articles}
                // isLoading={recommendationsIsLoading}
                target="_blank"
            />
        </VStack>
    );
});
