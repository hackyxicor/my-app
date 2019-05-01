import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { View, Text, Button } from '../../UIComponents';
import CityPicker from '../../Components/CityPicker/cityPicker.component';
import RoomPicker from '../../Components/RoomPicker/roomPicker.component';
import DatePicker from '../../Components/DatePicker/datePicker.component';
import { Primary } from '../../Theme/colors';
import gStyle from '../../Theme/styles';

class BookingSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={{ flex: 1, padding: 10, alignItems: 'flex-start', justifyContent: 'flex-end' }} >
                    <Text style={[gStyle.h1, gStyle.bold, gStyle.onPrimary]} >Welcome guest</Text>
                </View>
                <View style={{ flex: 2.5, justifyContent: 'flex-end' }} >
                    <View style={{ padding: 5 }} >
                        <CityPicker
                            placeholder={"Where are you going?"}
                            city={this.props.city}
                            callback={(city) => this.props.callback('city', city)}
                        />
                    </View>
                    <View style={{ padding: 5 }} >
                        <DatePicker
                            checkIn={this.props.checkIn}
                            checkOut={this.props.checkOut}
                            style={styles.dateTimePicker}
                            callback={this.props.callback}
                        />
                    </View>
                    <View style={{ padding: 5 }} >
                        <RoomPicker
                            rooms={this.props.rooms}
                        />
                    </View>
                    <View style={{ padding: 5 }} >
                        <Button
                            buttonContent={"Search"}
                            onPress={() => this.props.search()}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        backgroundColor: Primary,
        justifyContent: 'flex-end',
        padding: 5,
    },

})

export default BookingSection;
