import React from 'react'
import {
  Text,
  View,
  TextInput,
} from 'react-native';

import styles from './style'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }

  onEnd = (e) => {
    alert(e.nativeEvent.text)
  }

  render() {
    return (
      <View style={styles.todo}>
        <Text style={styles.todoTitle}>What is your main focus for today?</Text>
        <TextInput
          style={styles.todoInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          onEndEditing={this.onEnd}
        />
      </View>
    )
  }
}

export default Todo