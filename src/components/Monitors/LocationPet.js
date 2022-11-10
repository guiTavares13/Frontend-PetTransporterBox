import React from "react";
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps';

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
              }}>
                <Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324
                }}
                pinColor='black'
                />
              </MapView>

            <Callout>
                <Text>Aqui</Text>
            </Callout>
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }, 
})