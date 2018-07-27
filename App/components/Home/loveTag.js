import React from "react"
import {
  Text,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style'

class Lovetag extends React.Component {
  render() {
    return (
      <View style={styles.lovetag}>
        <View style={styles.leftTag}>
          <Image style={styles.face} source={require('./img/dogPic.jpg')}></Image>
          <View style={styles.basicInfo}>
            <Text style={styles.nickName}>小哥哥</Text>
            <Text style={styles.currentFocus}><Icon style={styles.star} name="md-star"/>&nbsp;唱歌</Text>
          </View>
        </View>
        <View style={styles.rightTag}>
          <Image style={styles.face} source={require('./img/zttPic.jpeg')}></Image>
          <View style={styles.basicInfoReverse}>
            <Text style={styles.nickName}>小姐姐</Text>
            <Text style={styles.currentFocus}>跳舞&nbsp;<Icon style={styles.star} name="md-star"/></Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Lovetag