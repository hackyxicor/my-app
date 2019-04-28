import React, { PureComponent } from 'react';
import DatePicker from 'react-native-date-ranges';

class DatePickerButton extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <DatePicker
                style={{ width: 350, height: 45 }}
                customStyles={{
                    placeholderText: { fontSize: 20 }, // placeHolder style
                    headerStyle: { fontSize: 20 },			// title container style
                    headerMarkTitle: { fontSize: 20 }, // title mark style 
                    headerDateTitle: {}, // title Date style
                    contentInput: {}, //content text container style
                    contentText: {}, //after selected text Style
                }} // optional 
                centerAlign // optional text will align center or not
                allowFontScaling={false} // optional
                placeholder={'Apr 27, 2018 → Jul 10, 2018'}
                mode={'range'}
                markText="Select pickup date"
                ButtonText="Proceed"
            />
        )
    }
}

export default DatePickerButton;