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

const StatusBar = () => {
	const [text, setText] = React.useState("");

	return (
		<TextInput
			style={styles.status}
			mode="outlined"
			label="Set Status :3c"
			value={text}
			onChangeText={(text) => setText(text)}
		/>
	);
};

export default Name;

const styles = StyleSheet.create({
	status: {
		textAlign: "center",
		position: "relative",
		width: Dimensions.get("window").width / 2,
		height: Dimensions.get("window").width / 12,
		right: -Dimensions.get("window").width / 2.4,
		top: -Dimensions.get("window").height / 6,
	},
});
