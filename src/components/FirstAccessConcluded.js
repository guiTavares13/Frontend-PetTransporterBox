
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import global from '../../global'

export default props => {
    return(
        <View style={global.container}>
            
            <Text>Prontinho</Text>
            <Text style={styles.buttonAccess}>Agora vamos cuidar dos seus animaizinhos!</Text>
            <Button title="Começar" onPress={() => {
                props.navigation.navigate('Menu')
            }}>Começar</Button>
           
        </View> 
    );
}

const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    logo: {
        width: 300,
        height: 300,
        borderWidth: 2,
    }, 
    buttonAccess: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
})