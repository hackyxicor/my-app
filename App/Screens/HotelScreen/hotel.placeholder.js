import React from 'react';
import { View } from '../../UIComponents';
import Placeholder, { Line } from 'rn-placeholder';
import { Inactive } from '../../Theme/colors';

const HotelPlaceholder = ({
    isReady = false,
    whenReadyRender = () => { },
}) => (
        <Placeholder
            animation="fade"
            isReady={isReady}
            whenReadyRender={whenReadyRender}
        >
            <View style={{ alignItems: 'center', padding: 20 }} >
                <Line width="100%" style={{ height: 200 }} />
                <Line style={{ backgroundColor: Inactive, width: "70%", height: 30 }} />
                <Line style={{ width: "40%", height: 20 }} />
                <Line style={{ width: "60%", height: 20 }} />
            </View>
            <View style={{ height: 20, alignItems: 'center', padding: 5, paddingLeft: 20, paddingRight: 20, marginBottom: 20 }} >
                <View style={{ height: 20, flexDirection: 'row' }} >
                    <View style={{ flex: 1 }} >
                        <Line style={{ width: "100%", height: 25, backgroundColor: Inactive }} />
                    </View>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 1 }} >
                        <Line style={{ width: "100%", height: 25, backgroundColor: Inactive }} />
                    </View>
                </View>
            </View>
            <View style={{ height: 20, alignItems: 'center', padding: 5, paddingLeft: 20, paddingRight: 20, marginBottom: 20 }} >
                <View style={{ height: 20, flexDirection: 'row' }} >
                    <View style={{ flex: 1 }} >
                        <Line style={{ width: "100%", height: 25, backgroundColor: Inactive }} />
                    </View>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 1 }} >
                        <Line style={{ width: "100%", height: 25, backgroundColor: Inactive }} />
                    </View>
                </View>
            </View>
            <View style={{ height: 20, alignItems: 'center', padding: 5, paddingLeft: 20, paddingRight: 20, marginBottom: 20 }} >
                <View style={{ height: 20, flexDirection: 'row' }} >
                    <View style={{ flex: 1 }} >
                        <Line style={{ width: "100%", height: 25, backgroundColor: Inactive }} />
                    </View>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 1 }} >
                        <Line style={{ width: "100%", height: 25, backgroundColor: Inactive }} />
                    </View>
                </View>
            </View>
            <View style={{ padding: 20 }} >
                <Line style={{ width: "100%", height: 30 }} />
                <Line style={{ width: "60%", height: 30 }} />
                <Line style={{ width: "40%", height: 30 }} />
                <Line style={{ width: "30%", height: 30 }} />
                <Line style={{ width: "70%", height: 30 }} />
            </View>
        </Placeholder>
    )

export default HotelPlaceholder;
