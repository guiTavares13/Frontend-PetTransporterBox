import React , { useState, useEffect, Component, setState } from "react";
import { View, Text, Image, SafeAreaView, StyleSheet, Pressable, TouchableHighlight, Alert } from "react-native";

import Monitor from '../components/Monitor'
import Historics from '../components/Historics'
import Cadastros from "../components/Registers";

import logo from '../assets/icons/logo_icon.png'

export default function Menu() {

   var [state = {
        name: '',
        monitor: true,
        cadastro: false,
        historico: false
    }, setState] = useState()

    toggleMonitor = () => {
       setState({monitor: this.state.monitor})
    }

    toggleCadastro = () => {
        setState({cadastro: !this.state.cadastro})
    }

    toggleHistorico = () => {
        setState({cadastro: !this.state.historico})
    }
        return (
            <>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={{height: 100, backgroundColor: 'steelblue'}}>
                        <Text>Olá,</Text>
                        <Text>Fernando</Text>
                    </View>
                    <View style={{height: 100, backgroundColor: 'steelblue'}}>
                        <Image style={{width:50, height:50}} source={logo}/>
                    </View>
                </View>
                <View style={styles.subititle}>
                    <Text>Vamos <Text>monitorar</Text> seu anumalzinho {'\n'}
                    ou <Text>cadastrar</Text> algo?
                    </Text>
                </View>
                <SafeAreaView style={styles.buttoms}>
                    <View>
                        <TouchableHighlight
                                 title="Button Access" 
                                 style={styles.buttonClicked}
                                 onPress={toggleMonitor}>
                                    <Text>Monitorar</Text>
                        </TouchableHighlight> 
                    </View>
                    <View>
                        <TouchableHighlight 
                                title="Button Access" 
                                style={styles.buttonClicked}
                                onPress={toggleCadastro}>
                                    <Text>Cadastros</Text>
                                    
                        </TouchableHighlight> 
                    </View>
                    <View>
                        <TouchableHighlight 
                                title="Button Access" 
                                style={styles.buttonClicked}
                                onPress={toggleHistorico}>
                                    <Text>Historicos</Text>
                        </TouchableHighlight> 
                    </View>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.container2}>
                {this.cadastro ? <Cadastros/> : <Monitor/> || this.historico ? <Historics/> : <Monitor/>}
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
    subititle: {
        alignItems: "flex-start"
    }, 
    buttonClicked: {
        //backgroundColor: clickedMonitor == true ? '#32B768' :  '#F5FAF7',
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
    }
})