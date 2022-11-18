import React from "react";
import { Text, View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { useState, useCallback, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import MapView, { Callout, Marker } from "react-native-maps";
import "sessionstorage";
import { showError, server } from "../../common";

export default (props) => {
  var [
    initialState = {
      tripId: "",
      date: "",
      openDoor: "",
      petState: "",
      location: [
        {
          latitude: "",
          longitude: "",
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

  // -------------- <Retorna Localização e preenche o MapView> ------------//

  useEffect(() => {
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
          fetch(`${server}/measure/:${tripId}`, {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((json) => {
              responseGetMeasure = json.measure;
              console.log(responseGetMeasure);
              setState({responseGetMeasure});
            });
        } catch (err) {
          showError(err);
        }
      }
    };
  }, [state.tripId != ""]);

  // -------------- </Retorna Localização e preenche o MapView> ------------//

  // ---------------------- <Lista Pets> --------------------------
  const [tripsOpen, setTripsOpen] = useState(false);
  const [tripsValue, setTripsValue] = useState([]);
  const [tripsItems, setTripsItems] = useState([]);

  const onTripsOpen = useCallback(() => {
    setTripsOpen(false);
  }, []);

  getListTrips = () => {
    var responseGetListTrips;
    var sessionstorage = require("sessionstorage");
    var data = sessionstorage.getItem("token");
    data = data.replace('"', "").replace('"', "");

    if (data == null) {
      alert("Seu login expirou!");
      return;
    } else {
      try {
        fetch(`${server}/trip/`, {
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
            responseGetListTrips = json;
            console.log(responseGetListTrips);
            setPetsItems(responseGetListTrips);
          });
      } catch (err) {
        showError(err);
      }
    }
  };
  //---------------------- </Lista Pets> --------------------------

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.dropDown}>
          <DropDownPicker
            placeholder="Selecione a viagem"
            open={tripsOpen}
            value={tripsValue}
            items={tripsItems}
            setOpen={setTripsOpen}
            setValue={setTripsValue}
            setItems={setTripsItems}
            onPress={getListTrips}
            onChangeValue={(value) =>
              setState((prevState) => ({
                ...prevState,
                tripId: value.id.toString(),
              }))
            }
            onOpen={onTripsOpen}
          />
        </View>
        <View>
          <MapView
            style={styles.map}
            region={{
              latitude: state.location.latitude,
              longitude: state.location.longitude,
            }}
          >
            <Marker
              coordinate={{
                latitude: state.location.latitude,
                longitude: state.location.longitude,
              }}
              pinColor="black"
            />
          </MapView>
          {/* <Callout>
                        <Text>Aqui</Text>
                    </Callout> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    marginTop: 10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  dropDown: {
    marginTop: 50,
    width: "90%",
  },
});
