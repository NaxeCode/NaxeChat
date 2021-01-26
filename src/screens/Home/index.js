import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Bar from "../../allScreens/AppyBar";
import {
	Avatar,
	Button,
	Card,
	Title,
	Paragraph,
	TextInput,
	Appbar,
} from "react-native-paper";
import DiaryScreen from "../../allScreens/DiaryScreen";
import AboutMeScreen from "../../allScreens/AboutMeScreen";
import Name from "./Name";
import NameTag from "./NameTag";
import NexesBar from "./NexesBar";
import ProfileCard from "./ProfileCard";
import DisplayScreen from "./DisplayScreen";
import StatusBar from "./StatusBar";

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	static navigationOptions = ({ navigation }) => ({
		title: "Naxe Chat App",
	});

	render() {
		let deviceWidth = Dimensions.get("window").width;

		return (
			<View>
				<Bar navigation={this.props.navigation} />
				<ProfileCard />
				<NexesBar />
				<DisplayScreen />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	contentBelow: {
		fontSize: 50,
	},

	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
	},
	buttons: {
		marginTop: 16,
		flexDirection: "column",
	},
	title: {
		marginTop: 16,
		marginLeft: 16,
		fontSize: 16,
	},
	nameInput: {
		height: 16 * 2,
		margin: 16,
		paddingHorizontal: 16,
		borderColor: "#111111",
		borderWidth: 1,
		fontSize: 16,
	},
	buttonText: {
		marginLeft: 16,
		fontSize: 42,
	},
});
