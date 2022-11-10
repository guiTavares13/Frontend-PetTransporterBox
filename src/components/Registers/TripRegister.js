import React from "react";
import { SafeAreaView, TouchableOpacity, Text, View, Image, TextInput, StyleSheet, Platform} from 'react-native'
import { useState } from "react";
import global from '../../../global'
import {server, showError} from '../../common'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import AuthInput from "../Auth/AuthInput";

export default props => {

    var [initialState ={
        petId: '',
        boxId: '',
        date: '',
    }, setState] = useState()


    var [state = {
        ...initialState
    }, setState] = useState()

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
            <View>
                <Text style={styles.title}>Cadastrar Viagem</Text>
            </View>
            <View style={styles.formContainer}>
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
                    placeholder="Selecione o pet"
                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                    />
            </View>
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
                    placeholder="Selecione a caixa"
                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                    />
            </View>
                
                <AuthInput icon='calendar'  style={styles.input}  placeholder="Data da viagem" value={state.date}
                    onChangeText={cNascimento => setState(prevState=>({...prevState,date:cNascimento}))}/>
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
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        height: 40,
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
    dateBirthBar: {
        flexDirection: "row",
        alignItems: 'stretch',
    }, 
    dropDown: {
        marginTop: 10
     }
    
})