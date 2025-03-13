import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello</Text>
      <Text style={styles.username}>Thư</Text>
      <View style={styles.cardContainer}>
        
        {/* Scan new */}
        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconContainer, { backgroundColor: "#E8EAFE" }]}>
            <Ionicons name="scan" size={30} color="#4A6CFF" />
          </View>
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.subText}>Scanned 483</Text>
        </TouchableOpacity>

        {/* Counterfeits */}
        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconContainer, { backgroundColor: "#FFE7E6" }]}>
            <Ionicons name="alert-circle" size={30} color="#FF3B30" />
          </View>
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.subText}>Counterfeited 32</Text>
        </TouchableOpacity>

        {/* Success */}
        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconContainer, { backgroundColor: "#D4F4E6" }]}>
            <Ionicons name="checkmark-circle" size={30} color="#2ECC71" />
          </View>
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.subText}>Checkouts 8</Text>
        </TouchableOpacity>

        {/* Directory */}
        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconContainer, { backgroundColor: "#E0F2FF" }]}>
            <Ionicons name="calendar-outline" size={30} color="#4A90E2" />
          </View>
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.subText}>History 26</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  username: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 100,
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: 12,
    color: "#666",
  },
});

