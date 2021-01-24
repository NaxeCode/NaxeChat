import React from 'react';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { ImageEditor } from "expo-image-editor";
import * as ImageManipulator from 'expo-image-manipulator';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	Alert
} from 'react-native';

import firebaseSDK from '../Config/firebaseSDK';

export default class Signup extends React.Component {
	state = {
		name: 'no name',
		email: 'test@live.com',
		password: '123456',
		avatar: ''
	};

	onPressCreate = async () => {
		try {
			const user = {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			};
			await firebaseSDK.createAccount(user);
		} catch ({ message }) {
			console.log('create account failed. catch error:' + message);
		}
	};

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });
	onChangeTextName = name => this.setState({ name });

	selectPhoto = async () => {
		// Get permissions to access the media library / camera roll
		const response = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (response.granted) {
			const pickerResult = await ImagePicker.launchImageLibraryAsync();

			if (!pickerResult.cancelled)
			{
				launchEditor(pickerResult.uri);
			}
			else
			{
				Alert.alert("Please enable media library permissions");
			}
		}
	}

	launchEditor = (uri) => {
		setImageUri(uri);
		setEditorVisable(true);

	}

	onImageUpload = async () => {
		const response = await ImagePicker.requestMediaLibraryPermissionsAsync();
		const { status: cameraRollPerm } = await Permissions.askAsync(
			Permissions.MEDIA_LIBRARY
		);
		try {
			// only if user allows permission to camera roll
			if (cameraRollPerm === 'granted') {
				let pickerResult = await ImagePicker.launchImageLibraryAsync({
					allowsEditing: true,
					aspect: [4, 3]
				});
				console.log(
					'ready to upload... pickerResult json:' + JSON.stringify(pickerResult)
				);

				var wantedMaxSize = 150;
				var rawheight = pickerResult.height;
				var rawwidth = pickerResult.width;
				var ratio = rawwidth / rawheight;
				var wantedwidth = wantedMaxSize;
				var wantedheight = wantedMaxSize / ratio;
				// check vertical or horizontal
				if (rawheight > rawwidth) {
					wantedwidth = wantedMaxSize * ratio;
					wantedheight = wantedMaxSize;
				}

				let resizedUri = await new Promise((resolve, reject) => {
					ImageManipulator.manipulateAsync(pickerResult.uri, [{ rotate: 90 }, { flip: ImageManipulator.FlipType.Vertical }],
						{ compress: 1, format: ImageManipulator.SaveFormat.PNG })
						,
						uri => resolve(uri),
						() => reject()
				});
				
				
				let uploadUrl = await firebaseSDK.uploadImage(resizedUri);
				this.setState({ avatar: uploadUrl });
				await firebaseSDK.updateAvatar(uploadUrl);
			}
		} catch (err) {
			console.log('onImageUpload error:' + err.message);
			alert('Upload image error:' + err.message);
		}
	};

	render() {
		return (
			<View>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					placeHolder="test@live.com"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
				<Text style={styles.title}>Name:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextName}
					value={this.state.name}
				/>
				<Button
					title="Signup"
					style={styles.buttonText}
					onPress={this.onPressCreate}
				/>
				<Button
					title="Upload Avatar"
					style={styles.buttonText}
					onPress={this.onImageUpload}
				/>
			</View>
		);
	}
}

const offset = 16;
const styles = StyleSheet.create({
	title: {
		marginTop: offset,
		marginLeft: offset,
		fontSize: offset
	},
	nameInput: {
		height: offset * 2,
		margin: offset,
		paddingHorizontal: offset,
		borderColor: '#111111',
		borderWidth: 1,
		fontSize: offset
	},
	buttonText: {
		marginLeft: offset,
		fontSize: 42
	}
});