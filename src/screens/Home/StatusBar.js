import React, { useRef } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class StatusBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
	}

	componentDidMount() {
		AsyncStorage.getItem("text")
			.then((value) => {
				if (value != null) this.setState({ text: value });
				else this.setState({ text: "" });
			})
			.done();
	}

	render() {
		let text = this.state.text;
		return (
			<View>
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
					onBlur={() => {
						storeData(this.state.text);
						getData();
					}}
					onChangeText={(text) => this.setState({ text })}
				/>
			</View>
		);
	}
}

const storeData = async (value) => {
	try {
		await AsyncStorage.setItem("text", value);
	} catch (e) {
		// saving error
	}
};

const getData = async () => {
	try {
		const value = await AsyncStorage.getItem("text");
		if (value !== null) {
			// value previously stored
			console.log(value);
			return value;
		}
	} catch (e) {
		// error reading value
	}
};

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
