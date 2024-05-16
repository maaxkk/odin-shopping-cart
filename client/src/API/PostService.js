export default class CandlesService {
    static async getAll() {
        // const resp = await fetch('https://6640bda5a7500fcf1a9e9561.mockapi.io/candles');
        const resp = await fetch('/api/candle');
        const resp2 = await fetch('api/category');
        const categories = await resp2.json();
        const data = await resp.json();
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < categories.length; j++) {
                console.log(data[i]);
                if (data[i].categoryId === categories[j].id) {
                    data[i]['category'] = categories[j].title;
                }
            }
        }
        console.log(data);
        return data;
    }

    static async getById(id) {}
}
