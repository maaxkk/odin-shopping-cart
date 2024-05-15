import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import MyInput from '../components/UI/Input/MyInput.jsx';

describe('MyInput test', () => {
    test('Input works correctly', async () => {
        render(<MyInput data-testid={'input-el'} />);

        const input = await screen.findByTestId('input-el');
        fireEvent.input(input, {
            target: { value: 'some candle' },
        });
        waitFor(() => expect(input).toHaveDisplayValue('some candle'));
        screen.debug();
    });
});
