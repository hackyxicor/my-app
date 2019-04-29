import React, { Component } from 'react';
import { TouchableHighlight, Modal } from 'react-native';
import { View, Text } from '../../UIComponents';
import { SecondaryText } from '../../Theme/colors';

class CityPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            showContent: false,
            selected: ''
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    getTitleElement() {
        const { showContent } = this.state;
        const { placeholder, customStyles = {}, allowFontScaling } = this.props;
        if (!showContent && placeholder) {
            return (
                <Text allowFontScaling={allowFontScaling} style={[styles.placeholderText, customStyles.placeholderText]}>
                    {placeholder}
                </Text>
            );
        }

        return (
            <Text allowFontScaling={allowFontScaling} style={[styles.contentText, customStyles.contentText]}>
                {this.state.selected}
            </Text>
        );
    }

    renderButton = () => {
        return (
            <TouchableHighlight
                underlayColor={'transparent'}
                onPress={this.onConfirm}
                style={[{ width: '80%', marginHorizontal: '3%' }, this.props.ButtonStyle]}
            >
                <Text style={[{ fontSize: 20 }, this.props.ButtonTextStyle]}>{this.props.ButtonText ? this.props.ButtonText : "送出"}</Text>
            </TouchableHighlight>
        )
    }

    RenderCities = () => {
        return (
            <View style={{ flex: 1 }} >
                <Text>cities</Text>
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
                            <this.RenderCities />
                        </View>
                    </Modal>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = {
    placeholderText: {
        fontSize: 18,
        color: SecondaryText
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

export default CityPicker;