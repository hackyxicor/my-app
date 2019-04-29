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