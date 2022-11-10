import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, LogBox, Dimensions} from "react-native";
import logoPet from '../assets/icons/logo.png'

import BtnVisualizeAll from '../components/BtnVisualizeAll'

export default props => {

    LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

 console.log(props)
    return(
        <>
            <View style={styles.container}>
                <View>
                    <Image style={{width:50, height:50}} source={logoPet}/>
                </View>
                <Text>{props.name}</Text>
                <Text>{props.type}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: "center",
        paddingVertical: 15,
        width: Dimensions.get('window').width,
        margin: 10,
    }, 
})