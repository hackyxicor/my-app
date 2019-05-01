export function GetHotelPrice(pricing) {
    if (!(pricing && typeof pricing == 'object')) {
        return null
    }

    const prices = pricing.price;
    let price = null;
    Object.keys(prices).forEach(key => {
        const element = prices[key];
        if (element != null && (price > element || price == null)) {
            price = element;
        }
    });

    return price
}

/*
 * find a nested object property inside of an object.
 * @param  {array} path
 * @param  {object} obj
 */
export function AccessNestedObject(obj, path, valueNotFound = undefined) {
    if (!((Array.isArray(path) || (typeof path == 'string')) && obj && typeof obj == 'object')) {
        return valueNotFound;
    }

    if (typeof path == 'string') {
        path = path.split('.');
    }

    return path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : valueNotFound, obj)
}