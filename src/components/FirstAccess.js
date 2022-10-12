import React from "react";
import { Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, View } from "react-native";
import { useFonts } from 'expo-font';
import { useState, setState } from "react";
import global from '../../global';

import { server, showError, showSucess } from "../common";

export default props => {

    var [state = {
        name: '',
        lastName: '',
        email: '',
        documento: '',
        phone: '',
        password: '',
        stageNew: false
    }, setState] = useState()


    const [fontsLoaded] = useFonts({
        'Jost-BoldItalic': require('../../assets/fonts/Jost-BoldItalic.ttf'),
        'Jost-Regular': require('../../assets/fonts/Jost-Regular.ttf')
    });

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
                password: state.password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
            showSucess('Deu bom!')
        } catch(err){
            showError(err)
        }
    }
    
   

  /*  signup = async () => {
        try {
            await axios.post(`${server}/user`, {
                name: state.name,
                lastName: state.lastName,
                email: state.email,
                cpf: state.cpf,
                celular: state.celular,
                password: state.password
            });

            showSucess('Usuário cadastrado!')
        } catch(err){
            showError(err)
        }
        
    }*/

   /* signinOrSignup = () => {
        if(this.state.stageNew){
            Alert.alert('Sucesso!', 'Criar conta')
        } else {
            Alert.alert('Sucesso!', 'Logar')
        }
    }*/
    
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
                    onPress={signup}><Text style={styles.textButtonAccess}>
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
        
    }
})