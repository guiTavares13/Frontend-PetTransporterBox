import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";

import travel from '../../assets/icons/travel.png'
import historic from '../../assets/icons/historic.png'

export default function Historics() {
    return(
        <SafeAreaView>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttom}>
                    <Image style={{width:110, height:110}} source={travel}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom}>
                    <Image style={{width:83, height:101}} source={historic}/>
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