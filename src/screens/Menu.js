import React , { useState, useEffect } from "react";
import { View, Text, Image, SafeAreaView, StyleSheet, Pressable, TouchableHighlight } from "react-native";
import styled from 'styled-components';

import global from "../../global";
import logo from '../assets/icons/logo_icon.png'

import Monitor from '../components/Monitor'

export default function Menu(){

    var clickedMonitor, clickedRegis, clickedHitoric;
    
    function execComp(props) {
        console.log(typeof(props))
        const styleButtonClicked = StyleSheet.create({
            buttonClicked: {
                backgroundColor: '#32B768',
                borderRadius: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10
            }, 
        });

        if(props == 'historic'){
            return styleButtonClicked, <Monitor/>
        }

        return styleButtonClicked;

    }

    return(
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
                             onPress={execComp}>
                                <Text>Monitorar</Text>
                    </TouchableHighlight> 
                </View>
                <View>
                    <TouchableHighlight 
                            title="Button Access" 
                            style={styles.buttonNonClicked}
                            onPress={execComp}>
                                <Text>Cadastros</Text>
                    </TouchableHighlight> 
                </View>
                <View>
                    <TouchableHighlight 
                            title="Button Access" 
                            style={styles.buttonNonClicked}
                            onPress={execComp('historic')}>
                                <Text>Historicos</Text>
                    </TouchableHighlight> 
                </View>
            </SafeAreaView>
        </SafeAreaView>
        
    </>

    );
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
    }
})


const stylebuttonsMenu = StyleSheet.create({
    buttom: {
        backgroundColor: '#F5FAF7',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10
    }
})