import React, { Component } from 'react';
import { connect } from 'react-redux';
import Placeholder, { Line, Media } from "rn-placeholder";

import { FlatList, View } from '../../UIComponents';
import HotelCard from '../../Components/HotelCard/hotelCard.component';
import { GetHotelsAction, GetHotelsPricingAction } from '../../Actions/index.actions';
import { Inactive } from '../../Theme/colors';

class HotelsListScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
    });

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        this.props.GetHotelsAction();
        this.props.GetHotelsPricingAction();
    }

    renderHotel = ({ item, index }) => {
        return (
            <HotelCard
                key={item.id}
                hotel={item}
                pricingLoading={this.props.loadingPricing}
                pricing={this.props.pricing[index]}
            />
        )
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

    renderPlaceholder = () => {
        return (
            <Placeholder
                animation="fade"
                isReady={!this.props.loadingHotels}
                whenReadyRender={this.renderList}
            >
                <View style={{ flex: 1, alignItems: 'center', padding: 20 }} >
                    <Line width="70%" />
                    <Line style={{ backgroundColor: Inactive, width: "22%" }} />
                    <Line />
                    <Line width="30%" />
                    <Line width="70%" />
                    <Line style={{ backgroundColor: Inactive, width: "22%" }} />
                    <Line />
                    <Line width="30%" />
                    <Line width="70%" />
                    <Line style={{ backgroundColor: Inactive, width: "22%" }} />
                    <Line />
                    <Line width="30%" />
                    <Line width="70%" />
                    <Line style={{ backgroundColor: Inactive, width: "22%" }} />
                    <Line />
                    <Line width="30%" />
                    <Line width="70%" />
                    <Line style={{ backgroundColor: Inactive, width: "22%" }} />
                    <Line />
                </View>
            </Placeholder>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, }} >
                <this.renderPlaceholder />
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

export default connect(mapStateToProps, { GetHotelsAction, GetHotelsPricingAction })(HotelsListScreen);
