import React from "react";
import { StyleSheet, SafeAreaView} from "react-native";

import Pet from './Pet';

export default props => {

    return(
        <SafeAreaView style={styles.container}>
            <Pet/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
})