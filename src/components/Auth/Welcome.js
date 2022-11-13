import { SafeAreaView, Image, TouchableOpacity, StyleSheet, Text, View, LogBox } from "react-native";
import global from "../../../global";
import logo from '../../assets/icons/logo.png'
import buttonInitial from '../../assets/icons/buttonInitial.png'

export default props => {

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ]);
    
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
        paddingTop: 100
    },
    title: {
        marginTop: 20,
        fontSize: 30
    }
})