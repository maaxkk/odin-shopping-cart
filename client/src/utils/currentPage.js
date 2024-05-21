export function getCurrentPageCandles(candles, page, limit) {
    const output = [];
    let start = page * limit - limit;
    for (let i = start; i < start + limit && i < candles.length; i++) {
        output.push(candles[i]);
    }
    return output;
}
