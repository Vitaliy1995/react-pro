import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    height: '200px',
    width: '100%',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    height: '200px',
    width: '100%',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    height: 100,
    width: 100,
};

export const CircleDark = Template.bind({});
CircleDark.args = {
    height: '200px',
    width: '100%',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
