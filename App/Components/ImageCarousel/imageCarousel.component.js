import React, { PureComponent } from 'react';
import ImageCarousel from 'react-native-image-carousel';
import { StyleSheet } from 'react-native'; 7
import { View, Text, Image, TouchableWithoutFeedback, Button } from '../../UIComponents';
import { normalize } from '../../Utils/dimensionHandler.utils';
import { OnPrimary } from '../../Theme/colors';

class ImageCarouselComponent extends PureComponent {
    renderHeader = () => {
        return (
            <Button
                type='icon-button'
                iconName="md-close"
                iconSize={32}
                iconColor={OnPrimary}
                buttonStyle={{ position: 'absolute', top: 40, right: 20, zIndex: 2 }}
                onPress={this._imageCarousel.close}
            />
        );
    }

    renderContent = (idx) => {
        const { images } = this.props;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: images[idx] }}
                />
            </View>
        );
    }

    render() {
        const { images } = this.props;
        return (
            <ImageCarousel
                ref={(imageCarousel) => {
                    this._imageCarousel = imageCarousel;
                }}
                renderContent={this.renderContent}
                renderHeader={this.renderHeader}
                zoomEnabled
                hideStatusBarOnOpen
                {...this.props}
            >
                {images.map((image) => (
                    <Image
                        key={image}
                        style={styles.image}
                        source={{ uri: image }}
                    />
                ))}
            </ImageCarousel>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: normalize(295),
        height: 200,
        resizeMode: 'cover'
    },
    closeText: {
        color: OnPrimary
    }
})

export default ImageCarouselComponent;
