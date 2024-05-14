import {render, screen} from '@testing-library/react';
import Navbar from "../components/UI/Navbar/Navbar.jsx";
import {Provider} from "react-redux";
import userEvent from '@testing-library/user-event'
import {store} from "../redux/store.js";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import ShoppingCart from "../pages/ShoppingCart.jsx";

describe('Navbar route test', () => {
    test('Click on button should transfer to empty cart component', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Provider store={store}>
                    <Routes>
                        <Route path={'/'} element={<Navbar/>}/>
                        <Route path={'/cart'} element={<ShoppingCart/>}/>
                    </Routes>
                </Provider>
            </MemoryRouter>
        );
        const user = userEvent.setup()
        const mybutton = screen.getByTestId('mybutton-el')
        expect(mybutton).toBeInTheDocument();

        await user.click(mybutton)
        const myImg = await screen.findByTestId('emptyCart-el')
        expect(myImg).toBeInTheDocument();
    })
})