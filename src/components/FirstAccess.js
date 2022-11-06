import React from "react";
import { Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, View, Image, Platform } from "react-native";
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from "react";
import global from '../../global'
import 'sessionstorage';

import calendarIcon from '../assets/icons/calendar.png'

import { server, showError } from "../common";

export default props => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    var [initialState = {
        name: '',
        lastName: '',
        email: 'gui@teste.com',
        documento: '',
        phone: '',
        nascimento:  '',
        senha: '123',
        stageNew: false,
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
        setState({nascimento: fDate})
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


    signinOrSignup = () => {
        if (state.stageNew){
            signup()
        } else {
            signin()
        }
    }

    signup = () => {
        try{
            fetch(`${server}/user`, {
            method: 'POST',
            body: JSON.stringify({
                nome: state.nome,
                documento: state.documento,
                lastName: state.lastName,
                email: state.email,
                phone: state.phone,
                nascimento: state.nascimento,
                senha: state.password,
                userStatus: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
            setState({...initialState})
        } catch(err){
            showError(err)
        }
    }

   signin = () => {
    try {
        fetch(`${server}/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: state.email,
                senha: state.senha,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                var sessionstorage = require('sessionstorage');
                sessionstorage.setItem('token', JSON.stringify(json));

                if(sessionstorage.getItem('token')){
                    props.navigation.navigate('Menu', json.user);
                } else {
                    showError(json);
                }
            });            
    } catch(err){
        showError(err)
    }
   }
    
    return(
        <SafeAreaView style={global.container}>
            <Text style={styles.text}>Caixa Pet</Text>
            <Text>{state.stageNew ? 'Crie sua conta': 'Informe seus dados'}</Text>
            <View>
                {state.stageNew && 
                    <TextInput style={styles.input}  placeholder="Primeiro nome" value={state.name}
                    onChangeText={cName => setState(prevState=>({...prevState,nome:cName}))}
                    />
                }
                {state.stageNew && 
                   <TextInput style={styles.input}  placeholder="Último nome" value={state.lastName}
                   onChangeText={cLastName => setState(prevState=>({...prevState,lastName:cLastName}))}
                   />
                }
                
                <TextInput style={styles.input}  placeholder="E-mail" value={state.email}
                onChangeText={cEmail => setState(prevState=>({...prevState,email:cEmail}))}
                />
                {state.stageNew && 
                    <TextInput style={styles.input}  placeholder="CPF" value={state.documento}
                    onChangeText={cDocumento => setState(prevState=>({...prevState,documento:cDocumento}))}
                    />
                }
                {state.stageNew &&
                    <TextInput style={styles.input}  placeholder="Celular" value={state.phone}
                    onChangeText={cCelular => setState(prevState=>({...prevState,phone:cCelular}))}
                    />
                }
                {state.stageNew &&
                    <View style={styles.dateBirthBar}>
                        <TouchableOpacity 
                            title="" onPress={showDatepicker}
                            style={styles.btnAvancar}>
                            <Image style={{width:30, height:30}}
                                source={calendarIcon}/>
                        </TouchableOpacity> 
                        <Text>{state.nascimento}</Text>
                        {state.dateTimeShow &&
                            <DateTimePicker value={date} title="Show date picker!" />
                        }
                    </View>
                }
               
                <TextInput style={styles.input}  placeholder="Senha"  secureTextEntry={true} value={state.senha}
                onChangeText={cPassword => setState(prevState=>({...prevState,senha:cPassword}))}
                />
                {/* {state.stageNew &&
                    <TextInput style={styles.input}  placeholder="Confirmar senha" secureTextEntry={true}
                    />
                } */}
                
            </View>
            <TouchableOpacity onPress={() => setState({stageNew: !state.stageNew})} style={{padding: 10}}>
                <Text>{state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}</Text>
            </TouchableOpacity>
           <TouchableOpacity 
                    title="Button Access" 
                    style={styles.buttonAccess}
                    onPress={signinOrSignup}><Text style={styles.textButtonAccess}>
                        {state.stageNew ? 'Registrar' : 'Entrar'}
                    </Text>
            </TouchableOpacity> 
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
        fontSize: 24
    },
    input: {
        marginBottom: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: "wite",
    },
    textButtonAccess: {
        
    },
    dateBirthBar: {
        flexDirection: "row",
        alignItems: 'stretch',
    }
})