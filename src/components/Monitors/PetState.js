import React from "react";
import { Text, View, StyleSheet, LogBox, SafeAreaView } from "react-native";
import { useState, useCallback, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontistoIcons from "react-native-vector-icons/Fontisto";
import OcticonsIcons from "react-native-vector-icons/Octicons";

import { showError, server, showSucess } from "../../common";

import PetInfo from "./PetInfo";

export default (props) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  var [
    initialState = {
      pet: [
        {
          name: "",
          catedory: "",
          breed: "",
          age: "",
          lastMeasure: "",
          openDoor: "",
          trip: "",
          box: "",
          statePet: "",
          temp: "",
          location: "",
        },
      ],
    },
    setState,
  ] = useState();

  var [
    state = {
      ...initialState,
    },
    setState,
  ] = useState();

  // ---------------------- <Lista Pets> --------------------------
  const [tripOpen, setTripOpen] = useState(false);
  const [tripValue, setTripValue] = useState([]);
  const [tripItems, setTripItems] = useState([]);

  useEffect(() => {
    listPets();
  }, []);


  // useEffect(() => {
  //   getMeasure();
  // }, [state.tripId != ""]);

  listPets = () => {
    var responseListpets;
    var sessionstorage = require("sessionstorage");
    var data = sessionstorage.getItem("token");
    data = data.replace('"', "").replace('"', "");

    if (data == null) {
      alert("Seu login expirou!");
      return;
    } else {
      try {
        fetch(`${server}/pet/`, {
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
            responseListpets = json.pets;
            console.log("RECEBEU VALORES PET");
            console.log(json);

            const aux = [];

            responseListpets.forEach((element) => {
              aux.push({ value: element.pet_id, label: element.pet_nome });
            });

            setTripItems(aux);
          });
      } catch (err) {
        showError(err);
      }
    }
  };
  //---------------------- </Lista Pets> --------------------------

  //---------------------- <Lista as medidas> --------------------------
  getMeasure = () => {
    var responseGetMeasure;
    var sessionstorage = require("sessionstorage");
    var data = sessionstorage.getItem("token");
    data = data.replace('"', "").replace('"', "");

    if (data == null) {
      alert("Seu login expirou!");
      return;
    } else {
      try {
        fetch(`${server}/measure/:${state.tripId}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            responseGetMeasure = json;
            // console.log(responseGetMeasure);
            // setState({ responseGetMeasure });
          });
      } catch (err) {
        showError(err);
      }
    }
  };
  //---------------------- </Lista as medidas> ----------------------

  //---------------------- <Icones> --------------------------------
  const petType = <MaterialIcons name="pets" size={20} />;
  const dogIcon = <FontAwesome5Icons name="dog" size={20} />;
  const breedIcon = <FontistoIcons name="blood-drop" size={20} />;
  const yearsOldIcon = <OcticonsIcons name="number" size={20} />;
  const dateIcon = <FontistoIcons name="date" size={20} />;
  const checkDoor = <FontAwesome5Icons name="check-circle" size={20} />;
  const tripIcon = <FontAwesome5Icons name="route" size={20} />;
  const boxIcon = <FontAwesome5Icons name="dropbox" size={20} />;
  const stateIcon = <MaterialIcons name="sick" size={20} />;
  const tempIcon = <FontAwesome5Icons name="temperature-high" size={20} />;
  const locationIcon = <FontAwesome5Icons name="map-marker-alt" size={20} />;
  //---------------------- </Icones> --------------------------------

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.dropDown}>
          <DropDownPicker
            placeholder="Escolha a viagem"
            open={tripOpen}
            value={tripValue}
            items={tripItems}
            setOpen={setTripOpen}
            setValue={setTripValue}
            setItems={setTripItems}
            onPress={atualiza}
            onChangeValue={(value) =>
              setState((prevState) => ({ ...prevState, pet: value.toString() }))
            }
          />
        </View>
        <Text style={styles.title}>Estado do pet</Text>
        <View>
          <PetInfo />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerButtons: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2F80ED",
    borderRadius: 10,
    margin: 30,
    width: "20%",
    alignItems: "center",
    paddingVertical: 10,
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    margin: 20,
    fontSize: 20,
  },
  dropDown: {
    marginTop: 50,
    width: "90%",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
