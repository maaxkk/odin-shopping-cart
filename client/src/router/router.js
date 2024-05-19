import ShoppingCart from '../pages/ShoppingCart.jsx';
import Candles from '../pages/Candles.jsx';
import NotFound from '../pages/NotFound.jsx';
import RegistrationForm from '../components/Auth/RegistrationForm.jsx';
import LoginForm from '../components/Auth/LoginForm.jsx';
import SuccessPayment from '../components/SuccessPayment.jsx';

export const publicRoutes = [
    { path: '/', element: Candles },
    { path: '*', element: NotFound },
    { path: '/registration', element: RegistrationForm },
    { path: '/login', element: LoginForm },
    { path: '/cart', element: ShoppingCart },
];

export const privateRoutes = [
    { path: '/success', element: SuccessPayment },
];
