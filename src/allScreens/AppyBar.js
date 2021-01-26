import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

export default class AppyBar extends React.Component {
	render() {
		return (
			<Appbar>
				<Appbar.Action
					icon="alien"
					onPress={() => console.log("Pressed archive")}
				/>
				<Appbar.Action
					style={styles.group}
					icon="account-group"
					onPress={() => console.log("Pressed mail")}
				/>
				<Appbar.Action
					style={styles.cog}
					icon="cog"
					onPress={() => this.props.navigation.toggleDrawer()}
				/>
			</Appbar>
		);
	}
}

const styles = StyleSheet.create({
	cog: {
		position: "absolute",
		right: 0,
	},
	group: {
		position: "absolute",
		right: 35,
	},
});
