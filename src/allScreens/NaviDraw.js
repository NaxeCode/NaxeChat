import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";

import LoginScreen from "../screens/Login";
import SignupScreen from "../screens/Signup";
import HomeScreen from "../screens/Home";
import ChatScreen from "../screens/Chat";

import AppyBar from "./AppyBar";

function Feed({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Feed Screen</Text>
			<Button title="Open drawer" onPress={() => navigation.openDrawer()} />
			<Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
		</View>
	);
}

function Notifications() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Notifications Screen</Text>
		</View>
	);
}

function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView {...props}>
			<DrawerItemList {...props} />
			<DrawerItem
				label="Close drawer"
				onPress={() => props.navigation.closeDrawer()}
			/>
			<DrawerItem
				label="Toggle drawer"
				onPress={() => props.navigation.toggleDrawer()}
			/>
		</DrawerContentScrollView>
	);
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
		<Drawer.Navigator
			drawerPosition="right"
			initialRouteName="Home"
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen name="AppBar" component={AppyBar} />
			<Drawer.Screen name="Login" component={LoginScreen} />
			<Drawer.Screen name="Signup" component={SignupScreen} />
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Chat" component={ChatScreen} />
		</Drawer.Navigator>
	);
}

export default function NaviDraw() {
	return <MyDrawer />;
}
