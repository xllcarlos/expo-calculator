import React from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableHighlight
} from "react-native";

// Window Width
const { width } = Dimensions.get('window');

// Style
const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: width / 4,
        width: width / 4,
        padding: 20,
        backgroundColor: '#F0F0F0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#FFF',
        backgroundColor: '#FA8231'
    },
    doubleButton: {
        width: width / 4 * 2
    },
    tripleButton: {
        width: width / 4 * 3
    }
});

type Props = {
    label: string,
    double?: boolean,
    triple?: boolean,
    operation?: boolean,
    onClick: Function | any
}

const Button = (props: Props) => {
    const stylesButton: object[] = [styles.button];

    // Add double button style
    if (props.double) {
        stylesButton.push(styles.doubleButton);
    }

    // Add triple button style
    if (props.triple) {
        stylesButton.push(styles.tripleButton);
    }

    // Add operation button style
    if (props.operation) {
        stylesButton.push(styles.operationButton);
    }

    return (
        <TouchableHighlight onPress={() => props.onClick()}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
}

export default Button;