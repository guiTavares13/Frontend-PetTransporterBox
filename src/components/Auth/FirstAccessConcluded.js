
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import global from '../../../global'

import logo from '../../assets/icons/logo.png'

export default props => {
    
    return(
        <View style={global.container}>
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.title}>Prontinho!</Text>
            <Text style={styles.subtitle}>Agora vamos cuidar dos seus {'\n'} {'             '}animaizinhos!</Text>
            <TouchableOpacity 
                    title="Button Access" 
                    style={styles.buttonAccess}
                    onPress={() => {
                        props.navigation.navigate('Menu')}}><Text style={styles.textButtonAccess}>Confirmar 1
                    </Text>
            </TouchableOpacity> 
           
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
        width: 200,
        height: 200,
    }, 
    title: {
        fontStyle: 'bold',
        marginBottom: 50,
        marginTop: 50,
        color: '#52665A',
        position: 'relative',
        fontStyle: 'Jost-Regular',
        fontSize: 24
    },
    subtitle: {
        fontStyle: 'bold',
        marginBottom: 50,
        position: 'relative',
        fontStyle: 'Jost-Regular',
    },
    buttonAccess: {
        backgroundColor: '#32B768',
        borderRadius: 10,
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 15,
        paddingBottom: 15
    },
    textButtonAccess: {
        backgroundColor: '#32B768',
        textAlign: 'center',
        fontStyle: 'Jost-Regular',
    }
})