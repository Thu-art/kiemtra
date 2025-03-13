import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("HomeTab")}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Scanner View */}
      <View style={styles.scanner}>
        <Image source={require("../assets/juice.png")} style={styles.image} />
      </View>

      {/* Product Info */}
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Lauren’s Orange Juice</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5" },
  backButton: { position: "absolute", top: 50, left: 20, padding: 10 },
  scanner: { alignItems: "center", marginVertical: 20 },
  image: { width: 200, height: 300, resizeMode: "contain" },
  productInfo: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "80%", marginTop: 20 },
  productName: { fontSize: 18, fontWeight: "bold" },
  addButton: { backgroundColor: "#4A6CFF", padding: 10, borderRadius: 5 },
});

export default ScanScreen;
