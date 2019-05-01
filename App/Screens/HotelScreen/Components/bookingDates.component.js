import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../../../UIComponents';
import gStyle from '../../../Theme/styles';
import { DisplayDate } from '../../../Utils/common.utils';

const BookingDates = ({ checkinDate, checkoutDate }) => (
    <View style={styles.container} >
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} >
                <Text style={[gStyle.light, gStyle.h6, gStyle.secondaryText]} >Check-in</Text>
            </View>
            <View style={{ flex: 2, alignItems: 'flex-start', justifyContent: 'center' }} >
                <Text style={[gStyle.bold, gStyle.h2, gStyle.primaryText]} >
                    {DisplayDate(checkinDate)}
                </Text>
            </View>
        </View>
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start' }} >
                <Text style={[gStyle.light, gStyle.h6, gStyle.secondaryText]} >Check-out</Text>
            </View>
            <View style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'center' }} >
                <Text style={[gStyle.bold, gStyle.h2, gStyle.primaryText]} >
                    {DisplayDate(checkoutDate)}
                </Text>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row'
    }
})

export default BookingDates;
