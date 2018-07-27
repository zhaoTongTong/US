import React from 'react'
import {
  View,
  Image,
} from 'react-native';
import Lovetag from './loveTag'
import Todo from './todo'

import styles from './style';


class Home extends React.Component {

  render() {
    return (
      <View style={styles.homePage}>
        <Image style={styles.bgImg} source={require('./img/bg.jpeg')}>
        </Image>
        <Todo/>
        <Lovetag/>
      </View>
    )
  }
}

export default Home
