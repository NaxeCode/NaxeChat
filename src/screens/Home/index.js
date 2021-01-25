import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
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
		<Avatar.Image
			size={135}
			source={require("../../../assets/boy.jpg")}
			style={styles.avatar}
		/>
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
			</View>
		);
	}
}

const styles = StyleSheet.create({
	avatar: {
		marginTop: -165,
		marginLeft: 15,
	},
	name: {
		fontSize: 25,
		color: "#FFF",
		textShadowColor: "black",
		textShadowRadius: 3,
		textAlign: "center",
		position: "relative",
		right: -Dimensions.get("window").width / 6,
		top: -Dimensions.get("window").height / 6,
	},
	nameTag: {
		fontSize: 18,
		color: "#EA8220",
		textShadowColor: "black",
		textShadowRadius: 3,
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
