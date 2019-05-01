import React from 'react';
import { Line } from "rn-placeholder";
import { View } from '../../UIComponents';
import { Inactive } from '../../Theme/colors';

const HotelCardPlacehodler = () => (
    <View style={{ alignItems: 'center', padding: 20 }} >
        <Line width="100%" style={{ height: 100 }} />
        <View style={{ height: 30, flexDirection: 'row' }} >
            <View style={{ flex: 8, alignItems: 'flex-start', justifyContent: 'center' }} >
                <Line style={{ backgroundColor: Inactive, width: "70%", height: 30 }} />
            </View>
            <View style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'center' }} >
                <Line style={{ backgroundColor: Inactive, width: "100%", selfAlign: 'flex-end', height: 30 }} />
            </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }} >
            <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }} >
                <Line style={{ width: "40%" }} />
            </View>
            <View style={{ flex: 3 }} />
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }} >
                <Line style={{ width: "100%", selfAlign: 'flex-end' }} />
            </View>
        </View>
        <View style={{ flexDirection: 'row' }} >
            <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }} >
                <Line style={{ width: "70%" }} />
            </View>
            <View style={{ flex: 2 }} />
            <View style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'center' }} >
                <Line style={{ width: "100%", selfAlign: 'flex-end' }} />
            </View>
        </View>
        <Line style={{ backgroundColor: Inactive, width: "100%", height: 55 }} />
    </View>
)

export default HotelCardPlacehodler;
