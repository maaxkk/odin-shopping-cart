export default function sortCandles(candles, sortType) {
    switch (sortType) {
        case 'priceDESC':
            candles.sort((a, b) => b.price - a.price);
            break;
        case 'priceASC':
            candles.sort((a, b) => a.price - b.price);
            break;
        case 'alphabetDESC':
            candles.sort((a, b) => b['title'].localeCompare(a['title']));
            break;
        case 'alphabetASC':
            candles.sort((a, b) => a['title'].localeCompare(b['title']));
            break;
        default:
            console.log('Sorting done!');
    }
    return candles;
}
