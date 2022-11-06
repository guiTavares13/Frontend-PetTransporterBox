import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

export default props => {
    return(
        <View style={styles.container}>
            <Text>Olá</Text>
            <MapView style={styles.map} 
                region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    map: {
        width: '50%',
        height: '50%'
    }
})