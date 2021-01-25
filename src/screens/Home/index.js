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

const AvatarIcon = () => {
	return (
		<Image style={styles.avatar} source={require("../../../assets/boy.jpg")} />
	);
};

const BackgroundBanner = () => {
	return (
		<View style={styles.banner}>
			<Card>
				<Card.Cover source={{ uri: "https://picsum.photos/700" }} />
			</Card>
		</View>
	);
};

const Btns = () => {
	return (
		<View style={styles.butt}>
			<Button mode="contained" onPress={() => console.log("Pressed")}>
				<Text style={styles.buttTxt}>Add Friend</Text>
			</Button>
			<Button mode="contained" onPress={() => console.log("Pressed")}>
				<Text style={styles.buttTxt}>Message</Text>
			</Button>
			<Button mode="contained" onPress={() => console.log("Pressed")}>
				<Text style={styles.buttTxt}>Whisper</Text>
			</Button>
		</View>
	);
};

const Name = () => {
	return <Text style={styles.name}>Naxe</Text>;
};

const NameTag = () => {
	return <Text style={styles.nameTag}>NaxeCode#505050</Text>;
};

export default class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: "Naxe Chat App",
	});

	render() {
		let deviceWidth = Dimensions.get("window").width;
		return (
			<View>
				<Bar navigation={this.props.navigation} />
				<BackgroundBanner />
				<AvatarIcon />
				<Name />
				<NameTag />
				<StatusBar />
				<Btns />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttTxt: {
		fontSize: 8,
	},
	butt: {
		alignItems: "flex-end",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: -120,
		marginLeft: 130,
	},
	avatar: {
		borderRadius: 20,
		width: 135,
		height: 135,
		marginTop: -165,
		marginLeft: 15,
	},
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
	status: {
		textAlign: "center",
		position: "relative",
		width: Dimensions.get("window").width / 2,
		height: Dimensions.get("window").width / 12,
		right: -Dimensions.get("window").width / 2.4,
		top: -Dimensions.get("window").height / 6,
	},
	banner: {
		zIndex: 0,
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
