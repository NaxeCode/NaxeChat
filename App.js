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
	roundness: 15,
	colors: {
		...DefaultTheme.colors,
		background: "#FFFFFF",
		primary: "#C1C0E8",
		accent: "#F0F0FA",
		surface: "#F0F0FA",
		disabled: "#F0F0FA",
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
