import React, { useEffect, useState } from "react";
import { Text, TextInput, View, Button, StyleSheet, setState } from "react-native";

import global from '../../global.js';

export default function FirstAccess() {

    const [username, setUsername] = useState('');

    return(
        <View styles={global.content}>
            <Text>Como podemos chamar você?</Text>
            <TextInput placeholder="Digite um nome"
            onChangeText={(username) => setUsername(username)}
            value={this.state.username}/>
            
            {username.value != null ?
               <Button styles={style.buttonAccess}>Confirmar</Button> : 
               <Button styles={style.buttonBlocked}>Confirmar</Button>

               //ao confirmar ir para o componente de firstAccessConcluded
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