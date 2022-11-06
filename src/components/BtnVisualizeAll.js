import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Image} from 'react-native'

import logoMonitorPet from '../assets/icons/monitor-pet.png'

export default props => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.button}>
                    <Image style={{width:30, height:30, margin: 10}} source={logoMonitorPet}/>
                    <Text>Visualziar Todos</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        
        flexGrow: 0.2
        
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems:  "center",
        backgroundColor: '#FFFF',
        width: '100%',
    }
})