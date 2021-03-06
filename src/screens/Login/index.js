import React, { Fragment } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import firebaseSDK from "../Config/firebaseSDK";

export default class LoginScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: "Naxe Chat App",
	});

	state = {
		name: "Alice",
		email: "test@exm.com",
		password: "123456",
		avatar: "",
	};

	onPressLogin = async () => {
		const user = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			avatar: this.state.avatar,
		};

		const response = firebaseSDK.login(
			user,
			this.loginSuccess,
			this.loginFailed
		);
	};

	loginSuccess = () => {
		console.log("login successful, navigate to Profile.");
		this.props.navigation.navigate("Home", {
			name: this.state.name,
			email: this.state.email,
			avatar: this.state.avatar,
		});
	};

	loginFailed = () => {
		alert("Login failure. Please tried again.");
	};

	onChangeTextEmail = (email) => this.setState({ email });
	onChangeTextPassword = (password) => this.setState({ password });

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					placeHolder="test3@gmail.com"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
				<Button
					style={styles.buttons}
					compact={true}
					icon="login"
					mode="contained"
					onPress={this.onPressLogin}
				>
					Login
				</Button>
				<Button
					style={styles.buttons}
					icon="camera"
					mode="contained"
					onPress={() => this.props.navigation.navigate("Signup")}
				>
					Signup
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
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
