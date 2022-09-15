import React, { useEffect, useState } from "react";
import { Text, TextInput, View, Button, StyleSheet, setState } from "react-native";

import global from '../../global.js';

export default props => {

    const [username, setUsername] = useState('');
    return(
        <View styles={global.container}>
            <Text>Como podemos chamar você?</Text>
            <TextInput placeholder="Digite um nome"
            onChangeText={username => setUsername(username)}
            value={username}/>
            
            {username.value != null ?
               <Button styles={style.buttonAccess} title = "Confirmar 1"></Button> : 
               <Button styles={style.buttonBlocked} title = "Confirmar 2" onPress={() => {props.navigation.navigate('FirstAccessConcluded')}}></Button>
            }
            
        </View>
    );
}

const style = StyleSheet.create({
    content: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonAccess: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }, 
    buttonBlocked: {
        opacity: 0.4,
        cursor: 'default'
    }
})