import React, { PureComponent } from 'react';
import DatePicker from 'react-native-date-ranges';
import { SecondaryText } from '../../Theme/colors';

class DatePickerButton extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props);
        return (
            <DatePicker
                customStyles={{
                    placeholderText: { fontSize: 20 },
                    headerStyle: { fontSize: 20 },
                    headerMarkTitle: { fontSize: 20 },
                    headerDateTitle: {},
                    contentInput: {},
                    contentText: {},
                    placeholderText: {
                        fontSize: 18,
                        color: SecondaryText
                    }
                }}
                centerAlign
                allowFontScaling={false}
                placeholder={'Checkin → Checkout'}
                mode={'range'}
                markText="Select pickup date"
                ButtonText="Proceed"
            />
        )
    }
}

export default DatePickerButton;