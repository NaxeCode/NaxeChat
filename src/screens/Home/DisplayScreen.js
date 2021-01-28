import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import DiaryScreen from '../../allScreens/DiaryScreen'
import AboutMeScreen from '../../allScreens/AboutMeScreen'

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = { diary: true }
	}

	render() {
		let displayScreen
		if (this.state.diary) displayScreen = <DiaryScreen />
		else displayScreen = <AboutMeScreen />

		return (
			<View style={styles.container}>
				<View style={styles.contentButtons}>
					<Button
						style={styles.navigationButtons}
						raised
						theme={{ roundness: 0 }}
						mode="contained"
						onPress={() => {
							if (!this.state.diary) {
								this.setState({ diary: true })
							}
						}}
					>
						<Text>Diary</Text>
					</Button>
					<Button
						style={styles.navigationButtons}
						raised
						theme={{ roundness: 0 }}
						mode="contained"
						onPress={() => {
							if (this.state.diary) {
								this.setState({ diary: false })
							}
						}}
					>
						<Text>About Me</Text>
					</Button>
				</View>
				<View>{displayScreen}</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		marginTop: 10,
		marginLeft: 0,
	},

	content: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 150,
		marginLeft: 0,
	},

	contentButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 0,
		marginLeft: 0,
	},

	navigationButtons: {
		width: 200,
	},
})
