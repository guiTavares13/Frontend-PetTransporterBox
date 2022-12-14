import React from "react";
import { SafeAreaView, TouchableOpacity, Text, View, TextInput, StyleSheet, Image, Platform} from 'react-native'
import { useState } from "react";
import global from '../../global'
import {server, showError} from '../../src/common'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import calendarIcon from '../assets/icons/calendar.png'

export default props => {

    

    var [initialState ={
        name: '',
        age: 0,
        breed: '',
        type: '',
        dataNascimento: '',
        dateTimeShow: false
    }, setState] = useState()


    var [state = {
        ...initialState
    }, setState] = useState()

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setState({dataNascimento: fDate})
      };
    
      const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: currentMode,
          is24Hour: true,
        });
      };
    
      const showDatepicker = () => {
        setState({dateTimeShow: !state.dateTimeShow});
        showMode('date');
      };


    register = () => {
        try {
            fetch(`${server}/pet`, {
                method: 'POST',
                body: JSON.stringify({
                    id: "2",
                    name: state.name,
                    age: state.age,
                    breed: state.breed,
                    category: state.type
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
                <Text style={styles.title}>Cadastrar Pet</Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder="Nome do pet" value={state.name}
                onChangeText={cName => setState(prevState =>({...prevState, name: cName}))}/>
                <TextInput style={styles.input} placeholder="Idade" value={state.age}
                onChangeText={cAge => setState(prevState =>({...prevState, age: cAge}))}/>
                <TextInput style={styles.input} placeholder="Ra??a" value={state.breed}
                onChangeText={cBreed => setState(prevState =>({...prevState, breed: cBreed}))}/>
                <TextInput style={styles.input} placeholder="Tipo" value={state.type}
                onChangeText={cType => setState(prevState =>({...prevState, type: cType}))}/>

                <View style={styles.dateBirthBar}>
                    <TouchableOpacity 
                        title="" onPress={showDatepicker}
                        style={styles.btnAvancar}>
                        <Image style={{width:30, height:30}}
                            source={calendarIcon}/>
                    </TouchableOpacity> 
                    <Text>{state.dataNascimento}</Text>
                    {state.dateTimeShow &&
                        <DateTimePicker value={date} title="Show date picker!" />
                    }
                    
                </View>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        margin: 30
    }, 
    button:{
        margin:30,
        backgroundColor: '#2F80ED',
        borderRadius: 10,
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 15,
        paddingBottom: 15
    },
    input: {
        marginBottom: 1,
        borderBottomWidth: 0.7,
        borderBottomColor: "wite",
        height: 40
    },
    dateBirthBar: {
        flexDirection: "row",
        alignItems: 'stretch',
    }
})