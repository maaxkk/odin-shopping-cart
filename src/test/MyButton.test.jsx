import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import MyButton from "../components/UI/Button/MyButton.jsx";
import {useState} from "react";


function CartItems() {
    const [itemsCount, setItemsCount] = useState(0);

    return (
        <>
            <p data-testid={'items-count'}>{itemsCount}</p>
            <MyButton data-testid={'mybutton-el'}/>
        </>
    )
}


describe('MyInput test', () => {
    test('Input works correctly', async () => {
        render(
            <>
                <CartItems/>
            </>
        );
        const mybutton = await screen.findByTestId('mybutton-el')
        const counter = await screen.findByTestId('items-count')

        expect(counter).toHaveTextContent('0');
        fireEvent.click(mybutton)
        waitFor(() => expect(counter).toHaveTextContent('1'));
        screen.debug();
    })
})