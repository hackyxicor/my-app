import React, { PureComponent } from 'react';
import Icon from '@expo/vector-icons/AntDesign'
import { StyleSheet } from 'react-native';

import View from './view.component';
import Text from './text.component';
import TouchableOpacity from './touchableOpacity.component';
import { Primary, PrimaryText } from '../Theme/colors';


class Counter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount,
        }
    }

    componentWillReceiveProps(newProps, props) {
        if (props.initialCount != newProps.initialCount) {
            this.setState({ count: newProps.initialCount })
        }
    }

    add = () => {
        const { maxCount } = this.props;
        const newCount = this.state.count + 1;
        if (maxCount >= newCount) {
            this.setState({ count: newCount }, () => {
                this.callback(this.state.count)
            })
        }
    }

    minus = () => {
        const { minCount } = this.props;
        const newCount = this.state.count - 1;
        if (minCount < newCount) {
            this.setState({ count: newCount }, () => {
                this.callback(this.state.count)
            })
        }
    }

    callback = (count) => {
        this.props.callback(count);
    }

    render() {
        const { count } = this.state;
        const { label } = this.props;

        return (
            <View style={styles.container} >
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }} >
                    <Text style={styles.textLight}>{label}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }} >
                    <View style={styles.center} >
                        <TouchableOpacity
                            onPress={this.add}
                        >
                            <Icon name="pluscircle" size={32} color={Primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.center} >
                        <Text style={styles.text} >{count}</Text>
                    </View>
                    <View style={styles.center} >
                        <TouchableOpacity
                            onPress={this.minus}
                        >
                            <Icon name="minuscircle" size={32} color={Primary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: '500',
        fontSize: 24,
        color: PrimaryText
    },
    textLight: {
        fontWeight: '300',
        fontSize: 24,
        color: PrimaryText
    }
})

export default Counter;
