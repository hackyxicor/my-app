import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { View, ScrollView } from '../../UIComponents';

import { GetHotelsAction } from '../../Actions/index.actions';
import {
    SetCity,
    SetCheckinDate,
    SetCheckoutDate,
    SetRooms,
} from '../../Actions/index.actions';

import BookingSection from '../../Components/BookingSection/bookingSection.component';

class HomeScreen extends Component {
    componentDidMount() {
        this.props.GetHotels();
    }

    setItem = (key, value) => {
        switch (key) {
            case 'city':
                this.props.SetCity(value);
                break;
            case 'checkIn':
                this.props.SetCheckinDate(value);
                break;
            case 'checkOut':
                this.props.SetCheckoutDate(value);
                break;
            case 'rooms':
                this.props.SetRooms(value);
                break;
            default:
        }
    }

    search = () => {
        const { city, checkinDate, checkoutDate } = this.props.booking;

        if (!city) {
            alert('Please select city');
            return;
        }

        if (!checkinDate || !checkoutDate) {
            alert('Please checkin/checkout dates');
            return;
        }

        this.props.navigation.navigate('HotelList', { title: city });
    }

    render() {
        const { city, checkinDate, checkoutDate, rooms } = this.props.booking;
        return (
            <ScrollView
                style={styles.container}
            >
                <BookingSection
                    city={city}
                    checkIn={checkinDate}
                    checkOut={checkoutDate}
                    rooms={rooms}
                    callback={this.setItem}
                    search={this.search}
                />
                <View style={{ height: 1000 }} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

const mapStateToProps = (state) => ({
    hotels: state.hotelsStore.hotels,
    loading: state.hotelsStore.loading,
    booking: state.bookingStore
})

export default connect(mapStateToProps, {
    GetHotels: GetHotelsAction,
    SetCity,
    SetCheckinDate,
    SetCheckoutDate,
    SetRooms,
})(HomeScreen);