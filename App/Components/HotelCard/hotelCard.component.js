import React from 'react';
import { StyleSheet } from 'react-native';
import Placeholder, { Line, Media } from "rn-placeholder";
import { OnPrimary, Inactive } from '../../Theme/colors';
import gStyle from '../../Theme/styles';
import { Text, Button, View, Image, Tag, ScrollView } from '../../UIComponents';
import { GetHotelPrice } from '../../Utils/common.utils';
import HotelTags from '../HotelTags/hotelTags.component';

const HotelCard = ({
    hotel,
    pricingLoading,
    pricing,
    book = () => { }
}) => {
    const hotelPrice = GetHotelPrice(pricing);
    return (
        <View style={styles.container} >
            <View style={styles.imageContainer} >
                <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg' }} style={styles.image} />
            </View>
            <View style={{ padding: 15 }} >
                <HotelTags
                    tags={['RATING: 3/5', 'STANDARD', 'HOTEL', 'COUPLE FRIENDLY']}
                />
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
                                <Line style={{ width: '100%', height: 30 }} />
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
                    <View style={{ flexDirection: 'row' }} >
                        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }} >
                            <Text style={[gStyle.h7, gStyle.normal, gStyle.secondaryText]} >5.2 kms away from airport</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <Placeholder
                        isReady={!pricingLoading}
                        animation="fade"
                        whenReadyRender={() => (
                            <Button
                                disabled={!hotelPrice}
                                type={'wide'}
                                onPress={() => {
                                    if (hotelPrice) {
                                        book(hotel)
                                    }
                                }}
                                buttonContent={hotelPrice ? 'BOOK' : 'SOLD OUT'}
                                buttonStyle={!hotelPrice ? { backgroundColor: Inactive, borderColor: Inactive } : {}}
                            />
                        )}
                    >
                        <Line style={{ height: 45, width: '100%', backgroundColor: Inactive }} />
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
    hotelDetailContainer: {
        paddingBottom: 10
    }
})

export default HotelCard;