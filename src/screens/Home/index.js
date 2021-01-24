import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import AppyBary from "../../allScreens/AppyBar";
import {
	Avatar,
	Button,
	Card,
	Title,
	Paragraph,
	TextInput,
} from "react-native-paper";

const MyComponent = () => {
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

export default class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: "Naxe Chat App",
	});

	render() {
		let deviceWidth = Dimensions.get("window").width;
		return (
			<View>
				<AppyBary navigation={this.props.navigation} />
				{/* All components have to be below card to show up */}
				<Card>
					<Card.Cover source={{ uri: "https://picsum.photos/700" }} />
				</Card>
				<Avatar.Image
					size={135}
					source={require("../../../assets/boy.jpg")}
					style={styles.avatar}
				/>
				<View>
					<Text style={styles.name}>Naxe</Text>
					<Text style={styles.nameTag}>NaxeCode#505050</Text>
					<MyComponent />
					{/*<TextInput label="Email" value={"yo"} style={styles.img} />*/}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	status: {
		textAlign: "center",
		position: "relative",
		width: Dimensions.get("window").width / 2,
		height: Dimensions.get("window").width / 12,
		right: -Dimensions.get("window").width / 2.4,
		top: -Dimensions.get("window").height / 6,
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
	avatar: {
		marginTop: -165,
		marginLeft: 15,
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
