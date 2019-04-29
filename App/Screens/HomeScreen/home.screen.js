import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import { View, TextInput } from '../../UIComponents';

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

    render() {
        const { checkIn, checkOut, city } = this.state;
        console.log('fufufu')
        console.log(this.props);

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container} >
                    <BookingSection 
                        
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bookingPanelWrapper: {
        padding: 10,
    },
    dateTimePicker: {
        height: 50
    },
    inputBox: {
        borderWidth: 2,
        borderColor: Inactive,
        borderRadius: 30,
        height: 50
    }
})

const mapStateToProps = (state) => ({
    hotels: state.hotelsStore.hotels,
    loading: state.hotelsStore.loading
})

export default connect(mapStateToProps, { GetHotels: GetHotelsAction })(HomeScreen);