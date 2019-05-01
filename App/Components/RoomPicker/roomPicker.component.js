import React, { Component } from 'react';
import { TouchableHighlight, Modal } from 'react-native';

import { View, Text, Button, ScrollView, FlatList } from '../../UIComponents';
import { SecondaryText, Primary, OnPrimary, Secondary } from '../../Theme/colors';
import { normalize } from '../../Utils/dimensionHandler.utils';
import gStyle from '../../Theme/styles';
import RoomComponent from '../RoomComponent/room.component';

class RoomPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            rooms: this.props.rooms
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    getContent = () => {
        const { rooms } = this.state;
        let adults = 0;
        let child = 0;

        rooms.forEach((room) => {
            if (room && typeof room == 'object') {
                adults += room.adult;
                child += room.child;
            }
        })

        return `${adults} Adults, ${child > 0 ? `${child} Children` : ''} ${this.state.rooms.length} Rooms`;
    }

    getTitleElement() {
        const { customStyles = {}, allowFontScaling } = this.props;

        return (
            <Text allowFontScaling={allowFontScaling} style={[styles.contentText, customStyles.contentText]}>
                {this.getContent()}
            </Text>
        );
    }

    updateRoom = (index, room) => {
        const newRooms = [...this.state.rooms];
        newRooms[index] = room;
        this.setState({ rooms: newRooms }, () => this.props.callback('rooms', this.state.rooms));
    }

    removeRoom = (index) => {
        if (index == 0) {
            return;
        }

        const newRooms = [...this.state.rooms];
        delete newRooms[index];
        this.setState({ rooms: newRooms }, () => this.props.callback('rooms', this.state.rooms));
    }

    addRoom = () => {
        const newRooms = [...this.state.rooms];
        const room = {
            adult: 1,
            child: 0
        };

        newRooms.push(room);
        this.setState({ rooms: newRooms }, () => this.props.callback('rooms', this.state.rooms));
    }

    RenderRoomPicker = () => {
        const { rooms } = this.state;
        return (
            <View style={{ flex: 1 }} >
                <Button
                    type='icon-button'
                    iconName="md-close"
                    iconSize={32}
                    iconColor={OnPrimary}
                    buttonStyle={{ position: 'absolute', top: 40, right: 20, zIndex: 2 }}
                    onPress={() => this.setModalVisible(false)}
                />
                <View style={styles.searchWrapper} >
                    <View style={{ flex: 1, padding: 15, alignItems: 'flex-start', justifyContent: 'flex-end' }} >
                        <Text style={[gStyle.h3, gStyle.bold, gStyle.onPrimary]} >{this.getContent()}</Text>
                    </View>
                </View>
                <FlatList
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingBottom: 150 }}
                    data={rooms}
                    renderItem={({ item, index }) => {
                        if (item) {
                            return (
                                <RoomComponent
                                    key={index}
                                    showRemoveButton={!(index == 0)}
                                    roomCount={index}
                                    adult={item.adult}
                                    child={item.child}
                                    callback={this.updateRoom}
                                    remove={this.removeRoom}
                                />
                            )
                        }
                        return null
                    }}
                />
                <Button
                    buttonContent="Proceed"
                    type="bottom-stick"
                    onPress={() => this.setModalVisible(false)}
                    buttonStyle={{ position: 'absolute', top: normalize(570), right: 0, zIndex: 2 }}
                />
                <Button
                    type='fab'
                    iconName="ios-add"
                    iconSize={32}
                    iconColor={OnPrimary}
                    buttonStyle={{ position: 'absolute', top: normalize(520), right: 20, zIndex: 2 }}
                    onPress={this.addRoom}
                />
            </View>
        )
    }

    render() {
        const {
            customStyles = {},
        } = this.props;

        let style = styles.stylish;
        style = this.props.centerAlign ? { ...style } : style;
        style = { ...style, ...this.props.style };


        return (
            <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => { this.setModalVisible(true); }}
                style={[{ width: '100%', height: '100%', justifyContent: 'center' }, style]}>
                <View>
                    <View><View style={[customStyles.contentInput, styles.contentInput]}>{this.getTitleElement()}</View></View>
                    <Modal
                        animationType="slide"
                        onRequestClose={() => this.setModalVisible(false)}
                        transparent={false}
                        visible={this.state.modalVisible}>
                        <this.RenderRoomPicker />
                    </Modal>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = {
    placeholderText: {
        color: '#c9c9c9',
        fontSize: 18,
    },
    contentInput: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentText: {
        fontSize: 18,
        color: SecondaryText
    },
    stylish: {
        height: 48,
        borderRadius: 32,
        backgroundColor: '#fff'
    },
    searchWrapper: {
        height: normalize(120),
        backgroundColor: Primary
    },
}

export default RoomPicker;