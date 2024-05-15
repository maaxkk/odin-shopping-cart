import ShoppingCart from '../pages/ShoppingCart.jsx';
import Candles from '../pages/Candles.jsx';
import NotFound from '../pages/NotFound.jsx';

const publicRoutes = [
    { path: '/', element: Candles },
    { path: '/cart', element: ShoppingCart },
    { path: '*', element: NotFound },
];

export default publicRoutes;
