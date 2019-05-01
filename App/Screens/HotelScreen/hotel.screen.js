import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';

import { AccessNestedObject } from '../../Utils/common.utils';
import { GetHotelDetailAction } from '../../Actions/index.actions';
import { View, Text } from '../../UIComponents';
import HotelPlaceholder from './hotel.placeholder';
import ImageCarouselComponent from '../../Components/ImageCarousel/imageCarousel.component';
import gStyle from '../../Theme/styles';
import HotelTags from '../../Components/HotelTags/hotelTags.component';
import { Inactive } from '../../Theme/colors';

const IMAGES = [
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://static1.squarespace.com/static/53742929e4b08ebb6e273cb1/t/57f45a70e4fcb541f809b804/1475631731267/?format=1000w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXO3TdIFwed2AzFT8aORWe3oI3MHoPkzPnBNhnNYaSqlcTaH2'
]

class HotelScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: AccessNestedObject(navigation, 'state.params.hotel.name', ''),
    });

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        this.props.GetHotelDetailAction();
    }

    renderHotelDetail = () => {
        // const hotel = this.props.navigation.getParam('hotel');
        // const hotelDetail = AccessNestedObject(this.props, 'hotelDetail', {});
        // console.log('hotel', hotel)
        // console.log('hotelDetail', hotelDetail)
        const hotel = {
            city: "Bangalore",
            id: 1,
            locality: "Koramangala",
            name: "Elmas",
        }

        const hotelDetail = {
            essentials: [
                "AC Room",
                "TV",
                "WiFi",
                "Breakfast",
                "Toiletries"
            ],
            policies: [
                "Check-In Time: 12:00pm",
                "Checkout-Out time: 11:00am",
                "Must carry ID card"
            ]
        }

        return (
            <View style={{ flex: 1 }} >
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
                    <this.renderSection
                        title={'Hotel Amenities'}
                        RenderContent={() => <HotelTags tags={AccessNestedObject(hotelDetail, 'essentials', [])} />}
                    />
                    <this.renderSection
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
            </View>
        )
    }

    renderSection = ({ title, RenderContent }) => (
        <View style={{ paddingTop: 10, paddingBottom: 10 }} >
            <View style={{ flexDirection: 'flex-start' }} >
                <Text style={[gStyle.h5, gStyle.secondaryText, gStyle.bold]} >{title}</Text>
            </View>
            <View style={{ marginTop: 20 }} >
                <RenderContent />
            </View>
        </View>
    )

    render() {
        return (
            <View style={{ flex: 1, }} >
                <HotelPlaceholder
                    isReady={true}
                    // isReady={!this.props.loading}
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
    }
})

const mapStateToProps = state => ({
    hotelDetail: state.hotelDetailStore.hotelDetail,
    loading: state.hotelDetailStore.loading,
})

export default connect(mapStateToProps, { GetHotelDetailAction })(HotelScreen);
