import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
  Keyboard,
  Platform,
} from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { useState, useRef } from "react";
import global from "../../../global";
import "sessionstorage";
import AuthInput from "./AuthInput";
import Regex from "../regex/Regex";
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
          console.log(json.token);
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
      <Text style={styles.text}>Caixa Pet</Text>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>
          {state.stageNew ? "Crie sua conta" : "Informe seus dados"}
        </Text>
        {state.stageNew && (
          <AuthInput
            icon="user"
            style={styles.input}
            placeholder="Primeiro nome"
            value={state.name}
            onChangeText={(cName) =>
              setState((prevState) => ({ ...prevState, nome: cName }))
            }
          />
        )}
        {state.stageNew && (
          <AuthInput
            icon="user"
            style={styles.input}
            placeholder="Último nome"
            value={state.lastName}
            onChangeText={(cLastName) =>
              setState((prevState) => ({ ...prevState, lastName: cLastName }))
            }
          />
        )}
        <AuthInput
          icon="at"
          style={styles.input}
          placeholder="E-mail"
          value={state.email}
          onChangeText={(cEmail) =>
            setState((prevState) => ({ ...prevState, email: cEmail }))
          }
        />
        {state.stageNew && (
          <AuthInput
            icon="id-card-o"
            style={styles.input}
            placeholder="CPF"
            value={state.documento}
            onChangeText={(cDocumento) =>
              setState((prevState) => ({ ...prevState, documento: cDocumento }))
            }
          />
        )}
        {state.stageNew && (
          <AuthInput
            icon="phone"
            style={styles.input}
            placeholder="Celular"
            value={state.phone}
            onChangeText={(cCelular) =>
              setState((prevState) => ({ ...prevState, phone: cCelular }))
            }
          />
        )}
        {/* <View style={styles.container}>
                    <Icon name="phone" size={20} style={styles.icon} />
                    <TextInputMask icon='phone' type="datetime" style={styles.input} options={{maskType: 'BRL', withDDD: true, dddMask: '(99)'}}/>
                </View> */}

        {state.stageNew && (
          // <View style={styles.dateBirthBar}>
          //     <TouchableOpacity
          //         title="" onPress={showDatepicker}
          //         style={styles.btnAvancar}>
          //         <Image style={{width:30, height:30}}
          //             source={calendarIcon}/>
          //     </TouchableOpacity>
          //     <Text>{state.nascimento}</Text>
          //     {state.dateTimeShow &&
          //         <DateTimePicker value={date} title="Show date picker!" />
          //     }
          // </View>
          <AuthInput
            icon="calendar"
            style={styles.input}
            placeholder="Data de Nascimento"
            value={state.nascimento}
            onChangeText={(cNascimento) =>
              setState((prevState) => ({
                ...prevState,
                nascimento: cNascimento,
              }))
            }
          >
            {/* {dateTimeShow &
                                <DateTimePicker returnKeyType="next" blurOnSubmit={false} onSubmitEditing={() => {senhaRef.current.focus();}}
                                 value={date} title="Show date picker!" />
                            } */}
          </AuthInput>
        )}

        <AuthInput
          icon="lock"
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={state.password}
          onChangeText={(cPassword) =>
            setState((prevState) => ({ ...prevState, password: cPassword }))
          }
        />
        {/* {state.stageNew &&
                    <AuthInput icon='asterisk' style={styles.input}  placeholder="Confirmar senha" secureTextEntry={true}
                    />
                } */}
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
        style={styles.buttonAccess}
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
  },
  formContainer: {
    backgroundColor: "rgba(0,0,0, 0.8)",
    padding: 20,
    width: "90%",
    borderRadius: 10,
  },
  buttonAccess: {
    backgroundColor: "#2F80ED",
    borderRadius: 10,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 15,
    paddingBottom: 15,
  },
  subtitle: {
    color: "#fff",
  },
  text: {
    fontStyle: "bold",
    marginBottom: 50,
    color: "#52665A",
    position: "relative",
    fontSize: 24,
  },
  input: {
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 40,
  },
  dateBirthBar: {
    flexDirection: "row",
    alignItems: "stretch",
  },
});
