import {render, screen} from '@testing-library/react';
import CandleItem from "../components/CandleItem.jsx";
import {Provider} from "react-redux";

import {store} from "../redux/store.js";

describe('CandleItem test', () => {
    test('Candles renders correctly', async () => {
        render(
            <Provider store={store}>
                <CandleItem title={'test candle'}
                            src={'https://i.imgur.com/FBaxKY1.jpg'}
                            category={['All', 'Aroma']}
                            price={10}
                            id={0.53423432}
                />
            </Provider>
        );
        const myImg = await screen.findByTestId('img-el')
        expect(myImg).toBeInTheDocument();
        screen.debug();
    })
})