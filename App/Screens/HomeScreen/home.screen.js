import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import { View, TextInput, ScrollView } from '../../UIComponents';

import { GetHotelsAction } from '../../Actions/index.actions';


import DatePicker from '../../Components/DatePicker/datePicker.component';
import { Inactive } from '../../Theme/colors';
import CityPicker from '../../Components/CityPicker/cityPicker.component';
import RoomPicker from '../../Components/RoomPicker/roomPicker.component';
import BookingSection from '../../Components/BookingSection/bookingSection.component';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            checkIn: 'Checkin',
            checkOut: 'Checkout',
            rooms: {}
        }
    }

    componentDidMount() {
        this.props.GetHotels();
    }

    setItem = (key, value) => {
        this.setState({ [key]: value });
    }

    search = () => {
        this.props.navigation.navigate('HotelList', { title: this.state.city });
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView
                style={styles.container}
            >
                <BookingSection
                    city={this.state.city}
                    checkIn={this.state.checkIn}
                    checkOut={this.state.checkOut}
                    rooms={this.state.rooms}
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
    loading: state.hotelsStore.loading
})

export default connect(mapStateToProps, { GetHotels: GetHotelsAction })(HomeScreen);