import React from "react";
import { SafeAreaView, TouchableOpacity, Text, View, TextInput, StyleSheet} from 'react-native'
import { useState } from "react";
import global from '../../global'
import {server, showError} from '../../src/common'

export default props => {

    var [initialState ={
        nome: '',
        altura: '',
        largura: ''
    }, setState] = useState()


    var [state = {
        ...initialState
    }, setState] = useState()


    register = () => {
        try {
            fetch(`${server}/caixa`, {
                method: 'POST',
                body: JSON.stringify({
                    nome: state.nome,
                    altura: state.altura,
                    largura: state.largura
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
            <View>
                <Text style={styles.title}>Cadastrar Caixa</Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder="Nome da caixa" value={state.nome}
                onChangeText={cName => setState(prevState =>({...prevState, nome: cName}))}/>
                <TextInput style={styles.input} placeholder="Altura" value={state.altura}
                onChangeText={cAltura => setState(prevState =>({...prevState, altura: cAltura}))}/>
                <TextInput style={styles.input} placeholder="Largura" value={state.largura}
                onChangeText={cLargura => setState(prevState =>({...prevState, largura: cLargura}))}/>
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
        margin: 30
    }, 
    button:{
        backgroundColor: '#2F80ED',
        borderRadius: 10,
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 15,
        paddingBottom: 15,
        margin: 30
    },
    input: {
        marginBottom: 1,
        borderBottomWidth: 0.7,
        borderBottomColor: "wite",
        height: 40
    }
})