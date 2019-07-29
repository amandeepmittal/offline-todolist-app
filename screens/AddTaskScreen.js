import React, { Component } from 'react'
import { View } from 'react-native'
import { Form, Item, Input, Button, Text as NBText } from 'native-base'

export class AddTaskScreen extends Component {
	state = {
		text: ''
	}

	onChangeText = event => {
		this.setState({ task: event.nativeEvent.text })
	}

	onAddTask = () => {
		this.props.navigation.state.params.saveItem(this.state.task)
		this.props.navigation.goBack()
	}

	render() {
		return (
			<View>
				<View style={{ marginRight: 10 }}>
					<Form>
						<Item>
							<Input
								placeholder='Enter a new task...'
								value={this.state.task}
								autoFocus
								clearButtonMode='always'
								autoCorrect={false}
								onChange={this.onChangeText}
								onSubmitEditing={this.onAddTask}
								returnKeyType={'done'}
							/>
						</Item>
					</Form>
				</View>
				<View style={{ marginTop: 20 }}>
					<Button
						style={{ backgroundColor: '#5067FF', margin: 25, justifyContent: 'center' }}
						onPress={this.onAddTask}
					>
						<NBText style={{ fontWeight: 'bold' }}>Add Task</NBText>
					</Button>
				</View>
			</View>
		)
	}
}

export default AddTaskScreen
