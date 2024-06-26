import { render, screen } from '@testing-library/react';
import Navbar from '../components/UI/Navbar/Navbar.jsx';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const cart = {
    count: 0,
    totalPrice: 0,
    itemsId: {},
};

import { store } from '../redux/store.js';

describe('Navbar test', () => {
    test('Input in navbar works correctly', async () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </MemoryRouter>
        );

        const input = await screen.findByTestId('input-el');
        const mybutton = await screen.findByTestId('mybutton-el');
        expect(input).toBeInTheDocument();
        expect(mybutton).toBeInTheDocument();
    });
});
