import { Get } from "../Utils/http.utils";
import { Hotels, HotelPricing, HotelDetail } from '../Constants/api.constants';

class Api {
    static GetHotels() {
        return Get({ url: Hotels });
    }

    static GetHotelPricing() {
        return Get({ url: HotelPricing });
    }

    static GetHotelDetail() {
        return Get({ url: HotelDetail });
    }
}

export default Api;