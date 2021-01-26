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
	static navigationOptions = ({ navigation }) => ({
		title: "Naxe Chat App",
	});

	render() {
		let deviceWidth = Dimensions.get("window").width;
		let displayScreen;
		if (this.state.diary) {
			displayScreen = <DiaryScreen />;
		} else {
			displayScreen = <AboutMeScreen />;
		}
		return (
			<View>
				<Bar navigation={this.props.navigation} />
				<ProfileCard />
				<StatusBar />
				<NexesBar />
				<Button
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
				{displayScreen}
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
