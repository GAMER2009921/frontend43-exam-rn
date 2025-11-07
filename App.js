import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={["#012c87", "#0048ba"]} style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.row}>
          <Ionicons name="location-outline" size={22} color="#fff" />
          <Text style={styles.location}>Fortaleza</Text>
          <Ionicons
            name="chevron-down-outline"
            size={18}
            color="#fff"
            style={{ marginLeft: 4 }}
          />
        </View>
        <Ionicons name="notifications-outline" size={22} color="#fff" />
      </View>

      <Text style={styles.temperature}>28°</Text>
      <Text style={styles.precip}>Precipitations</Text>
      <Text style={styles.minmax}>Max.: 31° Min.: 25°</Text>

      <View style={styles.infoBar}>
        <View style={styles.infoItem}>
          <Ionicons
            name="water-outline"
            size={20}
            color="#fff"
            style={styles.infoIcon}
          />
          <Text style={styles.infoValue}>6%</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons
            name="thermometer-outline"
            size={20}
            color="#fff"
            style={styles.infoIcon}
          />
          <Text style={styles.infoValue}>90%</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons
            name="navigate-outline"
            size={20}
            color="#fff"
            style={styles.infoIcon}
          />
          <Text style={styles.infoValue}>19 km/h</Text>
        </View>
      </View>

      <View style={styles.forecast}>
        <View style={styles.forecastHeader}>
          <Text style={styles.forecastTitle}>Today</Text>
          <Text style={styles.forecastDate}>Mar, 9</Text>
        </View>

        <View style={styles.hourly}>
          <View style={styles.hourItem}>
            <Text style={styles.hourTemp}>29°C</Text>
            <Ionicons name="partly-sunny-outline" size={26} color="#fff" />
            <Text style={styles.hourTime}>15.00</Text>
          </View>

          <View style={styles.hourItem}>
            <Text style={styles.hourTemp}>26°C</Text>
            <Ionicons name="partly-sunny-outline" size={26} color="#fff" />
            <Text style={styles.hourTime}>16.00</Text>
          </View>

          <View style={[styles.hourItem, styles.hourActive]}>
            <Text style={styles.hourTemp}>24°C</Text>
            <Ionicons name="cloud-outline" size={26} color="#fff" />
            <Text style={styles.hourTime}>17.00</Text>
          </View>

          <View style={styles.hourItem}>
            <Text style={styles.hourTemp}>23°C</Text>
            <Ionicons name="cloudy-night-outline" size={26} color="#fff" />
            <Text style={styles.hourTime}>18.00</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "SFProDisplay-Medium",
    marginLeft: 5,
  },
  temperature: {
    color: "#fff",
    fontSize: 80,
    fontFamily: "SFProDisplay-Bold",
    textAlign: "center",
    marginTop: 130, 
  },
  precip: {
    color: "#b8c6ff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "SFProDisplay-Regular",
    marginTop: 5,
  },
  minmax: {
    color: "#b8c6ff",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20, 
    fontFamily: "SFProDisplay-Regular",
  },
  infoBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    paddingVertical: 20, 
    marginBottom: 35, 
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  infoIcon: {
    marginRight: 6,
  },
  infoValue: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "SFProDisplay-Medium",
  },
  forecast: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 25,
    padding: 18, 
    marginTop: 10,
  },
  forecastHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  forecastTitle: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "SFProDisplay-Bold",
  },
  forecastDate: {
    color: "#b8c6ff",
    fontFamily: "SFProDisplay-Regular",
  },
  hourly: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hourItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 30, 
    borderRadius: 15,
  },
  hourActive: {
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  hourTemp: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "SFProDisplay-Medium",
  },
  hourTime: {
    color: "#b8c6ff",
    fontSize: 13,
    marginTop: 4,
    fontFamily: "SFProDisplay-Regular",
  },
});

