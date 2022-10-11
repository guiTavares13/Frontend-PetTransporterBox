import React from "react";
import { Alert, Text } from "react-native";

export default function Monitor() {
    return(
        <Text style={{paddingTop: 120}}>Monitor {Alert.alert('Voce esta no monitor')}</Text>
    )
}

