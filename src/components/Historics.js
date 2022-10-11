import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";

import logo from '../assets/icons/cadastro2.png'
import logoTravel from '../assets/icons/travel_create_icon.png'

export default function Historics() {
    return(
        <SafeAreaView>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttom}>
                    <Image style={{width:150, height:150}} source={logo}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom}>
                    <Image style={{width:150, height:150}} source={logoTravel}/>
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
        alignItems: 'stretch',
        paddingTop: 80,
        margin: 20
    }, 
    buttom: {
        backgroundColor: '#F5FAF7',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10
        
    }
})