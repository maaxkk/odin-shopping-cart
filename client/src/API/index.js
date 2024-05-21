import axios from 'axios';

export default class CandlesService {
    static async getAll() {
        // const resp = await fetch('https://6640bda5a7500fcf1a9e9561.mockapi.io/candles');
        const resp = await fetch('/api/candle');
        return await resp.json();
    }

    static async getById(id) {}
}

const $host = axios.create({
    baseURL: 'http://localhost:5000',
});

const $authHost = axios.create({
    baseURL: 'http://localhost:5000',
});

const authInterception = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterception);

export { $host, $authHost };
