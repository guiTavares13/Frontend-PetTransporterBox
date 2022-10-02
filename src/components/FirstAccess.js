import React, { useEffect, useState } from "react";
import { Text, TextInput, StyleSheet, setState, TouchableOpacity, SafeAreaView } from "react-native";
import { useFonts } from 'expo-font';
import global from '../../global';

export default props => {

    const [fontsLoaded] = useFonts({
        'Jost-BoldItalic': require('../../assets/fonts/Jost-BoldItalic.ttf'),
        'Jost-Regular': require('../../assets/fonts/Jost-Regular.ttf')
    });

    const [username, setUsername] = useState('');
    return(
        <SafeAreaView style={global.container}>
            <Text style={styles.text}>Como podemos  {'\n'} {' '} chamar você?</Text>
            <TextInput style={styles.input}  placeholder="Digite um nome"
            onChangeText={username => setUsername(username)}
            value={username}/>
            
            {username.valueOf("") != "" ?
            <TouchableOpacity 
                title="Button Access" 
                style={styles.buttonBloqued}><Text>Confirmar
                </Text>
           </TouchableOpacity>
                :
           <TouchableOpacity 
                    title="Button Access" 
                    style={styles.buttonAccess}
                    onPress={() => {props.navigation.navigate('FirstAccessConcluded')}}><Text style={styles.textButtonAccess}>Confirmar 1
                    </Text>
            </TouchableOpacity> 
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonAccess:{
        backgroundColor: '#2F80ED',
        borderRadius: 10,
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 15,
        paddingBottom: 15
    },
    text: {
        fontStyle: 'bold',
        marginBottom: 50,
        color: '#52665A',
        position: 'relative',
        fontStyle: 'Jost-Regular',
        fontSize: 24
    },
    input: {
        marginBottom: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: "wite",
    },
    textButtonAccess: {
        
    }
})