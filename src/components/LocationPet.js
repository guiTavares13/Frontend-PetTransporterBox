import React from "react";
import { Text, View, StyleSheet } from 'react-native'

export default props => {
    return(
        <View style={styles.container}>
            <Text>Olá</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})