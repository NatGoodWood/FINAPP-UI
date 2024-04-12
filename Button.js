import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'

const Button = (props) => {
    const filledBgColor = props.color || COLORS.PRIMARY;
    const outlinedColor = COLORS.PRIMARY;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = COLORS.BLUE;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 20, ... { color: textColor, fontWeight:800 } }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.BLUE,
        backgroundColor:COLORS.GREY,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Button