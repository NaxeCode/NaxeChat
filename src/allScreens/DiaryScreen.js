import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class DiaryScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>This Diary is private :P</Text>
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
