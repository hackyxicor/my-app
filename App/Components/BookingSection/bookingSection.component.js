import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

class BookingSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={{ padding: 5 }} >
                    <CityPicker
                        placeholder={"Where are you going?"}
                        city={city}
                    />
                </View>
                <View style={{ padding: 5 }} >
                    <DatePicker
                        checkIn={checkIn}
                        checkOut={checkOut}
                        style={styles.dateTimePicker}
                    />
                </View>
                <View style={{ padding: 5 }} >
                    <RoomPicker />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    }
})

export default BookingSection;
