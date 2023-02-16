import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PRIMARY = Template.bind({});
PRIMARY.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const SECONDARY = Template.bind({});
SECONDARY.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

export const RED = Template.bind({});
RED.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};

export const PRIMARYDark = Template.bind({});
PRIMARYDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
PRIMARYDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SECONDARYDark = Template.bind({});
SECONDARYDark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};
SECONDARYDark.decorators = [ThemeDecorator(Theme.DARK)];

export const REDDark = Template.bind({});
REDDark.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};
REDDark.decorators = [ThemeDecorator(Theme.DARK)];
