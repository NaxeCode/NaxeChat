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

const NexesBar = () => {
	return (
		<View style={styles.nexBar}>
			<Appbar>
				<Appbar.Action size={20} icon="alien" subtitle="Subtitle" />
				<Text style={styles.nexBartxt}>69,420 nexes</Text>
				<Appbar.Action size={20} icon="white-balance-sunny" />
				<Text style={styles.nexBartxt}>42,069 days</Text>
				<Button
					style={styles.nexBarBttn}
					compact={true}
					mode="contained"
					onPress={() => console.log("Pressed")}
				>
					<Text style={styles.nexBarBttnTxt}>Powers</Text>
				</Button>
				<Button
					style={styles.nexBarBttn}
					compact={true}
					mode="contained"
					onPress={() => console.log("Pressed")}
				>
					<Text style={styles.nexBarBttnTxt}>Married - ToA_Ghost</Text>
				</Button>
			</Appbar>
		</View>
	);
};

export default NexesBar;

const styles = StyleSheet.create({
	nexBartxt: {
		fontSize: 10,
		marginLeft: -5,
	},
	nexBar: {
		marginTop: 25,
	},
	nexBarBttn: {
		marginLeft: 35,
	},
	nexBarBttnTxt: {
		fontSize: 5,
	},
});
