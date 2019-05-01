import React from 'react';
import DatePicker from 'react-native-date-ranges';
import { SecondaryText, Primary } from '../../Theme/colors';
import { Button } from '../../UIComponents';

const DatePickerButton = ({
    checkIn,
    checkOut,
    callback,
}) => (
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
            placeholder={getPlaceholder(checkIn, checkOut)}
            mode={'range'}
            markText=" "
            customButton={(onConfirm) => <Button buttonContent="Proceed" type="bottom-stick" onPress={onConfirm} />}
            onConfirm={(dates) => {
                callback('checkIn', dates.startDate)
                callback('checkOut', dates.endDate)
            }}
        />
    )

const getPlaceholder = (checkIn, checkOut) => {
    if (checkIn && checkOut) {
        return `${checkIn} → ${checkOut}`
    }

    return 'Checkin → Checkout'
}

export default DatePickerButton;