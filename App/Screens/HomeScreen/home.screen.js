import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import { View, Text } from '../../UIComponents';

import { GetHotelsAction } from '../../Actions/index.actions';


import DatePickerButton from '../../Components/DatePickerButton/datePickerButton.component';

class HomeScreen extends Component {
    componentDidMount() {
        this.props.GetHotels();
    }

    render() {
        console.log('fufufu')
        console.log(this.props);

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container} >
                    <Text>Home Screen</Text>
                    <DatePickerButton />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

const mapStateToProps = (state) => ({
    hotels: state.hotelsStore.hotels,
    loading: state.hotelsStore.loading
})

export default connect(mapStateToProps, { GetHotels: GetHotelsAction })(HomeScreen);