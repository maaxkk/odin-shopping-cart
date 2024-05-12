import {render, screen} from '@testing-library/react';
import Navbar from "../components/UI/Navbar/Navbar.jsx";
import {CartContext} from "../components/AppRouter.jsx";
import {MemoryRouter} from "react-router-dom";

const cart = {
    count: 0,
    totalPrice: 0,
    itemsId: {},
}

const setFilter = (e) => 0

describe('Navbar test', () => {
    test('Input works correctly', async () => {
        render(
            <MemoryRouter>
                <CartContext.Provider value={{ cart }}>
                    <Navbar setFilter={setFilter}/>
                </CartContext.Provider>
            </MemoryRouter>
        );

        const input = await screen.findByTestId('input-el')
        const mybutton = await screen.findByTestId('mybutton-el')
        expect(input).toBeInTheDocument();
        expect(mybutton).toBeInTheDocument();
    })
})