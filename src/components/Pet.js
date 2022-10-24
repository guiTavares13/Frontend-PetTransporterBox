import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, LogBox} from "react-native";
import {showError, server} from '../common'

export default props => {

    LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(
        () => {
            fetch(`${server}/pet`)
            .then((resp)=>resp.json())
            .then((json)=> setData(json))
            .catch(()=> (console.log('Deu ruim')))
            .finally(() => setLoading(false))
        }, []
)
    return(
        <>
        <View style={styles.container}>
            {
                loading ? <ActivityIndicator/> : (
                    <FlatList
                    data={data}
                    keyExtractor={({id}, index) => id}
                    renderItem={({item}) => (
                        <Text>{item.nome} - Saaaaaaaaaaaalve {item.tipo}</Text>
                        
                    )}/>
                )
            }
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})