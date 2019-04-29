import React, { Component } from 'react';
import { TouchableHighlight, Modal } from 'react-native';
import { View, Text } from '../../UIComponents';
import { SecondaryText } from '../../Theme/colors';

class RoomPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            adults: 2,
            rooms: 1,
            child: 0
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    getTitleElement() {
        const { customStyles = {}, allowFontScaling } = this.props;

        return (
            <Text allowFontScaling={allowFontScaling} style={[styles.contentText, customStyles.contentText]}>
                {`${this.state.adults} Adults, ${this.state.rooms} Rooms`}
            </Text>
        );
    }

    RenderRoomPicker = () => {
        return (
            <View style={{ flex: 1 }} >
                <Text>dsd</Text>
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
                        <View stlye={{ flex: 1, flexDirection: 'column' }}>
                            <this.RenderRoomPicker />
                        </View>
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
        borderColor: '#bdbdbd',
        borderWidth: 2,
        borderRadius: 32,
    }
}

export default RoomPicker;