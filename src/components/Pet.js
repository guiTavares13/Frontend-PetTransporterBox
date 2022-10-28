import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, LogBox, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {showError, server} from '../common'

import BtnVisualizeAll from '../components/BtnVisualizeAll'

export default props => {

    LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

    /*const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(
        () => {
            fetch(`${server}/pet`)
            .then((resp)=>resp.json())
            .then((json)=> setData(json))
            .catch(()=> (console.log('Deu ruim')))
            .finally(() => setLoading(false))
        }, [])*/

    return(
        <>
        <SafeAreaView>
            <View style={styles.container}>
            {
                /*  loading ? <ActivityIndicator/> : (
                        <FlatList
                        data={data}
                        keyExtractor={({id}, index) => id}
                        renderItem={({item}) => (
                            <Text>{item.nome} - Saaaaaaaaaaaalve {item.tipo}</Text>
                            
                        )}/>
                    )*/
                }
                <Text>Lista de Pets Cadastrados</Text>
                <View style={styles.pet}>
                    <View style={styles.itensPetBar}>
                        <Text>Img</Text>
                        <Text>Name</Text>
                        <Text>Tipo</Text>
                    </View>
                </View>
                <View style={styles.pet}>
                    <View style={styles.itensPetBar}>
                        <Text>Img</Text>
                        <Text>Name</Text>
                        <Text>Tipo</Text>
                    </View>
                </View>
                <View style={styles.pet}>
                    <View style={styles.itensPetBar}>
                        <Text>Img</Text>
                        <Text>Name</Text>
                        <Text>Tipo</Text>
                    </View>
                </View>
                <View style={styles.pet}>
                    <View style={styles.itensPetBar}>
                        <Text>Img</Text>
                        <Text>Name</Text>
                        <Text>Tipo</Text>
                    </View>
                </View>
                <View style={styles.pet}>
                    <View style={styles.itensPetBar}>
                        <Text>Img</Text>
                        <Text>Name</Text>
                        <Text>Tipo</Text>
                    </View>
                </View>
                <View style={styles.pet}>
                    <View style={styles.itensPetBar}>
                        <Text>Img</Text>
                        <Text>Name</Text>
                        <Text>Tipo</Text>
                    </View>
                </View>
                <View style={styles.pet}>
                    <View style={styles.itensPetBar}>
                        <Text>Img</Text>
                        <Text>Name</Text>
                        <Text>Tipo</Text>
                    </View>
                </View>
                <View style={styles.pet}>
                    <View style={styles.itensPetBar}>
                        <Text>Img</Text>
                        <Text>Name</Text>
                        <Text>Tipo</Text>
                    </View>
                </View>
                <View style={styles.pet}>
                    <View style={styles.itensPetBar}>
                        <Text>Img</Text>
                        <Text>Name</Text>
                        <Text>Tipo</Text>
                    </View>
                </View>
                <View style={styles.pet}>
                    <View style={styles.itensPetBar}>
                        <Text>Img</Text>
                        <Text>Name</Text>
                        <Text>Tipo</Text>
                    </View>
                </View>
            </View>

            <BtnVisualizeAll/>
        </SafeAreaView>
        
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }, 
    pet: {
        width: 380,
        height: 55,
        alignItems: 'stretch',
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        margin: 10
    }, 
    itensPetBar: {
        position: "relative",
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 15
    }
})