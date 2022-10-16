import React , { useState, useEffect, Component, setState } from "react";
import { View, Text, Image, SafeAreaView, StyleSheet, Pressable, TouchableHighlight, Alert } from "react-native";

import Monitor from '../components/Monitor'
import Historics from '../components/Historics'
import Cadastros from "../components/Registers";

import logo from '../assets/icons/logo_icon.png'

export default function Menu() {

   var [initialState = {
        name: '',
        monitor: true,
        cadastro: false,
        historico: false
    }, setState] = useState()

    var [state = {
        ...initialState
    }, setState] = useState()

    var subtitle = defineSubtitle();

    toggleMonitor = () => {
       setState({monitor: !state.monitor})
    }

    toggleCadastro = () => {
        setState({cadastro: !state.cadastro})
    }

    toggleHistorico = () => {
        setState({historico: !state.historico})
    }

    function defineSubtitle() {
        if(state.monitor){
            return 'Deseja monitorar seu pet?'
        } else if(state.cadastro) {
            return 'Deseja cadastrar um pet novo ou uma viagem?'
        } else if(state.historico) {
            return 'Deseja consultar algum histórico?'
        }
    }

    function defineRoute() {
        if(state.monitor){
            return <Monitor/>
        } else if(state.cadastro) {
            return <Cadastros/>
        } else if(state.historico) {
            return <Historics/>
        }
    }
        return (
            <>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Olá, {'\nFernando'}</Text>
                    </View>
                    <View style={styles.titleImage}>
                        <Image style={{width:50, height:50}} source={logo}/>
                    </View>
                </View>
                <View style={styles.subititle}>
                    <Text>{subtitle}</Text>
                </View>
                <SafeAreaView style={styles.buttoms}>
                    <View>
                        {state.monitor ? 
                            <TouchableHighlight
                                title="Button Access" 
                                style={styles.buttonClicked}
                                onPress={toggleMonitor}>
                                    <Text>Monitorar</Text>
                            </TouchableHighlight> 
                            :
                            <TouchableHighlight
                                title="Button Access" 
                                style={styles.buttonNonClicked}
                                onPress={toggleMonitor}>
                                    <Text>Monitorar</Text>
                            </TouchableHighlight> 
                        }
                    </View>
                    <View>
                        {state.cadastro ?
                            <TouchableHighlight 
                                title="Button Access" 
                                style={styles.buttonClicked}
                                onPress={toggleCadastro}>
                                    <Text>Cadastros</Text>
                            </TouchableHighlight> 
                            :
                            <TouchableHighlight 
                            title="Button Access" 
                            style={styles.buttonNonClicked}
                            onPress={toggleCadastro}>
                                <Text>Cadastros</Text>
                        </TouchableHighlight> 
                        }
                    </View>
                    <View>
                        {state.historico ?
                            <TouchableHighlight 
                                title="Button Access" 
                                style={styles.buttonClicked}
                                onPress={toggleHistorico}>
                                    <Text>Historicos</Text>
                            </TouchableHighlight> 
                            :
                            <TouchableHighlight 
                                title="Button Access" 
                                style={styles.buttonNonClicked}
                                onPress={toggleHistorico}>
                                    <Text>Historicos</Text>
                            </TouchableHighlight> 
                        }
                        
                    </View>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.container2}>
                {
                    defineRoute()
                }
            </SafeAreaView>
            
        </>
        )
}

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#FFFFFF'
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    title: {
        fontSize: 30,
    },
    subititle: {
        alignItems: "flex-start",
        padding: 20
    }, 
    buttonClicked: {
        backgroundColor: '#32B768',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10
    }, 
    buttonNonClicked: {
        backgroundColor: '#F5FAF7',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttoms: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'stretch',
        margin: 40,
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff'
    },
    titleBar: {
        flex: 2,
        justifyContent: 'flex-end',
        padding: 30,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black'
    }, 
    titleImage : {
        flex: 2,
        borderWidth: 1,
        padding: 30,
        marginTop: 20,
        borderColor: 'black',
        alignItems: "flex-end"
    }
})