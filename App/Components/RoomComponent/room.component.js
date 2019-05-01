import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Counter, Button } from '../../UIComponents';
import gStyle from '../../Theme/styles';
import { OnPrimary, ErrorColor } from '../../Theme/colors';

class RoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adult: props.adult,
            child: props.child
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({ adult: newProps.adult, child: newProps.child })
    }

    updateNumberOfAdults = (newCount) => {
        this.setState({ adult: newCount }, this.callback);
    }

    updateNumberOfChildren = (newCount) => {
        this.setState({ child: newCount }, this.callback);
    }

    callback = () => {
        this.props.callback(this.props.roomCount, this.state);
    }

    remove = () => {
        this.props.remove(this.props.roomCount);
    }

    render() {
        const { roomCount, showRemoveButton } = this.props;
        const { adult, child } = this.state;

        return (
            <View style={styles.container} >
                <View style={styles.title} >
                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }} >
                        <Text style={[gStyle.h3, gStyle.bold, gStyle.primaryText]} >
                            Room {roomCount == 0 ? '' : roomCount}
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }} >
                        {
                            showRemoveButton ?
                                <Button
                                    type='icon-button'
                                    iconName="md-close"
                                    iconSize={32}
                                    iconColor={ErrorColor}
                                    onPress={this.remove}
                                />
                                : null
                        }
                    </View>
                </View>
                <Counter
                    label={"Adults"}
                    initialCount={adult}
                    callback={this.updateNumberOfAdults}
                    maxCount={8}
                    minCount={0}
                />
                <Counter
                    label={"Children"}
                    initialCount={child}
                    callback={this.updateNumberOfChildren}
                    maxCount={8}
                    minCount={-1}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: 140,
        marginTop: 20
    },
    title: {
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})

export default RoomComponent;
