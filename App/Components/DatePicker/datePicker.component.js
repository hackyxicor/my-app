import React, { PureComponent } from 'react';
import DatePicker from 'react-native-date-ranges';
import { SecondaryText, Primary } from '../../Theme/colors';
import { Button } from '../../UIComponents';

class DatePickerButton extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <DatePicker
                customStyles={{
                    placeholderText: { fontSize: 20 },
                    headerStyle: { backgroundColor: Primary },
                    headerMarkTitle: { fontSize: 20 },
                    headerDateTitle: {},
                    contentInput: {
                        height: 48,
                        borderRadius: 32,
                        backgroundColor: '#fff'
                    },
                    contentText: {
                        fontSize: 16,
                        color: SecondaryText
                    },
                    placeholderText: {
                        fontSize: 16,
                        color: SecondaryText
                    }
                }}
                centerAlign
                allowFontScaling={false}
                placeholder={'Checkin → Checkout'}
                mode={'range'}
                markText=" "
                customButton={(onConfirm) => <Button buttonContent="Proceed" type="bottom-stick" onPress={onConfirm} />}
                onConfirm={(dates) => {
                    this.props.callback('checkIn', dates.startDate)
                    this.props.callback('checkOut', dates.endDate)
                }}
            />
        )
    }
}

export default DatePickerButton;