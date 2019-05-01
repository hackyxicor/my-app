import React, { Component } from 'react';
import { TouchableHighlight, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { View, Text, TextInput, TouchableOpacity, FlatList, Button } from '../../UIComponents';
import { SecondaryText, Primary, OnPrimary } from '../../Theme/colors';
import { normalize } from '../../Utils/dimensionHandler.utils';
import cities from '../../Mock/cities';
import ListItem from '../ListItem/listItem.component';

class CityPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            showContent: !!props.city,
            searchText: '',
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
                <Text style={[{ fontSize: 20 }, this.props.ButtonTextStyle]}>{this.props.ButtonText ? this.props.ButtonText : ''}</Text>
            </TouchableHighlight>
        )
    }

    citySelect = (city) => {
        this.props.callback(city);
        this.setState({ selected: city, showContent: true })
        this.setModalVisible(false)
    }

    RenderCities = () => {
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
                        <TextInput
                            placeholderTextColor={'rgba(255,255,255, 0.5)'}
                            placeholder="Enter destination"
                            value={this.state.searchText}
                            onChangeText={(searchText) => this.setState({ searchText })}
                            style={styles.textInput}
                        />
                    </View>
                </View>
                {
                    cities.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                label={item.label}
                                onPress={() => this.citySelect(item.value)}
                            />
                        )
                    })
                }
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
        borderRadius: 32,
        backgroundColor: '#fff'
    },
    searchWrapper: {
        height: normalize(120),
        backgroundColor: Primary
    },
    textInput: {
        backgroundColor: 'transparent',
        fontWeight: '500',
        fontSize: 22,
        color: OnPrimary
    }
}

export default CityPicker;