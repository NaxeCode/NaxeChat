import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Bar from "../../allScreens/AppyBar";
import NexesBar from "./NexesBar";
import ProfileCard from "./ProfileCard";
import DisplayScreen from "./DisplayScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const navigationOptions = ({ navigation }) => ({
	title: "Naxe Chat App",
});

const HomeScreen = ({ props, navigation }) => {
	const [name, setName] = useState("jeff");
	const [NumberHolder, setNumber] = useState();
	const [email, setEmail] = useState("");
	const [avatar, setAvatar] = useState("");

	useEffect(() => {
		getUserID(NumberHolder, setNumber);
	}, []);

	let deviceWidth = Dimensions.get("window").width;
	let numb = NumberHolder;
	return (
		<View>
			<Bar navigation={navigation} />
			<ProfileCard userID={numb} />
			<NexesBar />
			<DisplayScreen />
		</View>
	);
};

export default HomeScreen;

const getUserID = async (numb, setnumb) => {
	try {
		//await AsyncStorage.removeItem("userID");
		const value = await AsyncStorage.getItem("userID");
		if (value !== null) {
			console.log("fetching userID successful, setting userID = " + value);
			setnumb(value);
		} else {
			let randomUserID = GenerateRandomNumber();
			console.log("userID is null, creating new userID = " + randomUserID);
			setnumb(randomUserID);
			storeUserID(numb.toString());
		}
	} catch (e) {
		// error reading value
	}
};

const storeUserID = async (value) => {
	try {
		await AsyncStorage.setItem("userID", value);
	} catch (e) {
		// saving error
	}
};

const GenerateRandomNumber = () => {
	var RandomNumber = Math.floor(Math.random() * 9999999) + 1000000;
	return RandomNumber;
};

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
