import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button component', () => {
    test('Simple button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Button with theme clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
