import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import {
	Avatar,
	Button,
	Card,
	Title,
	Paragraph,
	TextInput,
	Appbar,
} from "react-native-paper";

import Name from "./Name";
import NameTag from "./NameTag";

const ProfileCard = () => {
	return (
		<View>
			<BackgroundBanner />
			<AvatarIcon />
			<Name />
			<NameTag />
			<Btns />
		</View>
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

const AvatarIcon = () => {
	return (
		<Image style={styles.avatar} source={require("../../../assets/boy.jpg")} />
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

export default ProfileCard;

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
	banner: {
		zIndex: 0,
	},
});
