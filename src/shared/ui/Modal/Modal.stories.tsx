import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto blanditiis doloribus ea eaque eligendi enim ex hic illum in ipsam maiores, nam odit quae qui repellendus tenetur totam ullam voluptate voluptatem! Cum dolorem ducimus earum nesciunt nihil nostrum perspiciatis praesentium similique. Doloremque eius eligendi, ex impedit incidunt labore laboriosam laudantium nemo officiis porro praesentium sit totam voluptas? Accusamus consequuntur cumque fugiat quas reiciendis tenetur! A ad consequatur dicta dolores dolorum eos est harum libero nemo neque obcaecati praesentium quaerat, quidem sapiente, tenetur. Ea excepturi fugit in mollitia nesciunt repellat repudiandae tenetur! Eaque et explicabo in labore molestiae quidem similique.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto blanditiis doloribus ea eaque eligendi enim ex hic illum in ipsam maiores, nam odit quae qui repellendus tenetur totam ullam voluptate voluptatem! Cum dolorem ducimus earum nesciunt nihil nostrum perspiciatis praesentium similique. Doloremque eius eligendi, ex impedit incidunt labore laboriosam laudantium nemo officiis porro praesentium sit totam voluptas? Accusamus consequuntur cumque fugiat quas reiciendis tenetur! A ad consequatur dicta dolores dolorum eos est harum libero nemo neque obcaecati praesentium quaerat, quidem sapiente, tenetur. Ea excepturi fugit in mollitia nesciunt repellat repudiandae tenetur! Eaque et explicabo in labore molestiae quidem similique.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
