import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";

import petLocation from '../../assets/icons/location.png'
import stateIconPet from '../../assets/icons/state-icon.png'
import mapHeat from '../../assets/icons/mapHeat.png'
import photoIconPet from '../../assets/icons/photo-icon.png'

export default props => {
    return(
        <SafeAreaView>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttom} onPress={() => props.navigation.navigate('LocationPet', {...props})}>
                    <Image style={{width:110, height:111}} source={petLocation}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom} onPress={() => props.navigation.navigate('PetState', {...props})}>
                    <Image style={{width:110, height:110}} source={stateIconPet}/>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttom}>
                    <Image style={{width:110, height:110}} source={mapHeat}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom}>
                    <Image style={{width:110, height:110}} source={photoIconPet}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 15
    }, 
    buttom: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F5FAF7',
        borderRadius: 10,
        width: 160,
        height: 160,
    }
})
