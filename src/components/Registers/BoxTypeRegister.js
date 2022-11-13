import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import global from "../../../global";
import { server, showError } from "../../common";
import AuthInput from "../Auth/AuthInput";
import "sessionstorage";

export default (props) => {
  var [
    initialState = {
      nome: "Modelo 1",
      altura: "1",
      largura: "1",
    },
    setState,
  ] = useState();

  var [
    state = {
      ...initialState,
    },
    setState,
  ] = useState();

  register = () => {
    var sessionstorage = require("sessionstorage");
    var data = sessionstorage.getItem("token");
    data = data.replace("\"","").replace("\"","")
    console.log(data);
    if (data == null) {
      alert("Seu login expirou!");
      return;
    }

    try {
      fetch(`${server}/caixaModel`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer " + data,
        },
        body: JSON.stringify({
          nome: state.nome,
          altura: state.altura,
          largura: state.largura,
        }),
      })
        .then((response) => {
          console.log("response", response);
          setState({ ...initialState });
        })
        .catch((response) => {
          showError(response);
        });
    } catch (err) {
      showError(err);
    }
  };

  return (
    <SafeAreaView style={global.container}>
      <View>
        <Text style={styles.title}>Cadastrar Modelo</Text>
      </View>
      <View style={styles.formContainer}>
        <AuthInput
          icon="dropbox"
          style={styles.input}
          placeholder="Nome do modelo"
          value={state.nome}
          onChangeText={(cName) =>
            setState((prevState) => ({ ...prevState, nome: cName }))
          }
        />
        <AuthInput
          icon="text-height"
          style={styles.input}
          placeholder="Altura"
          value={state.altura}
          onChangeText={(cAltura) =>
            setState((prevState) => ({ ...prevState, altura: cAltura }))
          }
        />
        <AuthInput
          icon="text-width"
          style={styles.input}
          placeholder="Largura"
          value={state.largura}
          onChangeText={(cLargura) =>
            setState((prevState) => ({ ...prevState, largura: cLargura }))
          }
        />
      </View>

      <TouchableOpacity title="Salvar" style={styles.button} onPress={register}>
        <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 30,
  },
  formContainer: {
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
    margin: 30,
  },
  input: {
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 40,
  },
});
