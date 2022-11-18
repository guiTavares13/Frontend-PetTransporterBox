import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Picker,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import { useState, useCallback } from "react";
import global from "../../styles/global";
import { server, showError } from "../../common";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import AuthInput from "../Auth/AuthInput";

export default (props) => {
  var [
    initialState = {
      petId: "",
      boxId: "",
      date: "",
    },
    setState,
  ] = useState();

  var [
    state = {
      ...initialState,
    },
    setState,
  ] = useState();

  // ----------------- <Pet> -------------------------------
  const [petOpen, setPetOpen] = useState(false);
  const [petValue, setPetValue] = useState([]);
  const [petItems, setPetItems] = useState([
  ]);

  const onPetOpen = useCallback(() => {
    setPetOpen(false);
  }, []);

  listPet = () => {
    var responseGetPets;
    var sessionstorage = require("sessionstorage");
    var data = sessionstorage.getItem("token");
    data = data.replace('"', "").replace('"', "");
    if (data == null) {
      alert("Seu login expirou!");
    } else {
      try {
        fetch(`${server}/pet`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + data,
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            responseGetPets = json.pets; 
              setPetItems(responseGetPets => ({
               value: responseGetPets.pet_id}))
          });
      } catch (err) {
        showError(err);
      }
    }
  };
  //---------------------- </Pet> --------------------------

  // ---------------------- <Box> --------------------------
  const [boxOpen, setBoxOpen] = useState(false);
  const [boxValue, setBoxValue] = useState([]);
  const [boxItems, setBoxItems] = useState([]);

  const onBoxOpen = useCallback(() => {
    setBoxOpen(false);
  }, []);

  listBox = () => {
    console.log("1");
    try {
      fetch(`${server}/caixaModelAll`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        setBoxItems(response);
      });
    } catch (err) {
      showError(err);
    }
  };
  //---------------------- </Box> --------------------------

  register = () => {
    try {
      fetch(`${server}/pet`, {
        method: "POST",
        body: JSON.stringify({
          petId: state.petId,
          caixaID: state.name,
          date: state.date,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch (err) {
      showError(err);
    }
  };

  return (
    <SafeAreaView style={global.container}>
      <View>
        <Text style={styles.title}>Cadastrar Viagem</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.dropDown}>
          <DropDownPicker
            placeholder="Selecione o pet"
            open={petOpen}
            value={petValue}
            items={petItems}
            setOpen={setPetOpen}
            setValue={setPetValue}
            setItems={setPetItems}
            onPress={listPet}
            onChangeValue={(value) =>
              setState((prevState) => ({
                ...prevState,
                petId: value.toString(),
              }))
            }
            onOpen={onPetOpen}
          />
        </View>
        <View style={styles.dropDown}>
          <DropDownPicker
            placeholder="Selecione a caixa"
            open={boxOpen}
            value={boxValue}
            items={boxItems}
            setOpen={setBoxOpen}
            setValue={setBoxValue}
            setItems={setBoxItems}
            onPress={listBox}
            onChangeValue={(value) =>
              setState((prevState) => ({
                ...prevState,
                boxId: value.toString(),
              }))
            }
            onOpen={onBoxOpen}
          />
        </View>

        <AuthInput
          icon="calendar"
          style={styles.input}
          placeholder="Data da viagem"
          value={state.date}
          onChangeText={(cNascimento) =>
            setState((prevState) => ({ ...prevState, date: cNascimento }))
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
  input: {
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 40,
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
  dateBirthBar: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  dropDown: {
    marginTop: 10,
  },
});
