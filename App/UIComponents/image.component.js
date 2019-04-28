import React, { Component } from 'react';
import { Image } from 'react-native';
import { Stylify } from '../Utils/dimensionHandler.utils';


class UIImage extends Component {
    render() {
        return (
            <Image
                {...this.props}
                style={Stylify(this.props.style)}
            />
        )
    }
}

export default UIImage;