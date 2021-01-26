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

const NameTag = () => {
	return <Text style={styles.nameTag}>NaxeCode#505050</Text>;
};

export default NameTag;

const styles = StyleSheet.create({
	nameTag: {
		fontSize: 18,
		color: "#EA8220",
		textShadowColor: "black",
		textShadowRadius: 4,
		textAlign: "center",
		position: "relative",
		right: -Dimensions.get("window").width / 6,
		top: -Dimensions.get("window").height / 6,
	},
});
