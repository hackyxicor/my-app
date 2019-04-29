import React from 'react';
import { StyleSheet } from 'react-native';
import Placeholder, { Line, Media } from "rn-placeholder";
import { OnPrimary } from '../../Theme/colors';
import gStyle from '../../Theme/styles';
import { Text, Button, View, Image, Tag, ScrollView } from '../../UIComponents';
import { GetHotelPrice } from '../../Utils/common.utils';

const HotelCard = ({
    hotel,
    pricingLoading,
    pricing
}) => {
    const hotelPrice = GetHotelPrice(pricing);
    return (
        <View style={styles.container} >
            <View style={styles.imageContainer} >
                <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg' }} style={styles.image} />
            </View>
            <View style={{ padding: 15 }} >
                <View style={styles.tagsContainer} >
                    <ScrollView horizontal >
                        <Tag label="STANDARD" />
                        <Tag label="HOTEL" />
                        <Tag label="COUPLE FRIENDLY" />
                    </ScrollView>
                </View>
                <View style={styles.hotelDetailContainer} >
                    <View style={{ flexDirection: 'row' }} >
                        <View style={{ flex: 1.5, alignItems: 'flex-start', justifyContent: 'center' }} >
                            <Text style={[gStyle.h4, gStyle.normal, gStyle.primaryText]} >{hotel.name}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }} >
                            <Placeholder
                                isReady={!pricingLoading}
                                animation="fade"
                                whenReadyRender={() => {
                                    return (
                                        <Text style={[gStyle.h2, gStyle.bold, gStyle.primaryText]} >{hotelPrice || 'SOLD OUT'}</Text>
                                    )
                                }}
                            >
                                <Line width="90%" />
                            </Placeholder>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }} >
                            <Text style={[gStyle.h5, gStyle.normal, gStyle.primaryText]} >{hotel.locality}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }} >
                            <Text style={[gStyle.h5, gStyle.normal, gStyle.secondaryText]} >{hotel.city}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <Placeholder
                        isReady={!pricingLoading}
                        animation="fade"
                        whenReadyRender={() => <Button disabled={!hotelPrice} type={'wide'} onPress={() => { }} buttonContent={hotelPrice ? 'BOOK' : 'SOLD OUT'} />}
                        renderLeft={() => <Media hasRadius />}
                        renderRight={() => <Media />}
                    >
                        <Line width="90%" />
                    </Placeholder>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: OnPrimary,
        elevation: 3,
    },
    imageContainer: {
        height: 200,
    },
    image: {
        height: 200,
        resizeMode: 'stretch'
    },
    tagsContainer: {
        flexDirection: 'row',
        height: 45
    },
    hotelDetailContainer: {
        paddingBottom: 10
    }
})

export default HotelCard;