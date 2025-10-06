import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      <Text style={styles.pageTitle}>Igor Gabriel Lira Uchôa</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Foto.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.table}>
        <Text style={styles.caption}>Mini-Biografia</Text>

        <View style={styles.rowFull}>
          <Text style={styles.cellFull}>
            Nasci no estado de Pernambuco na cidade de Recife, gosto de
            Quebra-Cabeças, Video-Games e Ler, sou mais reservado e às vezes me
            perco nos meus pensamentos, nunca viajei para fora do brasil,
            mas tenho interrese em viajar para a italia e aproveitar a culinaria local.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff", 
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    overflow: "hidden",
  },
  caption: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  rowHeader: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
  },
  header: {
    fontWeight: "bold",
    backgroundColor: "#ddd",
  },
  rowFull: {
    borderTopWidth: 1,
    borderColor: "#000",
  },
  cellFull: {
    padding: 10,
    textAlign: "center",
  },
});
