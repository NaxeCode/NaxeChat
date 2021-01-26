import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class AboutMeScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>There's not much to know lol</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 150,
		marginLeft: 0,
	},

	text: {
		fontSize: 25,
	},
});
