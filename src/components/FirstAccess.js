import React from "react";
import { Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, View } from "react-native";
import { useFonts } from 'expo-font';
import { useState } from "react";
import global from '../../global';

import { server, showError } from "../common";

export default props => {

    const [fontsLoaded] = useFonts({
        'Jost-BoldItalic': require('../../assets/fonts/Jost-BoldItalic.ttf'),
        'Jost-Regular': require('../../assets/fonts/Jost-Regular.ttf')
    });

    
    /*const [date, setDate] = useState(null);
    useEffect(() => {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        setDate(date);
    }, []);*/

    var [initialState = {
        name: '',
        lastName: '',
        email: '',
        documento: '',
        phone: '',
        nascimento:  new Date(),
        password: '',
        stageNew: false
    }, setState] = useState()
    
    var [state = {
        ...initialState
    }, setState] = useState()

    var dataNasc = new Date('1998','05', '18');

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
                nascimento: dataNasc,
                password: state.password,
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
                password: state.password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
            localStorage.setItem(ACCESS_TOKEN, response.value.jwt);
            props.navigation.navigate('Menu', {...props});
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
               
                <TextInput style={styles.input}  placeholder="Senha"  secureTextEntry={true} value={state.password}
                onChangeText={cPassword => setState(prevState=>({...prevState,password:cPassword}))}
                />
                {state.stageNew &&
                    <TextInput style={styles.input}  placeholder="Confirmar senha" secureTextEntry={true}
                    />
                }
                
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
        fontStyle: 'Jost-Regular',
        fontSize: 24
    },
    input: {
        marginBottom: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: "wite",
    },
    textButtonAccess: {
        
    },
    dateComponent: {
        width: 350
    }
})