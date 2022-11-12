import React from "react";
import { SafeAreaView, TouchableOpacity, Text, View, TextInput, StyleSheet} from 'react-native'
import { useState, useCallback } from "react";
import global from '../../../global'
import {server, showError} from '../../common'
import DropDownPicker from 'react-native-dropdown-picker';
import AuthInput from "../Auth/AuthInput";

export default props => {

    const [modelBoxOpen, setModelBoxOpen] = useState(false);
    const [modelBoxValue, setModelBoxValue] = useState([]);
    const [modelBoxItems, setModelBoxItems] = useState([]);

    var [initialState ={
        nome: '',
        modelo: ''
    }, setState] = useState()

    var [state = {
        ...initialState
    }, setState] = useState()

    listBoxModel = () => {
        console.log('1')
        try {
            fetch(`${server}/caixaModelAll`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) =>{
                setModelBoxItems(response);
              })
           
        } catch(err){
            showError(err)
        }
    }

    register = () => {
        try {
            fetch(`${server}/caixa`, {
                method: 'POST',
                body: JSON.stringify({
                    nome: state.nome,
                    modelo: state.modelo
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

    const onModelBoxOpen = useCallback(() => {
        setModelBoxOpen(false);
    }, []);

    return (
        <SafeAreaView style={global.container}>
            <View>
                <Text style={styles.title}>Cadastrar Caixa</Text>
            </View>
            <View style={styles.formContainer}>
                <AuthInput icon='dropbox'  style={styles.input} placeholder="Nome da caixa" value={state.nome}
                onChangeText={cName => setState(prevState =>({...prevState, nome: cName}))}/>

                <View style={styles.dropDown}>
                    <DropDownPicker
                        placeholder="Modelos de caixa"
                        open={modelBoxOpen}
                        value={modelBoxValue}
                        items={modelBoxItems}
                        setOpen={setModelBoxOpen}
                        setValue={setModelBoxValue}
                        setItems={setModelBoxItems}
                        onPress={listBoxModel}
                        onChangeValue={(value) => setState(prevState=> ({...prevState, modelo: (value.toString())}))}
                        onOpen={onModelBoxOpen}
                    />
                </View>
                
            </View>

            <TouchableOpacity 
                    title="Salvar" 
                    style={styles.button}
                    onPress={register}>
                    <Text style={styles.textButton}>
                        Cadastrar
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
    formContainer: {
        backgroundColor: 'rgba(0,0,0, 0.8)',
        padding: 20,
        width: '90%',
        borderRadius: 10
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
        marginTop: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        height: 40,
    }, 
    dropDown: {
        marginTop: 10
     }
})