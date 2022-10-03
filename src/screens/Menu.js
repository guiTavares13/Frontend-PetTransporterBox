import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import global from "../../global";
import logo from '../assets/icons/logo_icon.png'

export default function Menu(){
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
                    <TouchableOpacity 
                            title="Button Access" 
                            style={styles.buttonNonClicked}>
                                <Text>Monitorar</Text>
                    </TouchableOpacity> 
                </View>
                <View>
                    <TouchableOpacity 
                            title="Button Access" 
                            style={styles.buttonNonClicked}>
                                <Text>Cadastros</Text>
                    </TouchableOpacity> 
                </View>
                <View>
                    <TouchableOpacity 
                            title="Button Access" 
                            style={styles.buttonNonClicked}>
                                <Text>Historicos</Text>
                    </TouchableOpacity> 
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