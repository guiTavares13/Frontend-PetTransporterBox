import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";

import global from "../../global";
import logo from '../assets/icons/logo_icon.png'

export default function Menu(){
    return(
        <>
        <SafeAreaView style={styles.container}>
            <View style={{height: 100, backgroundColor: 'steelblue'}}>
                <Text>Olá,</Text>
                <Text>Fernando</Text>
            </View>
            <View style={{height: 100, backgroundColor: 'steelblue'}}>
                <Image style={{width:50, height:50}} source={logo}/>
            </View>
        </SafeAreaView>
        <View style={styles.subititle}>
            <Text>Vamos <Text>monitorar</Text> seu anumalzinho {'\n'}
            ou <Text>cadastrar</Text> algo?
            </Text>
        </View>
        <View>
            <Text>Monitorar | Cadastros | Historicos </Text>
        </View>
    </>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    subititle: {
        alignItems: "flex-start"
    }
})