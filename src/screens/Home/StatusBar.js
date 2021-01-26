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
			raised
			theme={{
				roundness: 5,
				colors: {
					placeholder: "#8C8C8C",
					text: "#FF343F",
					primary: "transparent",
					underlineColor: "transparent",
					selectionColor: "transparent",
				},
			}}
			style={styles.status}
			mode="outlined"
			value={text}
			onChangeText={(text) => setText(text)}
		/>
	);
};

export default StatusBar;

const styles = StyleSheet.create({
	status: {
		backgroundColor: "rgba(45, 44, 45, 0.8)",
		textAlign: "center",
		position: "relative",
		width: Dimensions.get("window").width / 2,
		height: Dimensions.get("window").width / 12,
		right: -Dimensions.get("window").width / 2.4,
		top: -Dimensions.get("window").height / 6,
	},
});
