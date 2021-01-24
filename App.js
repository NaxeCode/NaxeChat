import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/Login";
import SignupScreen from "./src/screens/Signup";
import HomeScreen from "./src/screens/Home";
import ChatScreen from "./src/screens/Chat";

const navigation = createStackNavigator();

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

const App = () => {
	return (
		<NavigationContainer>
			<navigation.Navigator>
				<navigation.Screen name="Login" component={LoginScreen} />
				<navigation.Screen name="Signup" component={SignupScreen} />
				<navigation.Screen name="Home" component={HomeScreen} />
				<navigation.Screen name="Chat" component={ChatScreen} />
			</navigation.Navigator>
		</NavigationContainer>
	);
};

export default App;
