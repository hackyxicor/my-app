import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FlatList, View } from '../../UIComponents';
import HotelCard from '../../Components/HotelCard/hotelCard.component';
import { GetHotelsAction } from '../../Actions/index.actions';
import { AccessNestedObject } from '../../Utils/common.utils';
import HotelListingPlaceholder from './hotelListing.placeholder';

class HotelsListScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: AccessNestedObject(navigation, 'state.params.title', ''),
    });

    componentDidMount = () => {
        this.props.GetHotelsAction();
    }

    renderHotel = ({ item, index }) => {
        return (
            <HotelCard
                key={item.id}
                hotel={item}
                pricingLoading={this.props.loadingPricing}
                pricing={this.props.pricing[index]}
                book={this.book}
            />
        )
    }

    book = (hotel) => {
        this.props.navigation.navigate('Hotel', { hotel });
    }

    renderList = () => {
        return (
            <FlatList
                data={this.props.hotels}
                renderItem={this.renderHotel}
                extraData={this.props}
            />
        )
    }

    render() {
        return (
            <View style={{ flex: 1, }} >
                <HotelListingPlaceholder
                    isReady={!this.props.loadingHotels}
                    whenReadyRender={this.renderList}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    hotels: state.hotelsStore.hotels,
    loadingHotels: state.hotelsStore.loading,
    pricing: state.pricingStore.pricing,
    loadingPricing: state.pricingStore.loading
})

export default connect(mapStateToProps, { GetHotelsAction })(HotelsListScreen);
