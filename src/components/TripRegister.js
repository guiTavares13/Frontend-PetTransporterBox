import React from "react";
import { SafeAreaView, TouchableOpacity, Text, View, TextInput, StyleSheet} from 'react-native'
import { useState } from "react";
import global from '../../global'
import {server, showError} from '../../src/common'

export default props => {

    var [initialState ={
        petId: '',
        boxId: '',
        date: '',
    }, setState] = useState()


    var [state = {
        ...initialState
    }, setState] = useState()


    register = () => {
        try {
            fetch(`${server}/pet`, {
                method: 'POST',
                body: JSON.stringify({
                    petId: state.petId,
                    caixaID: state.name,
                    date: state.date
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
                <Text>Cadastrar Viagem</Text>
            </View>
            <View>
                <TextInput placeholder="IdPet" value={state.petId}
                onChangeText={cName => setState(prevState =>({...prevState, petId: cName}))}/>
                <TextInput placeholder="IdCaixa" value={state.caixaID}
                onChangeText={cAge => setState(prevState =>({...prevState, caixaID: cAge}))}/>
                <TextInput placeholder="Data" value={state.date}
                onChangeText={cBreed => setState(prevState =>({...prevState, date: cBreed}))}/>
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