import { expect, vi } from 'vitest';
import CandlesService from '../API/PostService.js';

describe('fetch data from mock api', () => {
    let response = {
        title: 'Vanilla dream candle',
        category: ['All', 'Classics'],
        src: 'https://i.imgur.com/FBaxKY1.jpg',
        price: 10,
        id: '0.96707549919733884',
    };
    test('Correct value returns', async () => {
        const data = await CandlesService.getAll();
        const searchObj = data.find(obj => obj.id === '0.96707549919733884');
        expect(searchObj).toEqual(response);
    });
});
