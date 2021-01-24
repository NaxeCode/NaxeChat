import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppyBary from "../../allScreens/AppyBar";
import {
	Avatar,
	Button,
	Card,
	Title,
	Paragraph,
	TextInput,
} from "react-native-paper";

export default class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: "Naxe Chat App",
	});

	render() {
		return (
			<View>
				<AppyBary navigation={this.props.navigation} />
				<View>
					{/*<TextInput label="Email" value={"yo"} style={styles.img} />*/}
				</View>

				<Card>
					<Card.Cover source={{ uri: "https://picsum.photos/700" }} />
				</Card>
				<Avatar.Image
					size={150}
					source={require("../../../assets/boy.jpg")}
					style={styles.img}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		width: 50,
		height: 50,
	},
	img: {
		marginTop: -175,
		marginLeft: 15,
	},
	avatar: {
		flex: 1,
		justifyContent: "space-between",
		backgroundColor: "#fff",
		padding: 20,
		margin: 10,
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
