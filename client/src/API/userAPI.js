import { $authHost, $host } from './index.js';
import { jwtDecode } from 'jwt-decode';

export const registration = async (email, password, fullName) => {
    const { data } = await $host.post('api/user/registration', {
        email, password, fullName, role: 'ADMIN',
    });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
};

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', {
        email, password,
    });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
};

export const check = async (email, password) => {
    const { data } = await $authHost.get('api/user/auth', {
        email, password,
    });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
};
