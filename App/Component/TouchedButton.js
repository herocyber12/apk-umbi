import React from 'react'
import { Animated, TouchableWithoutFeedback } from 'react-native'

export default function TouchedButton({ onPress, style, children }) {
    const animation = new Animated.Value(0);
    const inputRange = [0, 1];
    const outputRange = [1, 0.9];
    const scale = animation.interpolate({ inputRange, outputRange });


    const onPressIn = () => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };
    const onPressOut = () => {
        Animated.spring(animation, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    };


    return (
        <Animated.View style={[style,{ transform: [{ scale }] }]}>
            <TouchableWithoutFeedback
                onPress={onPress}
                activeOpacity={1}
                onPressIn={onPressIn}
                onPressOut={onPressOut}>
                {children}
            </TouchableWithoutFeedback>
        </Animated.View>
    )
}
