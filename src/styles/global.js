import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3EDFD5'
      },
    fontFamily: 'Lato',
    colors: {
        back: '#F4F0ED',
        textPrimary: '#F87556',
        textSecondary: '#2AB9C6',
        labels: '#57D0DB',
        borders: '#81DDE6',
    },
    form: {
      backgroundColor: "rgba(0,0,0, 0.8)",
      padding: 20,
      width: "90%",
      borderRadius: 10,
    },
    button: {
      backgroundColor: "#2F80ED",
      borderRadius: 10,
      paddingLeft: 70,
      paddingRight: 70,
      paddingTop: 15,
      paddingBottom: 15,
    },
    inputs: {
      marginTop: 10,
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 40,
    },
    textPrimary: {
      fontStyle: "bold",
      marginBottom: 50,
      color: "black",
      position: "relative",
      fontSize: 24,
    },
    textSecundary: {
      color: "#fff",
    }
})
