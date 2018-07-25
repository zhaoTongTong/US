import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions
} from 'react-native';
import pxToDp from '../../utils/pxToDp';
// import HomeHeader from '../components/HomeHeader'
import Icon from 'react-native-vector-icons/Ionicons';

const {docWidth, docHeight} = Dimensions.get('window')

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backImg: ''
    }
  }

  onSelectedImg = (imgs) => {
    if (imgs.length === 1) {
      this.setState({
        backImg: imgs.path
      })
      alert(imgs[0].path)
    }
  }

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

const styles = {
  homePage: {
    flex: 1,
    height: docHeight,
    alignItems: 'stretch',
    justifyContent: 'center',
    position: 'relative',
  },
  bgImg: {
    flex: 1,
    justifyContent: 'flex-end',
    width: docWidth,
    height: docHeight,
    alignItems: 'center',
    paddingBottom: pxToDp(50),
    resizeMode: 'cover'
  },
  todo: {
    flex: 1,
    width: docWidth,
    position: 'absolute',
    backgroundColor: 'transparent',
    top: pxToDp(150),
    left: pxToDp(20)
  },
  todoTitle: {
    fontSize: pxToDp(50),
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center"
  },
  todoInput: {
    color: "rgba(255, 255, 255, 0.8)",
    flex: 1,
    lineHeight: pxToDp(80),
    height: pxToDp(80),
    fontSize: pxToDp(50),
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.7)"
  },
  lovetag: {
    position: 'absolute',
    bottom: pxToDp(50),
    left: pxToDp(10),
    right: pxToDp(10),
    backgroundColor: "#ffffff",
    borderRadius: pxToDp(15),
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",

  },
  leftTag: {
    margin: pxToDp(10),
    flexDirection: "row",
    alignItems: 'center',
  },
  nickName: {
    color: 'rgb(52,214,206)',
    fontSize: pxToDp(20),
    paddingBottom: pxToDp(10),
  },
  star: {
    color: "#999",
    fontSize: pxToDp(24),
    padding: pxToDp(10),
  },
  currentFocus: {
    fontSize: pxToDp(22),
    paddingLeft: pxToDp(8),
    paddingRight: pxToDp(8),
  },
  face: {
    width: pxToDp(50),
    height: pxToDp(50),
    borderRadius: pxToDp(25),
    margin: pxToDp(8),
  },
  basicInfoReverse: {
    alignItems: 'flex-end',
  },
  rightTag: {
    margin: pxToDp(10),
    flexDirection: "row-reverse",
    alignItems: 'center',
  }
}

export default Home
