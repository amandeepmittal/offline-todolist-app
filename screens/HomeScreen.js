import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import FloatingButton from '../components/FloatingButton'
import Header from '../components/Header'

export class HomeScreen extends Component {
	static navigationOptions = {
		header: null
	}

	state = {
		isDataReady: false
	}
	componentDidMount = () => {
		this.loadFonts()
	}

	loadFonts = async () => {
		try {
			await Font.loadAsync({
				Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
				Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
				Ionicons: require('../node_modules/native-base/Fonts/Ionicons.ttf')
			})
			this.setState({ isDataReady: true })
		} catch (err) {
			alert('Application Error. Cannot load fonts.')
		}
	}

	onPressFab = () => {
		this.props.navigation.navigate('AddTask')
	}

	render() {
		const { isDataReady } = this.state

		if (!isDataReady) {
			return <AppLoading />
		}
		return (
			<View style={styles.container}>
				<Header />
				<StatusBar barStyle='light-content' />
				<Text>Home Screen</Text>
				<FloatingButton actionOnPress={this.onPressFab} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default HomeScreen
