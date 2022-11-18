import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
  Platform,
} from "react-native";
import { useState } from "react";
import global from "../../styles/global";
import "sessionstorage";
import Authinputs from "./AuthInput";
import { server, showError } from "../../common";

export default (props) => {
  //const [mode, setMode] = useState('date');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dateTimeShow, setShowDate] = useState(false);

  var [
    initialState = {
      name: "",
      lastName: "",
      email: "gui@teste.com",
      documento: "",
      phone: "",
      nascimento: "",
      password: "123",
      stageNew: false,
    },
    setState,
  ] = useState();

  var [
    state = {
      ...initialState,
    },
    setState,
  ] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    useState({ ...prevState, nascimento: fDate });
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    setShowDate({ dateTimeShow: !dateTimeShow });

    if (dateTimeShow) {
      showMode("date");
    }
  };

  signinOrSignup = () => {
    if (state.stageNew) {
      signup();
    } else {
      signin();
    }
  };

  signup = () => {
    try {
      fetch(`${server}/user`, {
        method: "POST",
        body: JSON.stringify({
          nome: state.nome,
          documento: state.documento,
          lastName: state.lastName,
          email: state.email.toLocaleLowerCase(),
          phone: state.phone,
          nascimento: state.nascimento,
          password: state.password,
          userStatus: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json), setState({ ...initialState }))
        .catch((json) => {
          showError(json);
        });
    } catch (err) {
      showError(err);
    }
  };

  signin = () => {
    try {
      fetch(`${server}/user/login`, {
        method: "POST",
        body: JSON.stringify({
          email: state.email,
          senha: state.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          var sessionstorage = require("sessionstorage");
          sessionstorage.setItem("token", JSON.stringify(json.token));
          console.log(json);
          if (sessionstorage.getItem("token")) {
            props.navigation.navigate("Menu", json.user);
          } else {
            showError(json);
          }
        });
    } catch (err) {
      showError(err);
    }
  };

  return (
    <SafeAreaView style={global.container}>
      <Text style={global.textPrimary}>Smart Pet Box</Text>
      <View style={global.form}>
        <Text style={global.textSecundary}>
          {state.stageNew ? "Crie sua conta" : "Informe seus dados"}
        </Text>
        {state.stageNew && (
          <Authinputs
            icon="user"
            style={global.inputs}
            placeholder="Primeiro nome"
            value={state.name}
            onChangeText={(cName) =>
              setState((prevState) => ({ ...prevState, nome: cName }))
            }
          />
        )}
        {state.stageNew && (
          <Authinputs
            icon="user"
            style={global.inputs}
            placeholder="Último nome"
            value={state.lastName}
            onChangeText={(cLastName) =>
              setState((prevState) => ({ ...prevState, lastName: cLastName }))
            }
          />
        )}
        <Authinputs
          icon="at"
          style={global.inputs}
          placeholder="E-mail"
          value={state.email}
          onChangeText={(cEmail) =>
            setState((prevState) => ({ ...prevState, email: cEmail }))
          }
        />
        {state.stageNew && (
          <Authinputs
            icon="id-card-o"
            style={global.inputs}
            placeholder="CPF"
            value={state.documento}
            onChangeText={(cDocumento) =>
              setState((prevState) => ({ ...prevState, documento: cDocumento }))
            }
          />
        )}
        {state.stageNew && (
          <Authinputs
            icon="phone"
            style={global.inputs}
            placeholder="Celular"
            value={state.phone}
            onChangeText={(cCelular) =>
              setState((prevState) => ({ ...prevState, phone: cCelular }))
            }
          />
        )}

        {state.stageNew && (
          <Authinputs
            icon="calendar"
            style={global.inputs}
            placeholder="Data de Nascimento"
            value={state.nascimento}
            onChangeText={(cNascimento) =>
              setState((prevState) => ({
                ...prevState,
                nascimento: cNascimento,
              }))
            }
          ></Authinputs>
        )}

        <Authinputs
          icon="lock"
          style={global.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          value={state.password}
          onChangeText={(cPassword) =>
            setState((prevState) => ({ ...prevState, password: cPassword }))
          }
        />
      </View>
      <TouchableOpacity
        onPress={() => setState({ stageNew: !state.stageNew })}
        style={{ padding: 10 }}
      >
        <Text>
          {state.stageNew ? "Já possui conta?" : "Ainda não possui conta?"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Button Access"
        style={global.button}
        onPress={signinOrSignup}
      >
        <Text style={styles.textButtonAccess}>
          {state.stageNew ? "Registrar" : "Entrar"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: 40,
    backgroundColor: "#EEE",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "#333",
    marginLeft: 20,
  }
});
