// @flow
import { useEffect, useState } from "react";
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Bar from "../../allScreens/AppyBar";
import NexesBar from "./NexesBar";
import ProfileCard from "./ProfileCard";
import DisplayScreen from "./DisplayScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const navigationOptions = ({ navigation }) => ({
	title: "Naxe Chat App",
});

const HomeScreen = ({ props, navigation}: Object): React.Element<any> => {
	const [Name, setName] = useState("");
	const [NumberHolder: Number, setNumber] = useState(0);
	const [email, setEmail] = useState("");
	const [avatar, setAvatar] = useState("");

	useEffect(() => {
		async function setVars() {
			// await AsyncStorage.removeItem("nameID");
			await getNameID(Name, setName);
			await getUserID(NumberHolder, setNumber);
		}
		setVars();
	}, []);

	let deviceWidth = Dimensions.get("window").width;
	return (
		<View>
			<Bar navigation={navigation} />
			<ProfileCard userID={NumberHolder} nameID={Name} />
			<NexesBar />
			<DisplayScreen />
		</View>
	);
};

export default HomeScreen;

function pickRandom(): string {
	let list: Array<string> = ["Pooter", "Howard", "Maddie", "Sans", "Butterlicker", "Bigfish", "Goopgoopgoop", "ieatfruit"];
	let name: string = list[Math.floor(Math.random() * list.length)]
	return name;
}

function generateName(): string {
		// Pick a random name from each list
		const firstName: string = pickRandom();

		// Use a template literal to format the full name
		console.log("my name " + firstName);
		return firstName; //firstName + " " + lastName;
}

const getNameID = async (name, setName) => {
	try {
		const value = await AsyncStorage.getItem("nameID");
		if (value !== null) {
			let currName: string = value;
			console.log(
				"fetching nameID successful, setting nameID = " + value
			);
			setName(value);
		} else {
			let randomNameID = generateName();
			console.log("nameID is null, creating new nameID = " + randomNameID);
			console.log(randomNameID);
			setName(randomNameID);
			storeNameID(name);
		}
	} catch (e) {
		// error reading value
	}
};

const storeNameID = async (value) => {
	try {
		await AsyncStorage.setItem("nameID", value);
	} catch (e) {
		// saving error
	}
};

const GenerateRandomNumber = () => {
	var RandomNumber = Math.floor(Math.random() * 9999999) + 1000000;
	return RandomNumber;
};

const getUserID = async (numb: number, setnumb) => {
	try {
		//await AsyncStorage.removeItem("userID");
		const value = await AsyncStorage.getItem("userID");
		if (value !== null) {
			console.log("fetching userID successful, setting userID = " + value);
			setnumb(value);
		} else {
			let randomUserID: number = GenerateRandomNumber();
			console.log("userID is null, creating new userID = " + randomUserID);
			setnumb(randomUserID);
			storeUserID(numb.toString());
		}
	} catch (e) {
		// error reading value
	}
};

const storeUserID = async (value: string) => {
	try {
		await AsyncStorage.setItem("userID", value);
	} catch (e) {
		// saving error
	}
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
