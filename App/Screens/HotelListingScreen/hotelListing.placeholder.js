import React from 'react';
import Placeholder from "rn-placeholder";
import HotelCardPlacehodler from '../../Components/HotelCard/hotelCard.placeholder';

const HotelListingPlaceholder = ({ isReady, whenReadyRender }) => (
    <Placeholder
        animation="fade"
        isReady={isReady}
        whenReadyRender={whenReadyRender}
    >
        <HotelCardPlacehodler />
        <HotelCardPlacehodler />
    </Placeholder>
)

export default HotelListingPlaceholder;
