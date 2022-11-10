import React from "react";
import { SafeAreaView, TouchableOpacity, Text, View, TextInput, StyleSheet} from 'react-native'
import { useState } from "react";
import global from '../../../global'
import {server, showError} from '../../common'
import DropDownPicker from 'react-native-dropdown-picker';
import AuthInput from "../Auth/AuthInput";

export default props => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(['italy', 'spain', 'barcelona', 'finland']);
    const [items, setItems] = useState([
    // {label: 'Spain', value: 'spain'},
    // {label: 'Madrid', value: 'madrid', parent: 'spain'},
    // {label: 'Barcelona', value: 'barcelona', parent: 'spain'},
    // {label: 'Italy', value: 'italy'},
    // {label: 'Rome', value: 'rome', parent: 'italy'},
    // {label: 'Finland', value: 'finland'}
  ]);

    var [initialState ={
        nome: '',
        modelo: ''
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

    return (
        <SafeAreaView style={global.container}>
            <View>
                <Text style={styles.title}>Cadastrar Caixa</Text>
            </View>
            <View style={styles.formContainer}>
                <AuthInput icon='box'  style={styles.input} placeholder="Nome da caixa" value={state.nome}
                onChangeText={cName => setState(prevState =>({...prevState, nome: cName}))}/>

                <View style={styles.dropDown}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        theme="DARK"
                        multiple={true}
                        mode="BADGE"
                        placeholder="Modelos"
                        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
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