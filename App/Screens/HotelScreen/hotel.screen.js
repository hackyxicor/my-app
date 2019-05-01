import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';

import { AccessNestedObject, GetRoomContentFromRooms } from '../../Utils/common.utils';
import { GetHotelDetailAction } from '../../Actions/index.actions';
import { View, Text, Button, ScrollView } from '../../UIComponents';
import HotelPlaceholder from './hotel.placeholder';
import ImageCarouselComponent from '../../Components/ImageCarousel/imageCarousel.component';
import gStyle from '../../Theme/styles';
import HotelTags from '../../Components/HotelTags/hotelTags.component';
import BookingDates from './Components/bookingDates.component';
import Section from '../../Components/Section/section.component';

const IMAGES = [
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://static1.squarespace.com/static/53742929e4b08ebb6e273cb1/t/57f45a70e4fcb541f809b804/1475631731267/?format=1000w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXO3TdIFwed2AzFT8aORWe3oI3MHoPkzPnBNhnNYaSqlcTaH2'
]

class HotelScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: AccessNestedObject(navigation, 'state.params.hotel.name', ''),
    });

    componentDidMount = () => {
        this.props.GetHotelDetailAction();
    }

    renderHotelDetail = () => {
        const { booking } = this.props;
        const hotel = this.props.navigation.getParam('hotel');
        const hotelDetail = AccessNestedObject(this.props, 'hotelDetail', {});

        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingBottom: 200 }}
                >
                    <ImageCarouselComponent
                        images={IMAGES}
                    />
                    <View style={styles.hotelDetailContainer} >
                        <Text style={[gStyle.h2, gStyle.primaryText, gStyle.bold]} >
                            {AccessNestedObject(hotel, 'name', '')}
                        </Text>
                        <Text style={[gStyle.h4, gStyle.secondaryText, gStyle.light]} >
                            {AccessNestedObject(hotel, 'locality', '')}, {AccessNestedObject(hotel, 'city', '')}
                        </Text>
                        <View style={{ paddingTop: 10, paddingBottom: 10 }} >
                            <HotelTags
                                tags={['RATING: 3/5', 'STANDARD', 'HOTEL', 'COUPLE FRIENDLY']}
                            />
                        </View>
                        <Text style={[gStyle.h5, gStyle.secondaryText, gStyle.light]} >
                            5.2 kms away from airport
                        </Text>
                        <Section
                            title={'Hotel Amenities'}
                            RenderContent={() => <HotelTags tags={AccessNestedObject(hotelDetail, 'essentials', [])} />}
                        />
                        <Section
                            style={{ paddingTop: 0 }}
                            title={' '}
                            RenderContent={() => (
                                <BookingDates
                                    checkinDate={booking.checkinDate}
                                    checkoutDate={booking.checkoutDate}
                                />
                            )}
                        />
                        <Section
                            title={'Rooms'}
                            RenderContent={() => (
                                <Text style={[gStyle.bold, gStyle.h4, gStyle.secondaryText]} >
                                    {GetRoomContentFromRooms(AccessNestedObject(booking, 'rooms', []))}
                                </Text>
                            )}
                        />
                        <Section
                            title={'Description & Policies'}
                            RenderContent={() => (
                                <HotelTags
                                    newLine
                                    tags={AccessNestedObject(hotelDetail, 'policies', [])}
                                    containerStyle={{ height: undefined }}
                                />
                            )}
                        />
                    </View>
                </ScrollView>
                <Button
                    buttonContent="BOOK"
                    type="bottom-stick"
                    onPress={() => { }}
                    buttonStyle={{ position: 'absolute', bottom: 20, right: 0, zIndex: 2 }}
                />
            </View>

        )
    }

    render() {
        return (
            <View style={{ flex: 1, }} >
                <HotelPlaceholder
                    isReady={!this.props.loading}
                    whenReadyRender={this.renderHotelDetail}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        height: 200,
    },
    hotelDetailContainer: {
        padding: 20
    },
})

const mapStateToProps = state => ({
    booking: state.bookingStore,
    hotelDetail: state.hotelDetailStore.hotelDetail,
    loading: state.hotelDetailStore.loading,
})

export default connect(mapStateToProps, { GetHotelDetailAction })(HotelScreen);
