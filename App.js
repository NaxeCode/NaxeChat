import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
	Appbar,
	DefaultTheme,
	Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import NaviDraw from "./src/allScreens/NaviDraw";

import {
	createDrawerNavigator,
	DrawerNavigatorItems,
	DrawerItem,
	DrawerContentScrollView,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		background: "#FF3467",
		primary: "#3498db",
		accent: "#f1c40f",
	},
};

const App = () => {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<NaviDraw />
			</NavigationContainer>
		</PaperProvider>
	);
};

export default App;
