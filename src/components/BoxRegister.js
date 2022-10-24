import React from "react";
import { SafeAreaView, TouchableOpacity, Text, View, TextInput, StyleSheet} from 'react-native'
import { useState } from "react";
import global from '../../global'
import {server, showError} from '../../src/common'

export default props => {

    var [initialState ={
        name: '',
        idModel: '',
    }, setState] = useState()


    var [state = {
        ...initialState
    }, setState] = useState()


    register = () => {
        try {
            fetch(`${server}/caixa`, {
                method: 'POST',
                body: JSON.stringify({
                    nome: state.name,
                    idModelo: state.age,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
           
        } catch(err){
            showError(err)
        }
    }

    return (
        <SafeAreaView style={global.container}>
            <View style={styles.title}>
                <Text>Cadastrar Caixa</Text>
            </View>
            <View>
                <TextInput placeholder="Nome da caixa" value={state.name}
                onChangeText={cName => setState(prevState =>({...prevState, name: cName}))}/>
                <TextInput placeholder="Id Modelo" value={state.idModel}
                onChangeText={cIdModel => setState(prevState =>({...prevState, idModel: cIdModel}))}/>
            </View>

            <TouchableOpacity 
                    title="Salvar" 
                    style={styles.button}
                    onPress={register}>
                    <Text style={styles.textButton}>
                        Salvar
                    </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    }, 
    button:{
        backgroundColor: '#2F80ED',
        borderRadius: 10,
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 15,
        paddingBottom: 15
    }
})