import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	StatusBar,
} from "react-native";
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

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { diary: true };
	}

	render() {
		let displayScreen;
		if (this.state.diary) displayScreen = <DiaryScreen />;
		else displayScreen = <AboutMeScreen />;

		return (
			<View style={styles.container}>
				<View style={styles.content}>
					<Button
						style={styles.navigationButtons}
						raised
						theme={{ roundness: 0 }}
						mode="contained"
						onPress={() => {
							if (!this.state.diary) {
								this.setState({ diary: true });
							}
						}}
					>
						<Text>Diary</Text>
					</Button>
					<Button
						style={styles.navigationButtons}
						raised
						theme={{ roundness: 0 }}
						mode="contained"
						onPress={() => {
							if (this.state.diary) {
								this.setState({ diary: false });
							}
						}}
					>
						<Text>About Me</Text>
					</Button>
				</View>
				<View style={styles.content}>{displayScreen}</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		marginTop: 10,
		marginLeft: 0,
	},

	content: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 0,
		marginLeft: 0,
	},

	navigationButtons: {
		width: 150,
	},
});
