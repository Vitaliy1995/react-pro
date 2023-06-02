import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Simulate } from 'react-dom/test-utils';
import { Counter } from './Counter';

describe('Counter component', () => {
    test('Simple Counter', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });

        expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
    });

    test('Inc', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });

        userEvent.click(screen.getByTestId('counter-inc-btn'));

        expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
    });

    test('dec', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });

        userEvent.click(screen.getByTestId('counter-dec-btn'));

        expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
    });
});
