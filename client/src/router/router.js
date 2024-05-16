import ShoppingCart from '../pages/ShoppingCart.jsx';
import Candles from '../pages/Candles.jsx';
import NotFound from '../pages/NotFound.jsx';
import Registration from '../components/Registration.jsx';

export const publicRoutes = [
    { path: '/', element: Candles },
    { path: '*', element: NotFound },
    { path: '/registration', element: Registration },
];

export const privateRoutes = [
    { path: '/', element: Candles },
    { path: '*', element: NotFound },
    { path: '/cart', element: ShoppingCart },
];
