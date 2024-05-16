export default class CandlesService {
    static async getAll() {
        // const resp = await fetch('https://6640bda5a7500fcf1a9e9561.mockapi.io/candles');
        const resp = await fetch('/api/v1/candles');
        return await resp.json();
    }

    static async getById(id) {}
}
