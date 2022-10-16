import { SafeAreaView, Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';

import global from "../../global";

import logo from '../assets/icons/logo.png'
import buttonInitial from '../assets/icons/buttonInitial.png'

export default props => {
    
    const firstAccess = true;

    const [fontsLoaded] = useFonts({
        'Jost-BoldItalic': require('../../assets/fonts/Jost-BoldItalic.ttf'),
        'Jost-Regular': require('../../assets/fonts/Jost-Regular.ttf')
    });
    
        return(
            <SafeAreaView style={global.container}>
                <Image style={{width:300, height:300}} source={logo}/>
                <Text style={styles.title}>Caixa Pet</Text>
                <View style={styles.subtitle}>
                    
                    <Text style={styles.avancar}>Monitore seu pet da forma rapida {'\n'} 
                    {'            '}   e inteligente</Text>
                    <TouchableOpacity 
                    title="" 
                    style={styles.btnAvancar}
                    onPress={() => {props.navigation.navigate('FirstAccess', {...props})}}>
                        <Image 
                            source={buttonInitial}/>
                    </TouchableOpacity>
                </View>
                
            </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
    btnAvancar: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        marginTop: 50,
        justifyContent: 'center'
    }, 
    avancar: {
        alignItems: 'center',
        paddingTop: 100,
        fontFamily: 'Jost-Regular'
    },
    title: {
        marginTop: 20,
        fontFamily: "Jost-BoldItalic",
        fontSize: 30
    },
    subtitle: {
       
    }
})