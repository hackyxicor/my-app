import React, { Component } from 'react';

import { FlatList } from '../../UIComponents';
import HotelCard from '../../Components/HotelCard/hotelCard.component';

class HotelsListScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1, }} >
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={HotelCard}
                />
            </View>
        )
    }
}

export default HotelsListScreen;
