import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import {
	Avatar,
	Button,
	Card,
	Title,
	Paragraph,
	TextInput,
	Appbar,
} from "react-native-paper";

const Name = () => {
	return <Text style={styles.name}>Naxe</Text>;
};

export default Name;

const styles = StyleSheet.create({
	name: {
		fontSize: 25,
		color: "#FFF",
		textShadowColor: "black",
		textShadowRadius: 4,
		textAlign: "center",
		position: "relative",
		right: -Dimensions.get("window").width / 6,
		top: -Dimensions.get("window").height / 6,
	},
});
